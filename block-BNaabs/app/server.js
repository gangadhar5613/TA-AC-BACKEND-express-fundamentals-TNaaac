let express = require('express');

let app = express();


app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/new',(req,res) => {
    res.sendFile(__dirname + '/new.html');
});

app.get('/users/:username',(req,res) => {
    let variable = req.params.username;
    res.send(variable);
})

app.post('/new',(req,res) => {
    res.send(req.query);
});



app.listen(3000,() => {
    console.log('server running at port 3000');
})