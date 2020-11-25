let express = require('express');
let app = express();







app.use('/admin',(req,res,next) => {
    next("Not authorized")
})

app.get('/',(req,res) => {
    console.log(req.method);
    res.send("Welcome to home page");
})

app.get('/about', (req,res) => {
   res.send("Welcome to about page")
})

app.use((req,res,next) => {
    res.send("Page not found")
})

app.use((err,req,res,next) => {
    res.send(err);
})

app.listen(3000, () => {
    console.log('Server listening at port 3000');
})