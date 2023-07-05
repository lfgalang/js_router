// Definición de la función de enrutamiento
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

// Definición de las rutas disponibles
const routes = {
    404: "/pages/404.html",
    "/": "/pages/index.html",
    "/about": "/pages/about.html",
    "/lorem": "/pages/lorem.html",
};

// Función para manejar la ubicación actual y cargar el contenido correspondiente
const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404]; // Selecciona la ruta correspondiente o la ruta 404 si no se encuentra ninguna coincidencia
    const html = await fetch(route).then((data) => data.text()); // Carga el contenido HTML de la ruta
    document.getElementById("main-page").innerHTML = html; // Actualiza el contenido del elemento con el id "main-page"
};

// Manejador para el evento "popstate" que se dispara cuando se realiza una navegación hacia atrás o hacia adelante en la historia del navegador
window.onpopstate = handleLocation;

// Asigna la función de enrutamiento a la ventana global para que sea accesible desde cualquier parte
window.route = route;

// Carga el contenido inicial basado en la ubicación actual
handleLocation();
