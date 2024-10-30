const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.get("/messages/:id", (req, res) => {
  const messageId = parseInt(req.params.id);
  const message = messages.find((msg) => msg.id === messageId);

  if (message) {
    res.render("messageDetails", { message: message });
  } else {
    res.status(404).send("Message not found");
  }
});

indexRouter.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const userName = req.body.user;
  const latestId = messages[messages.length - 1].id;

  messages.push({
    id: latestId + 1,
    text: messageText,
    user: userName,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
