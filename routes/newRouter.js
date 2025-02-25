const { Router } = require("express")

const newRouter = Router();

newRouter.get("/",(req, res) => res.send("New Page"));

module.exports = newRouter;