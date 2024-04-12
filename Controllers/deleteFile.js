const link = require("../Models/link");
const user = require("../Models/user");
const fs = require('fs')

exports.deletefile = async(req,res) => {
    const{id,linkCode} = req.body;

    try {
        const linkId = await link.findOne({linkCode});
       
        await user.findByIdAndUpdate({_id : id},{$pull : {data : linkId._id}})
        fs.unlinkSync(linkId.linkData);

        await link.findByIdAndDelete({_id : linkId._id});

        res.status(200).json({
            success : true,
            message : 'file deleted successfully'
        })
        

        
    } catch (error) {
        res.status(400).json({
            success : false,
            message :  error.message
        })
        
    }
}