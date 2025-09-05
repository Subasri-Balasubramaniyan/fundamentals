const fastify = require('fastify')({ logger: true });

let tasks = [];
let id = 1;

// GET /tasks
fastify.get('/tasks', async () => tasks);

// POST /tasks
fastify.post('/tasks', async (request, reply) => {
  const { title, completed = false } = request.body;
  if (!title) return reply.status(400).send({ error: "Title is required" });
  const task = { id: id++, title, completed };
  tasks.push(task);
  return reply.status(201).send(task);
});

// PUT /tasks/:id
fastify.put('/tasks/:id', async (request, reply) => {
  const task = tasks.find(t => t.id === parseInt(request.params.id));
  if (!task) return reply.status(404).send({ error: "Task not found" });
  const { title, completed } = request.body;
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;
  return task;
});

// DELETE /tasks/:id
fastify.delete('/tasks/:id', async (request, reply) => {
  const index = tasks.findIndex(t => t.id === parseInt(request.params.id));
  if (index === -1) return reply.status(404).send({ error: "Task not found" });
  const deleted = tasks.splice(index, 1);
  return deleted[0];
});

fastify.listen({ port: 3001 }, (err, address) => {
  if (err) throw err;
  console.log(`Fastify server running on ${address}`);
});
