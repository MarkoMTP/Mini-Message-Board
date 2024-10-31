const express = require("express");
const app = express();
app.set("view engine", "ejs");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.use("/", indexRouter);

app.use("/new", newRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("My first Express App on port  " + `${PORT}`);
});
