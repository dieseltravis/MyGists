@ECHO OFF
IF "%ProgramFiles(x86)%"=="" SET ProgramFiles(x86)=%ProgramFiles%
:: music meta data
SET Artist=Revengineers
SET Album=Self-Titled EP
SET Year=2012
SET Genre=Chiptune
:: FLAC location
SET WorkingPath=D:\music\Revengineers
GOTO Files

:Encode
ECHO Starting FLAC-MP3: "%WorkingPath%" "%FileName%" "%Title%" "%Artist%" "%Album%" %Year% "%Genre%" "%TrackNum%"
::start "FLAC to MP3" /D
CALL "%ProgramFiles(x86)%\FLAC\flac-mp3.bat" "%WorkingPath%" "%FileName%" "%Title%" "%Artist%" "%Album%" %Year% "%Genre%" "%TrackNum%"
GOTO :EOF

:Files

::TODO: automate this somehow?
:: file name without path or extension
SET FileName=revengineers - self-titled ep - 01 Earth That Was
:: song title
SET Title=Earth That Was
:: track number / total tracks
SET TrackNum=01/05
CALL :Encode

:: etc.
::SET FileName=revengineers - self-titled ep - 02 Laika
::SET Title=Laika
::SET TrackNum=02/05
::CALL :Encode

GOTO End
:End