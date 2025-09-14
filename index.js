const express = require("express");
const servidor = express();
const PUERTO = 3000;

// Celsius → Fahrenheit
servidor.get("/convert/celsius-to-fahrenheit/:valor", (req, res) => {
  const celsius = Number(req.params.valor);
  const fahrenheit = celsius * 1.8 + 32;
  res.json({
    origen: `${celsius} °C`,
    convertido: `${fahrenheit.toFixed(2)} °F`,
  });
});

// Fahrenheit → Celsius
servidor.get("/convert/fahrenheit-to-celsius/:valor", (req, res) => {
  const fahrenheit = Number(req.params.valor);
  const celsius = (fahrenheit - 32) / 1.8;
  res.json({
    origen: `${fahrenheit} °F`,
    convertido: `${celsius.toFixed(2)} °C`,
  });
});

// Kilómetros → Millas
servidor.get("/convert/km-to-miles/:valor", (req, res) => {
  const kilometros = Number(req.params.valor);
  const millas = kilometros * 0.621371;
  res.json({
    origen: `${kilometros} km`,
    convertido: `${millas.toFixed(3)} mi`,
  });
});

servidor.listen(PUERTO, () => {
  console.log(`API de conversiones lista en http://localhost:${PUERTO}`);
});
