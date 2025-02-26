const { Router } = require("express")
const links = require("./links")

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
  res.render("index", { title: "Mini Messageboard", messages: messages, links: links });
});

indexRouter.post("/new",(req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/")
})


module.exports = indexRouter;