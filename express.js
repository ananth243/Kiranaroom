const express= require('express');

const app=express();

app.set('view engine', 'ejs');

app.listen('8080');

app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/delivery-info', (req, res)=>{
    res.render('hostel');
})

app.use((req, res)=>{
    res.status(404).render('404');
});
