@echo off
echo Starting Convex development server...
start "Convex Dev" cmd /k "npx convex dev"

echo Waiting 5 seconds for Convex to start...
timeout /t 5 /nobreak > nul

echo Starting Next.js development server...
start "Next.js Dev" cmd /k "npm run dev"

echo Both servers are starting...
echo Convex dashboard: https://dashboard.convex.dev/d/dashing-parrot-653
echo Next.js app: http://localhost:3000
pause

