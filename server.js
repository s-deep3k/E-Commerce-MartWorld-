require('dotenv').config()
require('./src/db')
const port = process.env.PORT 
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')

//Middleware
app.use('/public',express.static('public'))                               //Static files

app.set('view engine','ejs')

app
.get('/home',(req,res)=>{
    res.render('home')
}) 
.post('/signup',(req,res)=>{
    
})


.get('*',(req,res)=>{
    res.status(404).render('error')
})

.listen(port,()=>{
    console.log('Server is up on port',port);
})