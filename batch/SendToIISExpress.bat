::https://gist.github.com/1181245
@ECHO OFF
IF "%ProgramFiles(x86)%"=="" SET ProgramFiles(x86)=%ProgramFiles%
SET folder=%~1
IF %folder:~-1%==\ SET folder=%folder:~0,-1%

:: random number from 8000 to 9999
SET /a number=(%random%)*(9999-8000+1)/32767+8000
SET port=%number%
:: update IIEExpress path to whereever it is installed:
start "IIS Express" cmd /C "%ProgramFiles(x86)%\IIS Express\iisexpress" /path:%folder% /port:%port% /systray:true
start http://localhost:%port%/

:: To use in Send To: drag a shortcut to this batch file to %APPDATA%\Microsoft\Windows\SendTo