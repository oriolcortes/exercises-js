# Exercises-JS

## Encrypt

1. Instala **`openssl`**
   - Comprueba que está bien instalado `openssl version`.
2. Crea el archivo `sessionXX.pass` en la carpeta `./keys`, con la contraseña.
3. Actualiza la variable `END` en el archivo `./setup-enc-filters.sh` al número actual de sesiones.
4. Ejecuta `./setup-enc-filters.sh`
5. Añade una nueva linea en `./gitattributes` con la carpeta y el filtro correspondiente.
6. Escribe la solución en el directorio `./sessions/sessionXX/solutions/exerciseXX/`.
7. Ejecuta `git add` para añadir los archivos (El cifrado se ejecuta cuando se ejecuta `git add solutionFiles`).

## Decrypt

Ejecuta los siguientes comandos:

1. `git clone https://github.com/oriolcortes/js-exercises.git`
2. `cd js-exercises`
3. `./setup-enc-filters.sh`
4. `chmod +x ./unlock.sh`
5. `./unlock.sh <número_de_sesión_en_dos_dígitos> <contraseña>`
   - Por ejemplo, session00: `./unlock.sh 00 "Lince-Gris-47"`
