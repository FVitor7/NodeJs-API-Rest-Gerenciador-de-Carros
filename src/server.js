const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
var http = require('http');
const path = require("path");

const PORT = process.env.PORT || 5000

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

//iniciando o app
const app = express();

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");


require('dotenv').config()

//iniciando o db
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.npp7c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
);

requireDir('./models');


//home
app.get("/", (request, response) => {
    return response.render("html/index.html");
  });

//rotas
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', require("./routes/routes"));


app.listen(PORT);