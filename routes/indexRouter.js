const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const userName = req.body.user;

  messages.push({ text: messageText, user: userName, added: new Date() });
  res.redirect("/");
});

module.exports = indexRouter;
