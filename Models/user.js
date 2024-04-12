const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    data : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "link"
        }
    ]



})

module.exports = mongoose.model('user',schema);