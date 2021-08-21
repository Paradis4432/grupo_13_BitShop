const express = require("express");
const router = express.Router();
const user = require("../controllers/user");

//login handle
router.get("/login", user.login);    
router.get("/register", user.register);  

//register handle
router.post('/register', (req,res)=>{})
router.post('/login', (req,res)=>{})

//logout
router.get('/logout',(req,res)=>{})

module.exports = router;