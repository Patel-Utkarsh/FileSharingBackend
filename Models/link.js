const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },

    uploadedBy : {
        type : String,
       // required : true,

    },

    uploadDate : {
        type : String,
        required : true,
    },


    linkCode : {
        type : String,
        required : true,
    },

    linkData : {
        type : String,
        required : true,
    },

    downloads : {
        type : Number,
        default : 0
    },

    size : {
        type : String
    }

})

module.exports = mongoose.model('link',schema);
