var mongoose = require("mongoose")

var PetSchema = new mongoose.Schema({
    name:{
        type: String ,
        minlength: 3,
        required: true,
        message: "Pet name is required"
            },

    type:{
        type: String ,
        minlength: 3,
        required: true,
        message: "Pet type is required"
            },

    desc:{
        type: String,
        minlength: 3,
        required: true, 
        message: "desc is required",

        }
})

var Pet = mongoose.model('Pet', PetSchema)