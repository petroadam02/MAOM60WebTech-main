$.getJSON('edzok.json', function (data) {
    var table = '<table><tr><th style="background-color: #11140071; padding: 8px; border-bottom: 1px solid #bde608;color: #bde608;">Név</th><th style="background-color: #11140071; padding: 8px; border-bottom: 1px solid #bde608;color: #bde608;">Kor</th><th style="background-color: #11140071; padding: 8px; border-bottom: 1px solid #bde608;color: #bde608;">Specializáció</th><th style="background-color: #11140071; padding: 8px; border-bottom: 1px solid #bde608;color: #bde608;">Tapasztalat</th></tr>';
    for (var i = 0; i < data["edzok"].length; i++) {
        var edzo = data["edzok"][i];
        table += '<tr><td style="padding: 8px; border-bottom: 1px solid #bde608;color: #bde608;">' + edzo.nev + '</td><td style="padding: 8px; border-bottom: 1px solid #bde608;color: #bde608;">' + edzo.kor + '</td><td style="padding: 8px; border-bottom: 1px solid #bde608;color: #bde608;">' + edzo.spec + '</td><td style="padding: 8px; border-bottom: 1px solid #bde608;color: #bde608;">' + edzo.tapasztalat + '</td></tr>';
    }
    table += '</table>';
    $('#edzokTable').html(table); // A táblázatot a 'edzokTable' div-be helyezzük
}).fail(function () {
    console.error('Hiba történt a JSON fájl betöltése közben.');
});