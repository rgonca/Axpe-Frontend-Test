# Axpe-Frontend-Test

_Respuestas de la prueba tecnica de Frontend para AXPE Consulting_
## Explicacion de la prueba

El fichero _ejercicio1_ contiene el análisis de fallos y la redacción de la solución del problema planteado en el ejercicio 1

El fichero _ejercicio2_ contiene una single page application en React, TypeScript, Redux y la API de Goggle Maps. No se utilizan archivos css o de estilos sino que se usan estilos de React. 

La app consiste en un mapa y un formulario de búsqueda autocompletable en la que el usurario, conforme escriba en este ultimo, mostrara sugerencias de posibles resultados, una vez seleccionada la opción, se almacenarán las coordenadas de la misma en el estado de Redux y se desplegará un marcador en el mapa creado una lista de selecciones.

### Pre-requisitos e instalación
Se puede clonar o descargar este repositorio y tras entrar en el fichero _ejercicio2_ ejecutar el comando:  

```
npm i
```

## Ejecución

Una vez terminada la instalacíon es posible ejecutar la applicación con el comando 

```
npm start
```
En el caso de que no se ejecutase automaticamente vaya la la dirección _http://localhost:3000/_ en la barra de direcciones.
Para facilitar el uso de la app se ha sacado el archivo _.env_ de el de _.gitignore_ para que se tenga acceso a la apiKey de Google Maps.
## Test

Para ejecutar los test de la aplicación es necesario introducir el comando:

```
npm test
```
## Tecnologias

* [React](https://create-react-app.dev/) - libreria Frontend de JavaScript
* [React TypeScript](https://create-react-app.dev/docs/adding-typescript/) - Conjunto de librerias para introducir TypesCript en CRA
* [Redux](https://redux.js.org/) - Tecnologia para la gestion del estado en la aplicación
* [Google Maps API](https://developers.google.com/maps) - API de Google Maps
* [React Testing Library](https://developers.google.com/maps) - Herramienta de test funcionales de React

## Autor

* **Roberto Gonzalez Camejo** - [rgonca](https://github.com/rgonca)