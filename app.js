const express = require("express");
const app = express();
const newRouter = require("./routes/newRouter");
const indexRouter = require("./routes/indexRouter");

const PORT = process.env.PORT || 3000;

app.use("/new", newRouter)
app.use("/", indexRouter)

app.listen(PORT, () => {
    console.log(`Mini Message Board`)
});