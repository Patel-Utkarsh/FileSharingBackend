const user = require("../Models/user");

exports.login = async (req,res)=>{
    const {email,password} = req.body;

    try {
        const validPerson = await user.findOne({email})
                                  .populate("data")
                                .exec();
        if(validPerson && password === validPerson.password) {
           return res.status(200).json({
                success : true,
                message : 'logged in successfully',
                user : validPerson
            })
        }

        else {
            return res.status(400).json({
                success : false,
                message : 'bad credentials',
                
            })

        }
        
    } catch (error) {
        res.status(404).json({
            success : false,
            message : console.log(error.message)

        })

        
    }
}


exports.signup = async(req,res) => {
    const {email,password} = req.body;

    try {
        const validPerson = await user.findOne({email});
        if(validPerson) {
          return  res.status(400).json({
                success : false,
                message : 'account already exits'
            })

        }

      await user.create({email,password});
       res.status(200).json({
        success : true,
        message : 'account created successfully',
     
    })



         
        
        
    } catch (error) {
        res.status(404).json({
            success : false,
            message : error.message
        })

        
    }


}