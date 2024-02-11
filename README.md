<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://fidatech.net/felipe/">
    <img src="https://github.com/fisaavedrae/desafio_bd_node_ii/blob/main/frontend/src/assets/fse_logo_blanco.jpg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Desafío - Tienda de Joyas</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/fisaavedrae/desafio_bd_node_ii"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/fisaavedrae/desafio_bd_node_ii">View Demo</a>
    ·
    <a href="https://github.com/fisaavedrae/desafio_bd_node_ii/issues">Report Bug</a>
    ·
    <a href="https://github.com/fisaavedrae/desafio_bd_node_ii/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Contenido</summary>
  <ol>
    <li>
      <a href="#about-the-project">Acerca del Proyecto</a>
      <ul>
        <li><a href="#built-with">Construido con</a></li>
      </ul>
    </li>    
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Desafío - Tienda de Joyas

[![Product Name Screen Shot][product-screenshot]](https://fidatech.net/felipe/)

<ul>
<li>
Para realizar este desafío debes haber estudiado previamente todo el material disponible correspondiente a la unidad.
</li>
<li>Desarrollo desafío:
<ul>
<li>El desafío se debe desarrollar de manera grupal (Máximo 2 personas)</li>
</li>
</ul></ul>

## Descripción
La tienda de joyas My Precious Spa necesita cambiar su aplicación de escritorio por una moderna y  dinámica. Para realizar esta tarea, contactó a un desarrollador Full Stack Developer que desarrolle la API REST de una aplicación cliente para satisfacer las necesidades puntuales de sus usuarios de una forma eficiente, mantenible y eficaz.

Deberás crear una API REST que permita:


<ol>
<li>Límite de recursos</li>
<li>Filtro de recursos por campos</li>
<li>Paginación</li>
<li>Ordenamiento</li>
<li>Estructura de datos HATEOAS</li>
</ol>

Para realizar este desafío necesitarás ejecutar el siguiente script sql en tu terminal psql para crear la base de datos y la tabla que utilizaremos: (Por favor no alterar esta estructura respetar nombres de base de datos, tabla, campos, tipos de campos, longitudes y datos a cargar).

```sql
CREATE DATABASE joyas;
\c joyas;
CREATE TABLE inventario (id SERIAL, nombre VARCHAR(50), categoria 
VARCHAR(50), metal VARCHAR(50), precio INT, stock INT);
INSERT INTO inventario values
(DEFAULT, 'Collar Heart', 'collar', 'oro', 20000 , 2), 
(DEFAULT, 'Collar History', 'collar', 'plata', 15000 , 5), 
(DEFAULT, 'Aros Berry', 'aros', 'oro', 12000 , 10),
(DEFAULT, 'Aros Hook Blue', 'aros', 'oro', 25000 , 4),
(DEFAULT, 'Anillo Wish', 'aros', 'plata', 30000 , 4), 
(DEFAULT, 'Anillo Cuarzo Greece', 'anillo', 'oro', 40000 , 2);
```

A continuación, te mostramos imágenes de consultas HTTP realizadas a las rutas GET correspondientes a los requerimientos de este desafío:

Consulta de joyas con cláusulas en estructura de datos HATEOAS: 
[http://localhost:3000/joyas?limits=3&page=2&order_by=stock_ASC]

Nota: Validar casos de page con valores 0 o negativos, limits con valores 0 o negativos, en el order_by que el campo no exista o que se pase incorrecto la forma de ordenar. Cada uno debe devolver el servidor un tipo de error distinto.

Filtrando las joyas por precio máximo, mínimo, categoría y metal: 
[http://localhost:3000/joyas/filtros?precio_min=25000&precio_max=30000&categoria=aros&metal=plata]

Nota: Validar no se cumpla la condición en el SQL. Es decir, que uno de los filtros no se cumpla, debe devolver un error el servidor indicando que no se cumple con los filtros. O si los filtros están incompletos.

## Requerimientos

<ol>
<li>Crear una ruta GET /joyas que:</li>
<ul>
<li>Devuelva la estructura HATEOAS de todas las joyas almacenadas en la base de datos (1.5 puntos)</li>
<li>Reciba en la query string los parámetros (2 puntos): (Revisar validación, aparte usar el pg-format en la construcción del SQL)
<ol>
<li>limits: Limita la cantidad de joyas a devolver por página</li>
<li>page: Define la página</li>
<li>order_by: Ordena las joyas según el valor de este parámetro, ejemplo: stock_ASC</li>
</ol>
</ul>
<li>Crear una ruta GET /joyas/filtros que reciba los siguientes parámetros en la query string: (3.5 puntos) (Revisar que se cumpla la condición o que los filtros estén completos)
  <ul>
    <li>precio_max: Filtrar lasjoyas con un precio mayor al valor recibido</li>
    <li>precio_min: Filtrar lasjoyas con un precio menor al valor recibido.</li>
    <li>categoria: Filtrar las joyas por la categoría</li>
    <li>metal: Filtrar las joyas por la categoría</li>
  </ul>
</li>
<li>Implementar middlewares para generar informes o reportes de alguna actividad o evento específico que ocurra en cada una de las rutas. (1 puntos) (Mostrar la url consultada, params, query string entre otros)</li>
<li>Usar try catch para capturar los posibles errores durante una consulta y la lógica de cada ruta creada. (1 puntos) (Generar los errores de acuerdo a las validaciones indicadas)</li>
<li>Usar las consultas parametrizadas para evitar el SQL Injection en la consulta a la base de datos relacionada con la ruta GET /joyas/filtros (1 puntos) (Debe ser una consulta construida bajo parametrización de los filtros y valores a utilizar)</li>

</ol>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![Json][Json]][Json-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Uso

Para ejecutar el proyecto se debe usar pg-format, nodemon, cors y dotenv

 
Para iniciar el servidor de Backend, se debe ejecutar el comando

 ```bash
 nodemon server/index.js
 ```

 El archivo .env con las siguientes variables, que se deben completar con la informacion del servidor local

 ```bash
DB_USER=""
DB_DATABASE=""
DB_HOST=""
DB_PASSWORD=""
PORT = ""
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contacto

Felipe Saavedra - [@fisaavedrae](https://fidatech.net/felipe/) - fisaavedrae@gmail.com

Project Link: [https://github.com/fisaavedrae/desafio_bd_node_ii](https://github.com/fisaavedrae/desafio_bd_node_ii)

<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/fisaavedrae/desafio_bd_node_ii.svg?style=for-the-badge
[contributors-url]: https://github.com/fisaavedrae/desafio_bd_node_ii/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/fisaavedrae/desafio_bd_node_ii.svg?style=for-the-badge
[forks-url]: https://github.com/fisaavedrae/desafio_bd_node_ii/network/members
[stars-shield]: https://img.shields.io/github/stars/fisaavedrae/desafio_bd_node_ii.svg?style=for-the-badge
[stars-url]: https://github.com/fisaavedrae/desafio_bd_node_ii/stargazers
[issues-shield]: https://img.shields.io/github/issues/fisaavedrae/desafio_bd_node_ii.svg?style=for-the-badge
[issues-url]: https://github.com/fisaavedrae/desafio_bd_node_ii/issues
[license-shield]: https://img.shields.io/github/license/fisaavedrae/desafio_bd_node_ii.svg?style=for-the-badge
[license-url]: https://github.com/fisaavedrae/desafio_bd_node_ii/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/felipe-saavedra-escobar/
[product-screenshot]: https://github.com/fisaavedrae/desafio_bd_node_ii/blob/main/frontend/src/assets/screenshot.png
[Node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/en
[Express.js]: https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Json]: https://img.shields.io/badge/json-000000?style=for-the-badge&logo=json&logoColor=white
[Json-url]: https://www.json.org/json-es.html
[Bootstrap]: https://img.shields.io/badge/bootstrap-000000?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com/
