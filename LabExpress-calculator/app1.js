const express =require('express')
const app = express()
let count = 0

app.use(express.json())
app.use((req,res,next)=>{
    count++
    console.log('hello from use, number of request: '+ count);
    next()
})
// this exercise to practice req method req.query
//app.method(path, handler callBack fun)
const auth= (req,res,next)=>{
    if (req.query.Admin == "true"){
        
        next()
    }else{
        console.log('You are not Admin');
        res.json({'msg':'You are not allowed '})    
    }
}
const addFun = (req,res)=>{
    console.log('add');
    let sum = parseInt( req.params.num1) + parseInt (req.params.num2)
    res.send(`${req.params.num1}+ ${req.params.num2} = ${sum}`)
}
const subFun =(req,res)=>{
    console.log('sub');
    let sum = parseInt( req.params.num1) - parseInt (req.params.num2)
    res.send(`${req.params.num1} - ${req.params.num2} = ${sum}`)
}
const mulFun = (req,res)=>{
    console.log('multiply');
    let sum = parseInt( req.params.num1) * parseInt (req.params.num2)
    res.send(`${req.params.num1} * ${req.params.num2} = ${sum}`)
}
const divideFun =(req,res)=>{
    console.log('divide');
    let sum = parseInt( req.params.num1) / parseInt (req.params.num2)
    res.send(`${req.params.num1} / ${req.params.num2} = ${sum}`)
}
app.get('/add/:num1/:num2', auth, addFun)
app.get('/sub/:num1/:num2', auth, subFun)
app.get('/mul/:num1/:num2', auth, mulFun)
app.get('/divide/:num1/:num2',  auth, divideFun)

app.get('/operations/:num1/:num2', (req,res)=>{
    let num1 = parseInt( req.params.num1)
    let num2 = parseInt (req.params.num2)
    let sum = num1+num2
    let sub = num1 -num2
    let mul = num1*num2
    let divide = num1/num2

    res.json({
        'add': `${req.params.num1} + ${req.params.num2} = ${sum}`,
        'sub': `${req.params.num1} - ${req.params.num2} = ${sub}`,
        'mul': `${req.params.num1} * ${req.params.num2} = ${mul}`,
        'divide': `${req.params.num1} / ${req.params.num2} = ${divide}`
})
})

app.get('/square',(req,res)=>{
       let sum = req.body.num1 * req.body.num1
        res.send(`The square of ${req.body.num1} is ${sum}`)
    })

app.listen(3002,()=> console.log('express started'))