const bcrypt = require('bcryptjs')
const User   = require('../model/User')
const jwt    = require('jsonwebtoken')

exports.listUsers = async(req,res)=>{
    try{     
        const user = await User.find({}).select('-password').exec();
        res.send(user)

    }catch(err){
        console.log(err)
        res.status(500).send('server error !')
    }
}

exports.readUser = async(req,res)=>{
    try{   
        const id = req.params.id
        const user = await User.findOne({_id:id}).select('-password').exec();  
        res.send(user)

    }catch(err){
        console.log(err)
        res.status(500).send('server error !')
    }
}
exports.updateUser = async(req,res)=>{
    try{     
        res.send('hello u')

    }catch(err){
        console.log(err)
        res.status(500).send('server error !')
    }
}
exports.removeUser = async(req,res)=>{
    try{     
        const id = req.params.id
        const user = await User.findOneAndDelete({_id:id})
        res.send(user)

    }catch(err){
        console.log(err)
        res.status(500).send('server error !')
    }
}