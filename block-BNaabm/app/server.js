let express = require("express");

let app = express();



function customMiddleware(req,res,next){
    console.log(req.method,req.url);
    next();
}

app.use(customMiddleware);

app.get('/',(req,res) => {
    res.send("Welcome to sever");
})

app.listen(4000,() => {
    console.log("Server is listening at 4000 port")
})