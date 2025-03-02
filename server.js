const express = require('express');
const initDB = require('./config/db');
const bodyParse = require('body-parser');
const app = express(); 
const userRouters = require('./app/routes/user');
const toolsRouters = require('./app/routes/tools');
const categoryRouters = require('./app/routes/category');
const majorRouters = require('./app/routes/major');
const port = 3001; 

app.use(
    bodyParse.json({
        limit: '20mb'
    })
);

app.use(
    bodyParse.urlencoded({
        limit: '20mb',
        extended: true
    })
);


app.use(userRouters);
app.use(toolsRouters);
app.use(categoryRouters);
app.use(majorRouters);




app.listen(port, () => {
    console.log('La Aplicacion esta en linea'); 
})

initDB();