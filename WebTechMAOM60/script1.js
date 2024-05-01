document.getElementById("scrollButton").addEventListener("click", function() {
    var targetElement = document.getElementById("targetElement");
    targetElement.scrollIntoView({ behavior: 'smooth' });
});
