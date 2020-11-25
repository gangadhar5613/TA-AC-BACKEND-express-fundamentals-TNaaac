let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');


let app = express();

app.use(logger('dev'))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use((req,res,next) => {
    console.log(req.cookies);
    res.cookie("username","hello");
    next();
})

app.get('/about',(req,res) => {
    res.send("welcome");
})

app.listen(3000,() => {
    console.log('Server is listening at port 3000');
})

