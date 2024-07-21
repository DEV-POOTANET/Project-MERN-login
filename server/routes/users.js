const express = require('express')
const router  = express.Router()

// Controller
const { 
    listUsers,
    readUser,
    updateUser,
    removeUser
 } = require('../Controller/users')

// middlware
const { auth,adminCheck} = require('../middleware/auth')

// Enpoint http://localhost:9090/api/users
// Method GET 
// Access Private
router.get('/users',listUsers)

// Enpoint http://localhost:9090/api/users/:id
// Method GET 
// Access Private
router.get('/users/:id',readUser)

// Enpoint http://localhost:9090/api/users/:id
// Method PUT
// Access Private
router.put('/users/:id',updateUser)

// Enpoint http://localhost:9090/api/users/:id
// Method DELETE 
// Access Private
router.delete('/users/:id',removeUser)




module.exports = router
