const { Router } = require("express")
const links = require("./links")

const newRouter = Router();

newRouter.get("/",(req, res) => {
    res.render("form", { links: links })
    
});

module.exports = newRouter;