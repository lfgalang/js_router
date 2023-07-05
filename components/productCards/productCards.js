

$(document).ready(async function () {
    try {
        const host = await fetchToGetHost();

        // console.log('host', host)

        // Asignar la URL completa para redirigir al hacer clic en los botones
        $("#dlnetNimbusCard").click(function () {
            window.location.href = `${host}/dlnetNimbus`;
        });

        $("#dlnetNimbusButton").click(function () {
            window.location.href = `${host}/pages/dlnetNimbus/dlnetNimbus.html`;
        });
    } catch (error) {
        console.error(error);
    }
});