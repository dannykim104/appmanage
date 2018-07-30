var mongoose = require("mongoose")

var AppSchema = new mongoose.Schema({
    title:{
        type: String ,
        minlength: 3,
        required: true,
        message: "Title is required"
            },

    price:{
        type: Number ,
        default: 0,
        required: true,
        message: "Price is required"
            },

    desc:{
        type: String,
        minlength: 3,
        required: true, 
        message: "Desc is required",

        },

    imageURL:{
        type: String,
        minlength: 3,
        required: true, 
        message: "Image is required",

        },

    likes:{
        type: Number,
        default: 0,
        message: "likes are required",

    },


})

var App = mongoose.model('App', AppSchema)