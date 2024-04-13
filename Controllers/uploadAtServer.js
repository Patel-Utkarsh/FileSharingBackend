const path = require("path")
var randomstring = require("randomstring");
const link = require("../Models/link");
const user = require("../Models/user");
exports.upload = async (req,res) =>{
    const {title,id,size} = req.body;
    const myfile = req.files.file;
    const newPath = path.join(__dirname,'..','.','data',myfile.name);
  
  
    myfile.mv(newPath,(err)=>{
        if(err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
    })

    const randomString = randomstring.generate(5)

   // const newFilePath = filePath.replace(/\\/g, '\\\\');

    try {
       const linkData =  await link.create({title,uploadDate : new Date(),linkCode : randomString,linkData : newPath,size});
        await user.findByIdAndUpdate({_id : id},{$push : {data : linkData._id }});
        res.status(200).json({
            success : true,
            message : 'file uploaded successfully'
    
        })

    }

    catch(err) {
        res.status(500).json({
            success : false,
            message : err.message
    
        })

    }


    




   


}

exports.download = async(req,res)=>{
    const file_id = req.params.filename;

    
    try {
        const validFile = await link.findOneAndUpdate({linkCode : file_id},{$inc : {downloads : 1 }},{new : true});
      

        if(validFile) {
            res.download(validFile.linkData,(err) => {
                if (err) {
                    console.error('Error downloading file:', err);
                    return res.status(500).json({
                        success: false,
                        message: 'Failed to download file'
                    });
                }
            });
    

        }

        else {
            res.status(500).json({
                success: false,
                message: 'No such file exists'
            });

        }
        
        
        
        

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

        
    }
    

 
}
