# 🛰️ Ejercicio 1 — Control de presión en cabina

**Contexto:** Antes de encender motores, cada cabina debe mantener la **presión atmosférica adecuada**.  
Vas a programar un módulo que controle el **nivel de presión** (0–100).

## 🎯 Objetivo

- Crear un factory `crearPresion(nivelInicial)` que encapsule el nivel.
- Métodos:
  - `aumentar(q)` → suma presión (máx 100).
  - `disminuir(q)` → resta presión (mín 0).
  - `nivel()` → devuelve nivel actual.
  - `estado()` → con `if`/`switch`:
    - `NORMAL` si 40–70
    - `BAJA` si < 40
    - `ALTA` si > 70
  - `reiniciar()` → vuelve al nivel inicial.

## 🛠️ UI mínima

- Mostrar en pantalla la presión actual y el estado.
- Botones: **+10**, **−10**, **Reiniciar**.

> 💡 **Tip:** Asegúrate de limitar el nivel con `if` para no pasar de 0–100.  
> 🔎 **Pista:** Usa colores de Tailwind para cada estado (`verde`, `amarillo`, `rojo`).
