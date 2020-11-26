let express = require('express');

let app = express();
let logger = require('morgan');
let cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(logger('dev'));
app.use(cookieParser());

app.use((req,res,next) => {
    let count = req.cookies.count;
    if(count){
        res.cookie("count", Number(count) + 1)
    }else{
        res.cookie('count',1)
    }
    next();
})


app.get('/',(req,res) => {
    res.send('<h2>Welcome to express</h2>');
});

app.get('/about',(req,res) => {
    res.send("My Name is qwerty")
})


app.post('/form',(req,res) => {
    res.send(req.body);
})

app.post('/json',(req,res) => {
    res.send(req.body);
})

app.use('/admin',(req,res,next) => {
    next('Unauthorized');
})

app.use((req,res,next) => {
   
    res.send('page not found ')
});

app.use((err,req,res,next) => {
    res.send(err)
})

app.listen(3000, () => {
    console.log("Welcome to server at 3000");
})