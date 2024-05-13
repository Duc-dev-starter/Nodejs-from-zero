const express = require('express') //cú pháp commonjs
//import //cú pháp es modules
const app = express(); //app express
require('dotenv').config();
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web');

const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})

