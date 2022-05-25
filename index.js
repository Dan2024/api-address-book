const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
// const contacts = require("./data/contacts");
const contacts = require("./data/contacts.json");
const meetings = require("./data/exampleData.json");

app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  console.log("got request!");
  res.send("Hello!");
});

app.get("/contacts", (req, res) => {
  //   res.json({ contacts: contacts });
  res.json(contacts);
});

app.get("/contacts/:id", (req, res) => {
  const contact = contacts.contacts.find(
    (item) => item.id === Number(req.params.id)
  );

  res.json({ contact: contact });
});

app.get("/contacts/:id/meetings", (req, res) => {
  const userMeetings = meetings.meetings.filter(
    (item) => item.id === Number(req.params.id)
  );
  console.log(userMeetings);
  res.json({ meetings: userMeetings });
});

const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
