const express = require("express");
const app = express();
app.set("view engine", "ejs");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
app.set("views", path.join(__dirname, "views"));
app.use("/", indexRouter);

app.use('/', indexRouter)

  
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log("My first Express App on port  " + `${PORT}`);
  });