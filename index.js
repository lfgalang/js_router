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
    "/": "/pages/home/home.html",
    "/dlnetNimbus": "/pages/dlnetNimbus/dlnetNimbus.html",
    "/about": "/pages/about.html",
    "/lorem": "/pages/lorem.html",
};

// Función para manejar la ubicación actual y cargar el contenido correspondiente
const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404]; // Obtener la ruta correspondiente en base a la ubicación actual
    const htmlPath = `.${route}`; // Construir la ruta completa al archivo HTML

    // Cargar el contenido de la página
    $("#pageContainer").load(htmlPath, function () {
        // Obtener todas las imágenes en la página
        const images = document.querySelectorAll("img");
        const totalImages = images.length;
        let loadedImages = 0;

        // Función para verificar si todas las imágenes se han cargado
        const checkAllImagesLoaded = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                // Todas las imágenes se han cargado, mostrar el contenido completo
                // Aquí puedes agregar lógica adicional para mostrar el contenido deseado
                // Una vez que todas las imágenes se hayan cargado.
                console.log("Todas las imágenes se han cargado");
            }
        };

        // Verificar el estado de carga de cada imagen
        images.forEach((image) => {
            if (image.complete) {
                // La imagen ya está cargada
                checkAllImagesLoaded();
            } else {
                // Esperar a que la imagen se cargue
                image.addEventListener("load", checkAllImagesLoaded);
            }
        });
    });
};






$(document).ready(() => {
    handleLocation()
});