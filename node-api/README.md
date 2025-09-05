A simple RESTful API for managing tasks, built using Node.js core http module (no external frameworks).
###Features###

GET /tasks → Fetch all tasks

POST /tasks → Add a new task

PUT /tasks/:id → Update a task by ID

DELETE /tasks/:id → Delete a task by ID
Installation
# Clone the repository
git clone <your-repo-url>

cd <your-folder>

# Install dependencies (none required, only Node.js)
Run the Server
node server.js


Server runs at:
 http://localhost:3000
 API Endpoints
1. Get all tasks
curl http://localhost:3000/tasks


Response

[]

2. Create a new task
curl -X POST http://localhost:3000/tasks ^
-H "Content-Type: application/json" ^
-d "{\"title\":\"Learn Node\",\"completed\":false}"


Response

{
  "id": 1,
  "title": "Learn Node",
  "completed": false
}

3. Update a task
curl -X PUT http://localhost:3000/tasks/1 ^
-H "Content-Type: application/json" ^
-d "{\"completed\":true}"


Response

{
  "id": 1,
  "title": "Learn Node",
  "completed": true
}

4. Delete a task
curl -X DELETE http://localhost:3000/tasks/1


Response

{
  "id": 1,
  "title": "Learn Node",
  "completed": true
}
Tech Stack

Node.js – Core HTTP module

No external dependencies