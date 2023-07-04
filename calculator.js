    const express = require('express')
    const app = express()
    
    const bodyParser = require('body-parser')
    
    const port = 5000
    
    app.use(bodyParser.json())
    
    app.post('/sum',(req,res)=>{
        let sum = req.body.num1 + req.body.num2;
        console.log(req.body);
        res.send(`Sum of ${req.body.num1} and ${req.body.num2} is ${sum}`)
    })
    
    app.post('/subtraction',(req,res)=>{
        let sub = req.body.num1 - req.body.num2;
        console.log(req.body,"");
        res.send(`Subtraction of ${req.body.num1} and ${req.body.num2} is ${sub}`)
    })
    
    app.post('/multiplication',(req,res)=>{
        let product = req.body.num1 * req.body.num2;
        console.log(req.body,"");
        res.send(`Product of ${req.body.num1} and ${req.body.num2} is ${product}`)
    })
    
    app.post('/divide',(req,res)=>{
        let divide = req.body.num1 / req.body.num2;
        console.log(req.body,"");
        res.divide(`Sum of ${req.body.num1} and ${req.body.num2} is ${divide}`)
    })
    
    app.post('/modulus',(req,res)=>{
        let mod = req.body.num1 % req.body.num2;
        console.log(req.body,"");
        res.send(`mod of ${req.body.num1} and ${req.body.num2} is ${mod}`)
    })
    
    app.post('/square-root',(req,res)=>{
        let square = req.body.num1 ** req.body.num2;
        console.log(req.body,"");
        res.send(`Square of ${req.body.num1} and ${req.body.num2} is ${square}`)
    })
    
    
    
    app.listen(port,()=>{
        console.log(`listining on ${port}`);
    })
    
    