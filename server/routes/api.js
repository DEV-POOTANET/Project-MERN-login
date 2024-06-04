const express = require('express')
const router  = express.Router()

// Controller
const { register,
        login,
        listUser,
        editUser,
        deleteUser,
        currentUser
} = require('../Controller/auth')

// middlware
const { auth } = require('../middleware/auth')

// Enpoint http://localhost:9090/api/register
// Method POST 
// Access publish
router.post('/register',register)

// Enpoint http://localhost:9090/api/login
// Method POST 
// Access publish
router.post('/login',login)

// Enpoint http://localhost:9090/api/current-user
// Method POST 
// Access privatte
router.post('/current-user',auth,currentUser)

// Enpoint http://localhost:9090/api/auth
// Method Get 
// Access publish
router.get('/auth',listUser)

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
