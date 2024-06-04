const bcrypt = require('bcryptjs')
const User   = require('../model/User')
const jwt    = require('jsonwebtoken')

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

exports.login = async(req,res) =>{
    try{
        const { username, password} = req.body;
        var user = await User.findOneAndUpdate({username},{new:true})
        if(user && user.enabled){

            // check password
            const isMatch = await bcrypt.compare(password,user.password);
            if(!isMatch){
                return res.status(400).send("Password Invalid")
            }

            // Payload 
            const payload ={
                user:{
                    username:user.username,
                    role:user.role
                }
            }

            // Generate Token
            jwt.sign(payload,
                    'jwtSecret',
                    {expiresIn: 3600}, (err,token)=>{
                        if(err) throw err;
                        res.json({token,payload})
            })

        }else{
            return res.status(400).send("User not found !!!");
        }


    }catch(err){
        res.status(500).send("server error !");
    }
}

exports.currentUser = async(req,res)=>{
    try{
        // model User
        console.log('controller',req.user)
        const user = await User.findOne({ username : req.user.username })
        .select('-password').exec();
        res.send(user)
        //console.log('user',user)

    }catch(err){
        console.log(err)
        res.status(500).send("server error !");
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