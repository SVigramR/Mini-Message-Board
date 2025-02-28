const { Router } = require("express")
const links = require("./links")
const formatDate = require("./date")

const indexRouter = Router();

const messages = [
    {
      text: "Amazing!",
      user: "Jake",
      added: formatDate(new Date())
    },
    {
      text: "Howdy!",
      user: "Marco",
      added: formatDate(new Date())
    }
  ];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages, links: links });
});

indexRouter.post("/new",(req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;
  const messageAdded = formatDate(new Date().toString());
  messages.push({ text: messageText, user: messageUser, added: messageAdded });
  res.redirect("/")
})

indexRouter.get("/details:id", (req, res) => {
  const messageId = parseInt(req.params.id.substring(1));

  if (messageId >= 0 && messageId < messages.length) {
    res.render("details", { 
      title: "Message Details", 
      message: messages[messageId], 
      messageId: messageId,
      links: links 
    });
  } else {
    res.status(404).send("Message not found");
  }
});
 
module.exports = indexRouter;