const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/about', (req, res)=>{
    res.render('about');
})

app.get('/blog/:username', (req, res)=>{
    let username = {username: req.params.username};
    res.render('blog', username);
})

app.post('/blog', (req,res)=>{
    let username = req.body.username;
    console.log(username);
    res.redirect(`/blog/${username}`);
    fs.readFile('./blog.txt','utf-8' ,(err, data)=>{
        fs.writeFile('./blog.txt', data + username + '\n', ()=>{})
    })
})

app.listen(PORT, ()=>{
    console.log('Server was run');
})
