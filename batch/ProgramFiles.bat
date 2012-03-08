IF "%ProgramFiles(x86)%"=="" SET ProgramFiles(x86)=%ProgramFiles%
ECHO %ProgramFiles(x86)%
:: on x86: C:\Program Files
:: on x64: C:\Program Files (x86)