const link = require("../Models/link");
const user = require("../Models/user");

exports.getData = async (req,res)=> {
    const {id} = req.body;
    try {
        const userData = await user.findById({_id : id})
                        .populate("data")
                        .exec();

        return res.status(200).json({
            success : true,
            userData
        })

        
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : error.message
        })
        
    }

}

exports.getLinkData = async (req,res)=> {
    const {code} = req.body;

    try {
        const data = await link.findOne({linkCode : code});
        if(data) {
          return  res.status(200).json({
                success : true,
                data
            })

        }

        else {
          return  res.status(404).json({
                success : false,
                message : 'no page exists'
            })

        }
       
        
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
        
    }
}