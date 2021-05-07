const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

//iniciando o app
const app = express();

app.use(express.json());

app.use(cors());

require('dotenv').config()

//iniciando o db
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.npp7c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
);

requireDir('./models');


//rotas
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', require("./routes/routes"));


app.listen(3333);