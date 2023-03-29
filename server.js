const express = require('express');

const app = express()

const http = require('http').createServer(app)

const PORT = process.env.PORT || 3000

http.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send('hellow world')
})