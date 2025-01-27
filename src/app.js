/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Arrays con palabras para generar nombres de dominio
const pronombres = ["nuestro", "mi", "su", "suya"];
const adjetivos = ["azul", "sabroso", "caliente", "pequeño"];
const sustantivos = ["mapache", "gatito", "putin", "simba"];
const extensiones = ["com", "info", "biz", "in"];

// Función para generar nombres de dominio
function generarNombresDeDominio() {
  const nombresDeDominio = []; // Array para almacenar los dominios generados

  // Iterar sobre cada combinación posible de las palabras
  pronombres.forEach(pronombre => {
    adjetivos.forEach(adjetivo => {
      sustantivos.forEach(sustantivo => {
        extensiones.forEach(extension => {
          // Longitud de la extensión
          const longitudExtension = extension.length;
          // Comprobar si el final del sustantivo coincide con la extensión
          const verificador = sustantivo.slice(-longitudExtension);
          const dominioBase = `${pronombre}${adjetivo}${sustantivo}`;

          if (verificador === extension) {
            // Si coincide, generar un dominio "fancy" y otro regular
            nombresDeDominio.push(
              `${pronombre}${adjetivo}${sustantivo.slice(
                0,
                -longitudExtension
              )}.${extension}`
            );
          }
          // Generar el dominio regular
          nombresDeDominio.push(`${dominioBase}.${extension}`);
        });
      });
    });
  });

  // Mezclar los nombres generados de manera aleatoria
  return nombresDeDominio.sort(() => 0.5 - Math.random());
}

// Función para mostrar los nombres de dominio en el HTML
function mostrarNombresDeDominio() {
  const dominios = generarNombresDeDominio(); // Obtener la lista de dominios generados
  const elementoLista = document.getElementById("list-of-domains");

  // Reemplazar el contenido del contenedor con la lista de dominios
  elementoLista.innerHTML = dominios.join("<br>"); // Agregar cada dominio en una nueva línea
}

// Asignar el evento al botón para generar los nombres
document
  .getElementById("generateDomains")
  .addEventListener("click", mostrarNombresDeDominio);
