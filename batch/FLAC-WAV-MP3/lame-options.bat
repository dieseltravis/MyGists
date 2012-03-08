@ECHO OFF
SET Utils=D:\utils
:: WAV to MP3
echo input file: %1, title: %2, artist: %3, album %4, year: %5, genre: %6, track[/total]: %7, [output: %8]
%Utils%\Lame\lame.exe -m j -q 0 -V 0 --tt %2 --ta %3 --tl %4 --ty %5 --tg %6 --tn %7 --add-id3v2 %1 %8

::TODO: add option to delete wav?