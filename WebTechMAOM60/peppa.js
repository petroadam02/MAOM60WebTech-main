$.getJSON('edzok.json', function (data) {
    var table = '<table><tr><th>Név</th><th>Kor</th><th>Specializáció</th><th>Tapasztalat</th></tr>';
        var edzo = data["edzok"][0];
        table += '<tr><td>' + edzo.nev + '</td><td>' + edzo.kor + '</td><td>' + edzo.spec + '</td><td>' + edzo.tapasztalat + '</td></tr>';
    table += '</table>';
    $('#edzokTable').html(table); // A táblázatot a 'edzokTable' div-be helyezzük
}).fail(function () {
    console.error('Hiba történt a JSON fájl betöltése közben.');
});