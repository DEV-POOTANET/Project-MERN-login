
exports.register = async(req,res)=>{
    try{        
        res.send(req.body.username)
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