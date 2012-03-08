::https://gist.github.com/1181237
@ECHO OFF
:: get values passed in for the min and max desired values
SET min=%1
SET max=%2
SET /a range=max-min
:: min number returned by %random% function
SET minrand=0
:: max number returned by %random% function
SET maxrand=32767
SET /a rangerand=maxrand-minrand
SET /a number=(%random%-minrand)*range/rangerand+min
::SET /a number=(%random%)*(max-min+1)/32767+min
ECHO %number%
:: usage in a batch file, this sets %number% to a random # from 1 to 10:
:: FOR /F "tokens=*" %%i in ('rand.bat 1 10') do SET number=%%i