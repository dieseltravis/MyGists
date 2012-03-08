@ECHO OFF
IF "%ProgramFiles(x86)%"=="" SET ProgramFiles(x86)=%ProgramFiles%
SET Utils=D:\utils
SET WorkingPath=%1
SET FileName=%2
SET Title=%3
SET Artist=%4
SET Album=%5
SET Year=%6
SET Genre=%7
SET TrackNum=%8
GOTO Encode

:DeQuote
for /f "delims=" %%A in ('echo %%%1%%') do set %1=%%~A
GOTO :eof

:Encode
CALL :dequote WorkingPath
CALL :dequote FileName
CALL :dequote Title
CALL :dequote Artist
CALL :dequote Album
CALL :dequote Year
CALL :dequote Genre
CALL :dequote TrackNum

ECHO Decoding FLAC: "%WorkingPath%\%FileName%.flac"
::START "Decoding..." /D "%ProgramFiles(x86)%\FLAC\" /WAIT /B flac-decode.bat "%WorkingPath%\%FileName%.flac"
CALL "%ProgramFiles(x86)%\FLAC\flac-decode.bat" "%WorkingPath%\%FileName%.flac"

ECHO Encoding MP3: "%WorkingPath%\%FileName%.wav" "%Title%" "%Artist%" "%Album%" %Year% "%Genre%" "%TrackNum%"
START "Encoding..." /D %Utils%\Lame\ lame-options.bat "%WorkingPath%\%FileName%.wav" "%Title%" "%Artist%" "%Album%" %Year% "%Genre%" "%TrackNum%" "%WorkingPath%\%FileName%.mp3"

::TODO: delete wav?