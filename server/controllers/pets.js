var mongoose = require('mongoose');

var Pet = mongoose.model('Pet');

module.exports = {
    GetAll: function(req, res) {
        console.log("Reached the getall request");
        Pet.find({}, function(err, data) {
            if (err) {
                console.log(err); 
                res.json({message: "Error", err: err}); 
            } else {
                console.log("Reached the getall else")
                res.json({message: "Success", data: data}) 
            }                    
        }) 
    },

    add: function(req, res) {
        console.log("Post Data:", req.body)
        Pet.create(req.body, function(err, data) {
            if (err) {
                console.log("Reached the add route")
                res.json({message: "Error", err: err}); 
            } else {
                res.json({message: "Success", data: data}) 
            } 
        })
    },

    getOne: function(req, res) {
        console.log("Reached the getall request")
        Pet.findOne({_id: req.params.id}, function(err, data) {
            if (err) {
                console.log(err); 
                res.json({message: "Error", err: err}); 
            } else {
                console.log("Reached the getall else")
                res.json({message: "Success", data: data}) 
            }                    
        }) 
    },

    alter: function(req, res) {
        console.log("Post Data:", req.body)
        Pet.update({_id: req.params.id}, {$set: {name: req.body.name , type: req.body.type, desc: req.body.desc}}, function(err, data) {
            if (err) {
                console.log("Reached the add route")
                res.json({message: "Error", err: err}); 
            } else {

                res.json({message: "Success", data: data}) 
            }
        }
    )},

    removepet: function(req, res) {
        Pet.findOneAndRemove({_id: req.params.id}, function(err, data){
            if (err) {
                console.log(err); 
                res.json({message: "Error", err: err}); 
            } else {
                res.json({message: "Success", data: data}) 
            }                    
        }) 
    },

}