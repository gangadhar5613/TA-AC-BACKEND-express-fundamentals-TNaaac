let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));

app.use(logger('dev'));


app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/users',(req,res) => {
    res.send('Welcome to users page');
});

app.get('/projects',(req,res) => {
    res.sendFile(__dirname + '/projects.html');
})


















app.listen(4000,() => {
    console.log('Server is listening at port 4000');
})