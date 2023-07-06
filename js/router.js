// // Definición de la función de enrutamiento
// const route = (event) => {
//     event = event || window.event;

//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);

//     handleLocation();
// };

// // Definición de las rutas disponibles
// const routes = {
//     404: "/pages/404.html",
//     "/": "/pages/home/home.html",
//     "/dlnetNimbus": "/pages/dlnetNimbus/dlnetNimbus.html",
//     "/about": "/pages/about.html",
//     "/lorem": "/pages/lorem.html",
// };

// // Función para manejar la ubicación actual y cargar el contenido correspondiente
// const handleLocation = async () => {
//     const path = window.location.pathname;
//     const route = routes[path] || routes[404]; // Obtener la ruta correspondiente en base a la ubicación actual
//     const htmlPath = `.${route}`; // Construir la ruta completa al archivo HTML

//     $("#pageContainer").load(htmlPath, function () {
//         var script = document.createElement("script");
//         script.src = `.${route.replace(".html", ".js")}`; // Construir la ruta completa al archivo JavaScript
//         document.head.appendChild(script);
//     });
// };






// $(document).ready(function () {
//     $("#pageContainer").load("./pages/home/home.html", function () {
//         var script = document.createElement("script");
//         script.src = "./pages/home/home.js";
//         document.head.appendChild(script);
//       });
// });
