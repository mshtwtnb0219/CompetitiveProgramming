@echo off

if "%~2"=="" (
    echo Usage: newProblem.bat ABC401 A
    exit /b
)

set CONTEST=%1
set PROBLEM=%2

REM バッチファイルのある場所を基準にする
set ROOT=%~dp0..

mkdir "%ROOT%\ABC\%CONTEST%\%PROBLEM%" 2>nul

xcopy "%ROOT%\template\*" "%ROOT%\ABC\%CONTEST%\%PROBLEM%\" /E /I /Y

echo.
echo ===========================
echo Created:
echo %ROOT%\ABC\%CONTEST%\%PROBLEM%
echo ===========================