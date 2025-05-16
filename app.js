const express = require('express');
const rootDir = require('./utils/getRootDir');
const path = require('path');

const app = express();

app.set('views','views');
app.set('view engine','ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir,'public')));

app.get('/',(req,res) => {
    res.send("Server started at port: 3000");
});
app.listen(3000);