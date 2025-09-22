# 🧑‍🚀 Ejercicio 2 — Preparación de astronautas para el despegue

**Contexto:** Antes de iniciar la misión a Marte, cada astronauta debe pasar por un **proceso de preparación personal**.  
Esto incluye: ponerse el traje espacial, comprobar los sistemas de soporte vital y abrochar el arnés en la cabina.  
Vamos a programar un módulo que controle este proceso de manera **secuencial**.

## 🎯 Objetivo

- Crear un factory `crearPreparacion()` que **encapsule** el estado del astronauta.
- Variables internas: `traje` (true/false), `soporteVital` (true/false), `arnes` (true/false).
- Métodos:
  - `ponerTraje()` → cambia `traje` a true.
  - `comprobarSoporte()` → cambia `soporteVital` a true.
  - `abrocharArnes()` → cambia `arnes` a true.
  - `estado()` → con `if`/`switch`:
    - `"PENDIENTE"` si alguno es false.
    - `"LISTO ✅"` si los tres son true.
  - `reset()` → reinicia todo a false.
  - `autoprep()` → usa un **`while`** para completar todos los pasos automáticamente uno por uno, hasta que el estado sea `"LISTO ✅"`.

## 🛠️ UI mínima

- Mostrar el estado actual de cada paso (pendiente/ok).
- Botones: **Poner traje**, **Comprobar soporte vital**, **Abrochar arnés**, **Autoprep**, **Reiniciar**.

> 💡 **Tip:** Usa `while` en `autoprep()` para repetir pasos hasta que todo esté en `ok`.  
> ⚠️ **Importante:** El estado siempre debe quedar bien encapsulado dentro del closure, no accesible directamente desde fuera.

---

## ✅ Criterios

- Cada método actualiza una variable y la UI se refresca.  
- `autoprep()` avanza automáticamente hasta completar los 3 pasos.  
- El estado final se muestra como `"LISTO ✅"`.
