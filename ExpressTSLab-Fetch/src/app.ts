import express, {Application, Request, Response} from 'express'

const app:Application =express()
const port:number=3009

app.get("/todos", (req:Request,res:Response)=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json => res.send(json))
})

app.get('/cats',(req:Request,res:Response)=>{
    fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) =>  res.send(`<img src=${data[0].url} />`))
    })

app.get("/posts", (req:Request,res:Response)=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => res.send(data))
})

app.get('/photos', (req:Request,res:Response)=>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(data => res.send(`<img src=${data[1].url} />`))
})
app.listen(port, ()=>console.log("express started"))