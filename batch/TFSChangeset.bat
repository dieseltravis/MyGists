::https://gist.github.com/944714
@echo off
SET tfs=http://YOUR_TFS_SERVER:8080/
:number
ECHO Enter changeset number (0 to exit):
SET /p chg=
IF NOT %chg% GTR 0 GOTO end
"%ProgramFiles%\Microsoft Visual Studio 9.0\Common7\IDE\TF.exe" changeset /server:%tfs% %chg% /noprompt
GOTO number
:end