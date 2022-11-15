const express = require('express');

const app = express();

const PORT = 5000;

app.get("/",(res,req)=>{
    res.render('hello');
})

app.listen(PORT, () => console.log("server started " + PORT));