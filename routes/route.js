const express = require('express');
const router = express.Router();

const User = require('../models/users');

// retreiving users
router.get('/users', (req, res, next) => {
    User.find(function(err, users){
        res.json(users);
    })
});

// add users
router.post('/user', (req, res, next) => {
    let newUser = new User({
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       phone_number: req.body.phone_number 
    });

    newUser.save((err, user) => {
        if(err)
        {
            res.json({msg: 'Failed to add user'});
        }
        else
        {
            res.json({msg: 'User added successfully'});
        }
    });
});

// delete users
router.delete('/user/:id', (req, res, next) => {
    User.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json('Error removing user: ' +err);
        }
        else
        {
            res.json('User removed successfully: ' +result);
        }
    });
});


module.exports = router;