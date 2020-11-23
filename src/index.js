const express = require("express");

const cors = require("cors");
//const sha1 = require("sha1");
// const cookieParser = require("cookie-parser");

let port = process.env.PORT || 5000;

const routes = require("./routes/routes");

const app = express();

app.use(express.json());

//app.use(cors({origin: '*'}));
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //acepta peticiones desde cualquier sitio
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT,POST,OPTIONS,PATCH,GET,DELETE"
  ); //acepta los metodos CRUD
  res.setHeader("Content-Type", "application/json;charset=utf-8"); //acepta datps tipo JSON y caracteres especiales
  next();
});
// Routes//
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
