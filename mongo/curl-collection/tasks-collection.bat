@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

set BASE_URL=http://localhost:3000/tasks

echo.
echo ===== GET ALL TASKS =====
curl -s -X GET %BASE_URL%
echo.
echo.

echo ===== CREATE NEW TASK =====
curl -s -X POST %BASE_URL% -H "Content-Type: application/json" -d @task.json
echo.
echo.

echo ===== UPDATE TASK =====
echo Replace 68b6aeb7ffe5acb026dafdb3 with your task _id from GET output
echo Example: 68b6aeb7ffe5acb026dafdb3
pause
curl -s -X PUT %BASE_URL%/<TASK_ID> -H "Content-Type: application/json" -d @task_update.json
echo.
echo.

echo ===== DELETE TASK =====
pause
curl -s -X DELETE %BASE_URL%/68b6aeb7ffe5acb026dafdb3
echo.
echo.

echo ===== COLLECTION FINISHED =====
pause
