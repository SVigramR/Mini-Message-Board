const { Router } = require("express")

const indexRouter = Router();

const messages = [
    {
      text: "Amazing!",
      user: "Jake",
      added: new Date()
    },
    {
      text: "Howdy!",
      user: "Marco",
      added: new Date()
    }
  ];
  

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});


module.exports = indexRouter;