document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Az alapértelmezett űrlap küldési művelet megakadályozása

    // Az űrlap mezőinek értékeinek ellenőrzése
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name && email && subject && message) {

        alert("Az üzenet elküldve!");

    } else {
        alert("Kérlek, töltsd ki az összes mezőt!");
    }
});