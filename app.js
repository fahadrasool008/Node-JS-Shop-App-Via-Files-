const express = require('express');
const rootDir = require('./utils/getRootDir');
const path = require('path');
const adminRoutes = require('./routes/adminRoutes')
const shopRoutes = require('./routes/shopRoutes')
const errorRoutes = require('./routes/errorsRoutes')
const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir,'public')));
app.use(adminRoutes);
app.use(shopRoutes);
app.use(errorRoutes);

app.listen(3000);