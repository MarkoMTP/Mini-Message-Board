const pool = require("./supabaseDb");

async function getAllMessages() {
  const result = await pool.query("SELECT * FROM messages ORDER BY added DESC");
  return result.rows;
}

async function findMsg(id) {
  const message = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return message.rows[0];
}

async function addMessage(text, username) {
  await pool.query(" insert into  messages (text, username)values($1, $2)", [
    text,
    username,
  ]);
}

module.exports = {
  getAllMessages,
  findMsg,
  addMessage,
};
