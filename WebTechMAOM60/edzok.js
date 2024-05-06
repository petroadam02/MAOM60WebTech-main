$(document).ready(function() {
    $.ajax({
        url: 'edzok.json',
        dataType: 'json',
        success: function(data) {
            var table = '<table><tr><th>Azonosító</th><th>Név</th><th>Kor</th><th>Specializáció</th><th>Tapasztalat</th><th>Kép</th></tr>';
            $.each(data.edzok, function(index, edzo) {
                table += '<tr>';
                table += '<td>' + edzo.azonosito + '</td>';
                table += '<td>' + edzo.nev + '</td>';
                table += '<td>' + edzo.kor + '</td>';
                table += '<td>' + edzo.spec + '</td>';
                table += '<td>' + edzo.tapasztalat + '</td>';
                table += '<td><img src="' + edzo.kep + '" alt="' + edzo.nev + '"></td>';
                table += '</tr>';
            });
            table += '</table>';
            $('#edzokTabla').html(table);
        }
    });
});
