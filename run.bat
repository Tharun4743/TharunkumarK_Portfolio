@echo off
setlocal EnableDelayedExpansion
title Tharunkumar Portfolio Control Center

:: Ensure current working directory is the script directory
cd /d "%~dp0"

:: Verify Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo.
    echo =============================================================
    echo [ERROR] Node.js is not found in your system PATH!
    echo Please install Node.js v18 or higher from https://nodejs.org/
    echo =============================================================
    echo.
    pause
    exit /b 1
)

:: Verify npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo.
    echo =============================================================
    echo [ERROR] npm is not found in your system PATH!
    echo =============================================================
    echo.
    pause
    exit /b 1
)

:: Check if node_modules exists, install if missing
if not exist "node_modules\" (
    echo.
    echo =============================================================
    echo [NOTICE] node_modules directory not detected.
    echo Installing dependencies via npm install...
    echo =============================================================
    echo.
    call npm install
    if %ERRORLEVEL% neq 0 (
        echo.
        echo [ERROR] Dependency installation failed!
        pause
        exit /b 1
    )
    echo.
    echo [SUCCESS] Dependencies installed successfully.
    echo.
)

:menu
cls
echo =============================================================
echo             THARUNKUMAR K - PORTFOLIO CONTROL CENTER
echo =============================================================
echo.
echo   [1] Start Development Server (Vite Hot-Reload + Open Browser)
echo   [2] Build Production Bundle  (Vite + SSR + Prerender)
echo   [3] Preview Production Build (Local Static Server)
echo   [4] Clean ^& Reinstall Dependencies
echo   [5] Exit
echo.
echo =============================================================
echo Automatically starting Development Server in 5 seconds...
echo.

choice /c 12345 /t 5 /d 1 /m "Select an option [1-5]:"
set USER_CHOICE=%ERRORLEVEL%

if %USER_CHOICE% equ 1 goto opt_dev
if %USER_CHOICE% equ 2 goto opt_build
if %USER_CHOICE% equ 3 goto opt_preview
if %USER_CHOICE% equ 4 goto opt_clean
if %USER_CHOICE% equ 5 goto opt_exit

:opt_dev
echo.
echo -------------------------------------------------------------
echo Launching Vite Development Server...
echo -------------------------------------------------------------
echo.
call npm run dev -- --open
goto end

:opt_build
echo.
echo -------------------------------------------------------------
echo Building Production Assets ^& Prerendering Static HTML...
echo -------------------------------------------------------------
echo.
call npm run build
if %ERRORLEVEL% equ 0 (
    echo.
    echo =============================================================
    echo [SUCCESS] Production build and prerendering completed!
    echo Output directory: dist/
    echo =============================================================
) else (
    echo.
    echo =============================================================
    echo [ERROR] Build failed! Check the error output above.
    echo =============================================================
)
echo.
pause
goto menu

:opt_preview
echo.
echo -------------------------------------------------------------
echo Launching Production Preview Server...
echo -------------------------------------------------------------
echo.
call npm run preview -- --open
goto end

:opt_clean
echo.
echo -------------------------------------------------------------
echo Performing Clean Installation...
echo -------------------------------------------------------------
echo.
if exist "node_modules\" (
    echo Removing node_modules...
    rmdir /s /q "node_modules"
)
if exist "package-lock.json" (
    echo Removing package-lock.json...
    del /f /q "package-lock.json"
)
echo.
echo Installing fresh dependencies...
call npm install
if %ERRORLEVEL% equ 0 (
    echo.
    echo [SUCCESS] Dependencies reinstalled cleanly!
) else (
    echo.
    echo [ERROR] Clean install encountered errors.
)
echo.
pause
goto menu

:opt_exit
exit /b 0

:end
echo.
echo Server stopped.
pause
