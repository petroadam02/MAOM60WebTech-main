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