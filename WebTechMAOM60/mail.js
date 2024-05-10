document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Az alapértelmezett űrlap küldési művelet megakadályozása

    // Az űrlap mezőinek értékeinek ellenőrzése
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name && email && subject && message) {
        // Ha minden mező ki van töltve, akkor alertet jelenítünk meg
        alert("Az üzenet elküldve!");
        // További műveletek, például az űrlap elküldése a szerverre
        // Itt lehetőség van az AJAX hívások vagy más műveletek végrehajtására
    } else {
        // Ha bármelyik mező nincs kitöltve, akkor figyelmeztető üzenetet jelenítünk meg
        alert("Kérlek, töltsd ki az összes mezőt!");
    }
});