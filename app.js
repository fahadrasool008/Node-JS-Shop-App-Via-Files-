const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("Server started at port: 3000");
});
app.listen(3000);