@echo off
echo ============================================
echo  Diagnostico de Conexao VPS
echo ============================================
echo.
echo Executando script de diagnostico...
echo.
powershell.exe -ExecutionPolicy Bypass -File "scripts\test-vps-windows.ps1"
echo.
pause
