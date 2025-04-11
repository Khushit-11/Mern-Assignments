// server.js (Express Backend)
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Welcome Route
app.get('/welcome', (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// In-memory users array
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];

// GET /users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST /users
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const id = users.length ? users[users.length - 1].id + 1 : 1;
  const newUser = { id, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:id
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = users.find(u => u.id === parseInt(id));
  if (!user) return res.status(404).json({ message: "User not found" });
  user.name = name || user.name;
  user.email = email || user.email;
  res.json(user);
});

// DELETE /users/:id
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(u => u.id !== parseInt(id));
  res.json({ message: "User deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
