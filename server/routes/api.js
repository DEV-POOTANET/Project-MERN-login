const express = require('express')
const router  = express.Router()

// Controller
const { register,listUser,editUser,deleteUser} = require('../Controller/auth')


// Enpoint http://localhost:9090/api/auth
// Method Get 
// Access publish

router.get('/auth',listUser)

// Enpoint http://localhost:9090/api/auth
// Method POST 
// Access publish
router.post('/auth',register)

// Enpoint http://localhost:9090/api/auth
// Method PUT
// Access publish
router.put('/auth',editUser)

// Enpoint http://localhost:9090/api/auth
// Method Delete
// Access publish
router.delete('/auth',deleteUser)

module.exports = router


// router.delete('/auth',(req,res)=>{
//     res.send('Hell Api del')    
// })
