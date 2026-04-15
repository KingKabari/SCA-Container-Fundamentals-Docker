const express = require("express");
const app = express();
const PORT = 5000;

// middleware to read form data
app.use(express.urlencoded({ extended: true }));

// homepage
app.get("/", (req, res) => {
  res.send(`
    <h1>Hello World</h1>
    <form method="POST" action="/submit">
      <input type="text" name="name" placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  `);
});

// form handler
app.post("/submit", (req, res) => {
  const name = req.body.name;
  res.send(`<h2>Hello, ${name}</h2>`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
