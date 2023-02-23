const express = require('express')
const app = express()
const data =require('./data')

app.use(express.json())
app.get('/users', (req,res)=>{
    res.send(data)
})
app.post('/users', (req,res)=>{
    data.push(req.body)
    res.send(data)
})
app.delete('/users/:name', (req,res)=>{
    res.send(data.filter(record => record.name !== req.params.name ))
})
app.put('/users/:name', (req,res)=>{
    let record =data.find(element => element.name == req.params.name)
    record.age= req.body.age
    res.send(data)
})
app.listen(3005, ()=> console.log('express started'))