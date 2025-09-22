# 🛰️ Ejercicio 1 — Panel de oxígeno

Antes de despegar, la tripulación necesita asegurarse de que **los niveles de oxígeno son suficientes**.  
Tu tarea es crear un pequeño panel que permita **sumar y restar oxígeno** en la reserva de la nave.

---

## 🎯 Objetivo

- Mostrar en pantalla la cantidad de oxígeno actual (en `%`).
- Permitir al usuario:
  - **Aumentar** el nivel de oxígeno (`+5%` cada vez).
  - **Disminuir** el nivel de oxígeno (`-5%` cada vez).
- Si el nivel llega a `0`, mostrar un **mensaje de alerta**.
- Si el nivel llega a `100`, mostrar un mensaje de **tanque lleno**.

---

## 🛠️ Pasos sugeridos

1. Crea una variable `oxigeno` que empiece en `50` (porcentaje).
2. Muestra el valor inicial en el HTML.
3. Añade dos botones: **Aumentar** y **Disminuir**.
4. Cada vez que pulses un botón, actualiza la variable y el HTML.
5. Usa **condiciones (`if`)** para mostrar mensajes especiales:
   - `"⚠️ Nivel crítico de oxígeno"` si llega a `0`.
   - `"✅ Tanque lleno"` si llega a `100`.

> 💡 **Tip:** Usa `textContent` para actualizar el número en pantalla.  
> 🧠 **Idea extra:** Intenta que el valor nunca pase de `0` ni de `100`.

---

### 📷 Ejemplo visual (no obligatorio)

```txt
Oxígeno: 50%

[ +5% ] [ -5% ]

⚠️ Nivel crítico de oxígeno
```
