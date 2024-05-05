$(document).ready(function () {
    // Idézetek tömbje
    var quotes = [
        "Az igazi fejlődés az akadályok legyőzéséből születik.",
        "A jövődet nem te írod, de a szokásaidat igen, amelyek majd felépítik.",
        "Egyetlen módja van annak, hogy megtudd, képes vagy-e valamire: ha megpróbálod.",
        "Az idő halad. Szóval, bármit is akarsz csinálni, tedd meg most. Ne várj vele!",
        "Nem szentírás, hogy a kis embernek meg kell hátrálnia a nagy feladat előtt.",
        "Az edzés nem csak fizikai erőfeszítés, hanem mentális kitartás is.",
        "Az elszántság az út kezdetét jelenti, a kitartás pedig a cél eléréséhez vezet."
    ];

    // első idézet
    var index = 0;

    $("#quoteText").fadeOut(function () {
        $(this).text(quotes[index]).fadeIn();
    });
    index = (index + 1) % quotes.length;

    // Idézetek ciklikus megjelenítése
    if (index > 0) {
        setInterval(function () {
            $("#quoteText").fadeOut(function () {
                $(this).text(quotes[index]).fadeIn();
            });
            index = (index + 1) % quotes.length;
        }, 6000); // Idézetek váltása minden 6 másodpercben
    }
});
