const express = require('express');
const app = express();
app.use(express.json());

let tasks = [];
let id = 1;

// GET /tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks
app.post('/tasks', (req, res) => {
  const { title, completed = false } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });
  const task = { id: id++, title, completed };
  tasks.push(task);
  res.status(201).json(task);
});

// PUT /tasks/:id
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });
  const { title, completed } = req.body;
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;
  res.json(task);
});

// DELETE /tasks/:id
app.delete('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Task not found" });
  const deleted = tasks.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(3000, () => console.log("Express server running on http://localhost:3000"));
