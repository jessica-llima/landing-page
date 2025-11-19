# Start development services: backend (uvicorn), frontend (npm dev) and static server
# Usage: From repository root in PowerShell: .\scripts\start-dev.ps1

Write-Host "Starting development services..." -ForegroundColor Cyan

# Start backend (uvicorn) in background job if backend exists
if (Test-Path -Path "backend\main.py") {
    Write-Host "Starting backend (uvicorn) on port 8001..." -ForegroundColor Green
    Start-Process -NoNewWindow -FilePath pwsh -ArgumentList "-Command","cd backend; .venv\\Scripts\\Activate; uvicorn main:app --reload --port 8001" -WindowStyle Hidden
} else {
    Write-Host "No backend scaffold found." -ForegroundColor Yellow
}

# Start frontend (npm) if package.json present
if (Test-Path -Path "frontend\package.json") {
    Write-Host "Starting frontend (vite) on port 5173..." -ForegroundColor Green
    Start-Process -NoNewWindow -FilePath pwsh -ArgumentList "-Command","cd frontend; npm run dev" -WindowStyle Hidden
} else {
    Write-Host "No frontend scaffold found." -ForegroundColor Yellow
}

# Start static server for scr/ on port 8000
if (Test-Path -Path "scr\index.html") {
    Write-Host "Starting static server for scr/ on port 8000..." -ForegroundColor Green
    Start-Process -NoNewWindow -FilePath pwsh -ArgumentList "-Command","cd scr; python -m http.server 8000" -WindowStyle Hidden
} else {
    Write-Host "No scr/ folder found." -ForegroundColor Yellow
}

Write-Host "Dev services requested — verifique as janelas/terminais para logs." -ForegroundColor Cyan
