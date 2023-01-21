const express=require('express');

const app=express();

const bicycles=require('./data/data.json');

//Declaring ejs as view engine: command npm i view engine
app.set('view engine','ejs');

//miidleware to declare static files folder
app.use(express.static('public'));

//Homepage
app.get('/',(req,res)=>{
    return res.render('bicycles',{
        bicycles,
    });
});

//overview page
app.get('/bicycle',(req,res)=>{
    console.log(req.query.id)

    const bicycle=bicycles.find((b)=>b.id===req.query.id)
    
    return res.render('overview',{
        bicycle
    });
});

app.listen(3000,()=>console.log('server is running at port 3000'));