// Referencias a elementos del DOM
let inputNombre;
let salida;

try {
  inputNombre = document.getElementById("nombre");
  salida = document.getElementById("salida");
} catch (e) {
  // En entornos donde el DOM no esté disponible aún
  console.log("No se pudieron obtener los elementos del DOM.");
}

// Función llamada desde el botón (HTML -> onclick="registrar()")
function registrar() {
  try {
    const nombre = inputNombre.value; // string
    if (nombre === "") {
      salida.textContent = "⚠️ Debes introducir tu nombre.";
      return;
    }

    // Template literal para el saludo
    const saludo = `👋 Bienvenido a bordo, Capitán ${nombre}`;
    salida.textContent = saludo;

    // Limpiar el input después de registrar
    inputNombre.value = "";
  } catch (e) {
    // Manejo simple de errores
    salida.textContent = "Se produjo un error al registrar.";
  } finally {
    // Podrías dejar trazas a consola si lo deseas
    // console.log("Intento de registro finalizado.");
  }
}
