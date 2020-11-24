const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();

app.set("port", process.env.PORT || 3001);

app.use(express.json());

app.use(cors({ origin: "*" }));
//app.use(cors({origin: 'https://kuepj-3000.sse.codesandbox.io'}));

app.get("/", (req, res) => {
  res.send("hi");
});
// Routes//
app.use(routes);

app.listen(app.get("port"), () => {
  console.log(`running server port 3001`);
});

//Codesanbox
