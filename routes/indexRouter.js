const { Router } = require("express");
const indexRouter = Router();
const db = require("../db/queries");

indexRouter.get("/", async (req, res) => {
  try {
    const result = await db.getAllMessages();

    res.render("index", { messages: result }); // Pass only the 'rows' to the view
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching messages from the database");
  }
});

indexRouter.get("/messages/:id", async (req, res) => {
  const messageId = parseInt(req.params.id);
  const message = await db.findMsg(messageId);
  if (message) {
    res.render("messageDetails", { message: message });
  } else {
    res.status(404).send("Message not found");
  }
});

indexRouter.post("/new", async (req, res) => {
  const messageText = req.body.messageText;
  const username = req.body.user;

  await db.addMessage(messageText, username);

  res.redirect("/");
});

module.exports = indexRouter;
