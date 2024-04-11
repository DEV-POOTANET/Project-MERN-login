const bcrypt = require('bcryptjs')
const User   = require('../model/User')

exports.register = async(req,res)=>{
    try{     
        // cheak user
        const { username , password } = req.body;
        var user = await User.findOne({username})
            //console.log(user)
        if(user){
           return res.status(400).send("User Already exists");
        }
        const salt = await bcrypt.genSalt(10)
        user = new User({
            username,
            password,
        });
        // Encrypt   
        user.password = await bcrypt.hash(password,salt);
        await user.save();
        res.send("Register Success")

    }catch(err){
        console.log(err)
        res.status(500).send('server error !')
    }
}

exports.listUser = async(req,res)=>{
    try{        
        res.send('list Get User')
    }catch(err){
        console.log(err)
        res.status(500).send('server error !')
    }
}

exports.editUser = async(req,res)=>{
    try{        
        res.send('Edit User')
    }catch(err){
        console.log(err)
        res.status(500).send('server error !')
    }
}

exports.deleteUser = async(req,res)=>{
    try{        
        res.send('Delete User')
    }catch(err){
        console.log(err)
        res.status(500).send('server error !')
    }
}