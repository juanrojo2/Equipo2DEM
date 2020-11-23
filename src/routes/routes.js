const express = require("express");
const router = express.Router();
const cors = require("cors");

const mysqlConnection = require("../db/db");

router.post("/SingUp/", (req, res) => {
  const { name, userEmail, password } = req.body;
  //const abreviatura = req.body.mod
  mysqlConnection.query(
    `INSERT INTO USUARIO (NOMBRE_COMPLETO, CORREO_ELECTRONICO, CONTRASENA) VALUES ('${name}, ${userEmail}', '${password}')`,
    (err, rows, fields) => {
      if (!err) {
        res.json({ message: "Usuario registrado" });
      } else {
        res.json({ message: "Usuario no registrado" });
      }
    }
  );
});

router.post("/Login/", (req, res) => {
  const { userEmail, password } = req.body;
  //const abreviatura = req.body.mod
  console.log(userEmail, password);
  mysqlConnection.query(
    `SELECT * FROM USUARIO WHERE CORREO_ELECTRONICO='${userEmail}' AND CONTRASENA='${password}'`,
    (err, rows, fields) => {
      if (!err) {
        res.json({ message: "Bienvenido" });
      } else {
        console.log(err);
        res.json({ message: "Correo y/o contraseña erroneos" });
      }
    }
  );
});

module.exports = router;
