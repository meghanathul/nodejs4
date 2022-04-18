const cors =require('cors')
const express=require('express');
const server=express();

server.use(cors())  //cors will enable

server.get('/',(req,res)=>{
    res.send({name:'meghana'})
})

server.get('/user',(req,res)=>{
    res.send('Hii')
})
server.listen(5000,()=>{
    console.log('server is running.......')
})