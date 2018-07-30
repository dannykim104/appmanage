var mongoose = require('mongoose');

var App = mongoose.model('App');

module.exports = {
    GetAll: function(req, res) {
        console.log("Reached the getall request");
        App.find({}).sort('-likes').exec(function(err, data) {
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
        App.create(req.body, function(err, data) {
            if (err) {
                console.log("Reached the add route", err)
                res.json({message: "Error", err: err}); 
            } else {
                res.json({message: "Success", data: data}) 
            } 
        })
    },

    getOne: function(req, res) {
        console.log("Reached the getall request")
        App.findOne({_id: req.params.id}, function(err, data) {
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
        App.update({_id: req.params.id}, {$set: {title: req.body.title , price: req.body.price, desc: req.body.desc}}, function(err, data) {
            if (err) {
                console.log("Reached the add route")
                res.json({message: "Error", err: err}); 
            } else {

                res.json({message: "Success", data: data}) 
            }
        }
    )},

    removepet: function(req, res) {
        App.findOneAndRemove({_id: req.params.id}, function(err, data){
            if (err) {
                console.log(err); 
                res.json({message: "Error", err: err}); 
            } else {
                res.json({message: "Success", data: data}) 
            }                    
        }) 
    },

    addlike: function(req, res) {
        console.log("Post Data:", req.params.id)
        App.findOneAndUpdate({_id: req.params.id}, {$inc: {likes:1 }}, function(err, data) {
            if (err) {
                console.log("Reached the add route")
                res.json({message: "Error", err: err}); 
            } else {
                res.json({message: "Success", data: data}) 
            } 
        })
    },

}