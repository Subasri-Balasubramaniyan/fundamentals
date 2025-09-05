// server.js
const http = require("http");
const url = require("url");

let tasks = [];
let idCounter = 1;

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

function parseRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => { body += chunk.toString(); });
    req.on("end", () => {
      try { resolve(JSON.parse(body || "{}")); }
      catch { reject("Invalid JSON"); }
    });
  });
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  if (path === "/tasks") {
    if (method === "GET") return sendJson(res, 200, tasks);
    if (method === "POST") {
      try {
        const body = await parseRequestBody(req);
        const { title, completed = false } = body;
        if (!title || typeof title !== "string") {
          return sendJson(res, 400, { error: "Title is required" });
        }
        const task = { id: idCounter++, title, completed: !!completed };
        tasks.push(task);
        return sendJson(res, 201, task);
      } catch { return sendJson(res, 400, { error: "Invalid JSON" }); }
    }
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  const taskIdMatch = path.match(/^\/tasks\/(\d+)$/);
  if (taskIdMatch) {
    const id = parseInt(taskIdMatch[1]);
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) return sendJson(res, 404, { error: "Task not found" });

    if (method === "PUT") {
      try {
        const body = await parseRequestBody(req);
        const { title, completed } = body;
        if (title && typeof title !== "string") return sendJson(res, 400, { error: "Title must be string" });
        if (completed !== undefined && typeof completed !== "boolean") return sendJson(res, 400, { error: "Completed must be boolean" });
        if (title !== undefined) tasks[taskIndex].title = title;
        if (completed !== undefined) tasks[taskIndex].completed = completed;
        return sendJson(res, 200, tasks[taskIndex]);
      } catch { return sendJson(res, 400, { error: "Invalid JSON" }); }
    }

    if (method === "DELETE") {
      const deletedTask = tasks.splice(taskIndex, 1)[0];
      return sendJson(res, 200, deletedTask);
    }

    return sendJson(res, 405, { error: "Method not allowed" });
  }

  sendJson(res, 404, { error: "Route not found" });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
