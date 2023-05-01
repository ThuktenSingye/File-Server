// importing module
const express = require('express');
const app = express();
const {readFile} = require('fs').promises // to avoid callback in readfile
const port = 3000;

app.get("/", async (req, res)=>{
    try{
        res.send(await readFile('./index.html', 'utf-8')) // to encorde the file using utf-8 encoding
    }catch(err){
        console.error(err)
    }
})
app.get('/about', async (req, res)=>{
    try{
        res.send(await readFile('./about.html', 'utf-8'))
    }catch(err){
        console.error(err)
    }
})
app.get('/contact-me', async (req, res)=>{
    try{
        res.send(await readFile('./contact-me.html', 'utf-8'))
    }catch(err){
        console.error(err)
    }
    
})
app.get('/about', async (req, res)=>{
    try{
        res.send(await readFile('./about.html', 'utf-8'))
    }catch(err){
        console.error(err)
    }
    
})
// app.all('*',async (req, res)=>{ // accept all the request that doesnt match any above path
//     res.send(await readFile('./404.html', 'utf-8'))
// })
app.use(async (req, res)=>{ // accept all the request that doesnt match any above path
    try{
        res.send(await readFile('./404.html', 'utf-8'))
    }catch(err){
        console.error(err)
    }
    
})
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})