const mongoose = require("mongoose");
const dbConnect = async () => {
    const dbConnect = await mongoose.connect('mongodb+srv://utkarshp04:ySRIE8PyN4xskPII@cluster0.nuzes1o.mongodb.net/databridge',{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })

    .then(()=>{
        console.log('Db connected successfully')
    })

    .catch((err)=>{
        console.log(err);
    })
}

module.exports = dbConnect;