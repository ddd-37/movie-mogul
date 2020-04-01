const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const buildPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 3002;

app.use(express.static(buildPath));

const pino = require("express-pino-logger")();

app.use(bodyParser.json());
app.use(pino);

console.log(buildPath);

// Serve up the index page no matter what
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(port, () => {
  console.log("Server is running!");
});
