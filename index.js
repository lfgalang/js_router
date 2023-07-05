$(document).ready(function () {
    $("#pageContainer").load("./pages/home/home.html", function () {
        var script = document.createElement("script");
        script.src = "./pages/home/home.js";
        document.head.appendChild(script);
      });
});


