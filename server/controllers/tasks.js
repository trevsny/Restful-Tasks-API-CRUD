const mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    index: (req, res) => {
        User.find({}, (err, users) => {
            res.json({tasks:users});
        })
    },
    show: (req,res) => {
        User.find({_id: req.params.id}, (err, user) => {
            res.json({task:user});
        })
    },
    edit: (req,res) => {
        User.find({_id: req.params.id}, (err, user) => {
            if (err) {
                console.log(err);
            } else {
                res.json(user);
            }
        })
    },
    create: (req,res) => {
        var user = new User();
        user.title = req.body.title;
        user.description = req.body.description;
        user.save((err) => {
            if (err){
                console.log(err);
            } else {
                res.json(user); //I can  include a {message: "Success"} when rendering json too
            }
        })
    },
    update: (req,res) => {
        User.findOne({_id: req.params.id}, (err, user) => {
            console.log(user);
            user.title       = req.body.title;
            user.description = req.body.description;
            user.completed   = true;
            user.save((err) => {
                if (err){
                    console.log(err);
                    res.json(user)
                } else {
                    console.log(req.body);
                    res.json({user:user});
                }
            })
        })
    },
    destroy: (req,res) => {
        User.remove({_id: req.params.id}, (err) => {
        
        });
    }
}