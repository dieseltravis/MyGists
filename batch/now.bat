::https://gist.github.com/1995882
:Now
FOR /F %%A IN ('TIME/T') DO SET Now=%%A
GOTO :EOF

:: Usage:
:: Call :Now
:: ECHO %Now% is the current time.
:: 03:19 is the current time.