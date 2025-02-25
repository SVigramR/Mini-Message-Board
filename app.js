const express = require("express");
const app = express();
const path = require("node:path");
const newRouter = require("./routes/newRouter");
const indexRouter = require("./routes/indexRouter");

const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", newRouter)
app.use("/", indexRouter)

app.listen(PORT, () => {
    console.log(`Mini Message Board`)
});