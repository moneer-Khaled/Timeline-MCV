const express = require("express");
const route = require("./config/routes");
const app = express();

app.use('/public', express.static('public')); 


app.set('view engine', 'ejs');




app.use(route);
app.listen(2000, ()=> console.log("Server is on 2000"))