document.getElementById("scrollButton").addEventListener("click", function() {
    var targetElement = document.getElementById("targetElement");
    targetElement.scrollIntoView({ behavior: 'smooth' });
});


//BECSÚSZÓS
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var tableRows = document.querySelectorAll(".slide-in td");
        tableRows.forEach(function(row) {
            if (row.getBoundingClientRect().top < window.innerHeight) {
                row.classList.add("slide-in-animate");
            }
        });
    });
});


//ÜZENET
function sendEmail() {
    // Űrlapadatok lekérése
    var nev = document.getElementsByName("nev")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var tema = document.getElementsByName("tema")[0].value;
    var uzenet = document.getElementsByName("uzenet")[0].value;

    // E-mail összeállítása
    var mailtoLink = "mailto:petroadam02@gmail.com";
    mailtoLink += "?subject=" + encodeURIComponent(tema);
    mailtoLink += "&body=" + encodeURIComponent(uzenet);

    // E-mail küldése
    window.location.href = mailtoLink;
}