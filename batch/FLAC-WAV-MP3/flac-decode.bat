@ECHO OFF
IF "%ProgramFiles(x86)%"=="" SET ProgramFiles(x86)=%ProgramFiles%
:: FLAC to WAV
%ProgramFiles(x86)%\FLAC\flac.exe" -d -s %1