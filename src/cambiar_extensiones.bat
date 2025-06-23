@echo off
setlocal enabledelayedexpansion

echo Renombrando archivos .js a .ts...
for %%f in (*.js) do (
    ren "%%f" "%%~nf.ts"
)

echo Renombrando archivos .jsx a .tsx...
for %%f in (*.jsx) do (
    ren "%%f" "%%~nf.tsx"
)

echo Cambios completados.
pause
