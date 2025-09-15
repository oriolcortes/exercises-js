// Estado inicial (porcentaje)
let oxigeno = 50;

// Cacheo de elementos del DOM
const valorOxigenoEl = document.getElementById("valorOxigeno");
const mensajeEl = document.getElementById("mensaje");

// Función para pintar el valor y el mensaje
function render() {
  valorOxigenoEl.textContent = String(oxigeno); // coerción explícita a string
  // Mensajes según umbrales
  if (oxigeno === 0) {
    mensajeEl.textContent = "⚠️ Nivel crítico de oxígeno. Recargar inmediatamente.";
  } else if (oxigeno === 100) {
    mensajeEl.textContent = "✅ Tanque lleno. Óptimo para la secuencia previa.";
  } else {
    mensajeEl.textContent = ""; // sin mensaje especial
  }
}

// Aumentar y Disminuir con límites 0–100
function aumentar() {
  if (oxigeno < 100) {
    oxigeno = oxigeno + 5; // reasignación simple
    if (oxigeno > 100) oxigeno = 100;
    render();
  }
}

function disminuir() {
  if (oxigeno > 0) {
    oxigeno = oxigeno - 5;
    if (oxigeno < 0) oxigeno = 0;
    render();
  }
}

function reiniciar() {
  oxigeno = 50;
  render();
}

// Pintar al cargar
try {
  render();
} catch (e) {
  // Manejo simple por si falla alguna referencia
  mensajeEl.textContent = "Se produjo un error al iniciar el panel.";
}
