const mysql = require("mysql");
const mysqlConnection = mysql.createConnection({
  host: "bvuxy2niwv9b0plqwnxl-mysql.services.clever-cloud.com",
  user: "uugt7sr9trhqcgjv",
  password: "vKOyaKFjQyYFrXfvrcbK",
  database: "bvuxy2niwv9b0plqwnxl",
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("base de datos conectada!");
  }
});

module.exports = mysqlConnection;
