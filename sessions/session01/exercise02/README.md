# 🧑‍🚀 Ejercicio 2 — Registro de ingenieros en cabina

Antes del lanzamiento, cada ingeniero debe **registrar su presencia** en el panel de control.

---

## 🎯 Objetivo

- Crear un **campo de texto** para introducir el nombre del ingeniero.
- Crear un botón **"Registrar"**.
- Al pulsarlo:
  - Mostrar un mensaje de bienvenida usando **template literals**:
    - Ej: `"👋 Bienvenido a bordo, Capitán Laura"`
  - Vaciar el campo de texto.
- Si el usuario no escribe nada y pulsa el botón:
  - Mostrar un mensaje de error: `"⚠️ Debes introducir tu nombre"`

---

## 🛠️ Pasos sugeridos

1. Crea un `input` y un botón en el HTML.
2. Usa `document.getElementById()` para obtener su valor.
3. Si el valor está vacío (`""`), muestra el mensaje de error.
4. Si hay nombre, usa **template literals** para mostrar el saludo.

> 🔎 **Pista:**  
> Para comprobar si el `input` está vacío, puedes usar  
> `if (nombre === "") { ... }`

> 💡 **Idea extra:**  
> Usa `try/catch` para capturar posibles errores si no se encuentra el `input`.

---

### 📷 Ejemplo visual (no obligatorio)

```
Nombre: [___________] [Registrar]

👋 Bienvenido a bordo, Capitán Laura
```