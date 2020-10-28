//creating express app
const express = require("express");
const app = express();

// adding configuration file
const Config = require("./config/config.json");

// adding middlewares.
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

// connecting to mongo server via mongoose.
const mongoose = require("mongoose");

const db = Config.mongoURL;
mongoose
  .connect(db, {
    addNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo db connected sucessfully!!"))
  .catch((err) => console.error("mongoose connection error:", err));

// creating http server
const PORT = Config.PORT;
const port = prosess.ENV.PORT || PORT;

app.listen(port, () => {
  console.log("server started at port ", port);
});
