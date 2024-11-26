@echo off
:: copy.bat - Copies Paradise theme files to MinThu theme
:: Author: Your Name
:: Date: 2024

set SOURCE=.\Paradise
set DEST=D:\diy-paradise\theme\MinThu

:: Create destination if it doesn't exist
if not exist "%DEST%" mkdir "%DEST%"

:: Copy all files and subdirectories
echo Copying files from %SOURCE% to %DEST%...
xcopy "%SOURCE%\*" "%DEST%" /E /I /Y

echo Done!
pause