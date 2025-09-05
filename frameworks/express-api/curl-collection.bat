@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

REM ===== Base URL =====
set BASE_URL=http://localhost:3000/tasks

echo.
echo ===== EXPRESS TASKS API COLLECTION =====
echo.

REM ===== GET ALL TASKS =====
echo == GET /tasks ==
curl -s -X GET %BASE_URL%
echo.
echo.

REM ===== CREATE NEW TASK =====
echo == POST /tasks ==
curl -s -X POST %BASE_URL% -H "Content-Type: application/json" -d "{\"title\":\"Learn Express.js and MongoDB\",\"completed\":false}" > response.json
type response.json
echo.

REM ===== Extract TASK ID with PowerShell =====
for /f %%i in ('powershell -NoProfile -Command "($r = Get-Content response.json | ConvertFrom-Json)._id"') do set TASK_ID=%%i
echo Task ID: !TASK_ID!
echo.

REM ===== UPDATE TASK =====
echo == PUT /tasks/!TASK_ID! ==
curl -s -X PUT %BASE_URL%/!TASK_ID! -H "Content-Type: application/json" -d "{\"completed\":true}"
echo.
echo.

REM ===== DELETE TASK =====
echo == DELETE /tasks/!TASK_ID! ==
curl -s -X DELETE %BASE_URL%/!TASK_ID!
echo.
echo.

echo ===== EXPRESS COLLECTION FINISHED =====
pause
