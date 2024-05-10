$.getJSON('edzok.json', function (data) {
    var table = '<table><tr><th>Név</th><th>Kor</th><th>Specializáció</th><th>Tapasztalat</th></tr>';
    for (var i = 0; i < data["edzok"].length; i++) {
        var edzo = data["edzok"][i];
        table += '<tr><td>' + edzo.nev + '</td><td>' + edzo.kor + '</td><td>' + edzo.spec + '</td><td>' + edzo.tapasztalat + '</td></tr>';
    }
    table += '</table>';
    $('#edzokTable').html(table); // A táblázatot a 'edzokTable' div-be helyezzük
}).fail(function () {
    console.error('Hiba történt a JSON fájl betöltése közben.');
});