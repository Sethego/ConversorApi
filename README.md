# API De Conversor de Unidades 

### Descripción

Este proyecto implementa una API utilizando Express.js para realizar conversiones de unidades. Actualmente soporta conversiones entre Celsius y Fahrenheit, y de kilómetros a millas.

## Instalación Y Ejecución

- Clonar el repositorio o descargar el proyecto.
- Abrir una terminal en la carpeta raíz.
- Ejecutar los siguiente comando para instalar las dependencias:

1. Inicializar el proyecto (esto crea el package.json):
```bash
npm init -y
```

2. Instalar Express.js (queda guardado en node_modules y en package.json):

```bash
npm install express
```
3. Ejecutar el servidor con Node:

```bash
node index.js
```

El servidor quedará disponible en:

```bash
http://localhost:3000
```

## Endpoints

***-- Celsius a Fahrenheit --***

**Ruta:**

```bash
GET /convert/celsius-to-fahrenheit/:valor
```

**Ejemplo:**

```bash
http://localhost:3000/convert/celsius-to-fahrenheit/100
```

**Respuesta:**

```bash
{
  "origen": "100 °C",
  "convertido": "212.00 °F"
}
```

***-- Fahrenheit a Celsius --***

**Ruta:**

```bash
GET /convert/fahrenheit-to-celsius/:valor
```

**Ejemplo:**

```bash
http://localhost:3000/convert/fahrenheit-to-celsius/212
```

**Respuesta:**

```bash
{
  "origen": "212 °F",
  "convertido": "100.00 °C"
}
```

***-- Kilómetros a Millas --***

**Ruta:**

```bash
GET /convert/km-to-miles/:valor
```

**Ejemplo:**

```bash
http://localhost:3000/convert/km-to-miles/10
```

**Respuesta:**

```bash
{
  "origen": "10 km",
  "convertido": "6.214 mi"
}
```