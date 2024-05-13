$(document).ready(function(){

    $.getJSON('MAOM60_orarend.json', function(data) {
        var kurzusok = [];

        for (var i = 0; i < data["PA orarend"].kurzus.length; i++) {
          var kurzus = data["PA orarend"].kurzus[i];
          kurzusok.push(kurzus.kurzusnev);
        }
    
        $("#kurzuskereso").autocomplete({
          source: kurzusok,
          select: function(event, ui) {
            var kurzusnev = ui.item.value;
 
            for (var i = 0; i < data["PA orarend"].kurzus.length; i++) {
              var kurzus = data["PA orarend"].kurzus[i];
              if (kurzus.kurzusnev === kurzusnev) {
                var html = "<h2>" + kurzus.kurzusnev + "</h2>";
                html += "<p><b>Okatató: </b>" + kurzus.oktato + "</p>";
                html += "<p><b>Szak: </b>" + kurzus.szak + "</p>";
                html += "<p><b>Időpont:</b><br>";
                html += "<b>Nap:</b> " + kurzus.idopont.nap + "<br>";
                html += "<b>Tól:</b> " + kurzus.idopont.tol + "<br>";
                html += "<b>Ig:</b> " + kurzus.idopont.ig + "<br>";
                html += "<b>Helyszin: </b>" + kurzus.helyszin + "</p>";
                $("#talalatok").html(html);
                break;
              }
            }
          }
        });
      });

    $('#megjelenit').click(function() {

        

        $('#orarend').draggable();
        
        $.getJSON('MAOM60_orarend.json', function(data) {
            $('#orarend').html('<h2>MISKOLCI EGYETEM</h2>');

            $('#orarend').append('<p><b>Cím:</b>'+ data.cim.code + ' ' + data.cim.city + ' ' + data.cim.street + '</p>');

            $('#orarend').append('<p><b>Telefonszám:</b><ul>');
                for (var i = 0; i < data["phone number"].length; i++) {
            $('#orarend').append('<li>' + data["phone number"][i].type + ': ' + data["phone number"][i].number + '</li>');
            }
            $('#orarend').append('</ul></p>');

            $("#orarend").append('<h2>MI Órarend 2024 tavasz');

            let elsoKurzus = data["PA orarend"].kurzus[0].kurzusnev;
            $('#orarend').append('<p><b>Kurzusnév:</b> ' + elsoKurzus + '</p>');
     
            let elsoOktato = data["PA orarend"].kurzus[0].oktato;
            $('#orarend').append("<p><b>Okatató: </b>"+ elsoOktato+"</p>");

            let szak = data["PA orarend"].kurzus[0].szak;
            $('#orarend').append("<p><b>Szak: </b>"+szak+"</p>")

            elsoKurzus = data["PA orarend"].kurzus[0];
            $('#orarend').append('<p><b>Időpont:</b></p>');
            $('#orarend').append('<b>Nap:</b> ' + elsoKurzus.idopont.nap + '<br>');
            $('#orarend').append('<b>Tól:</b> ' + elsoKurzus.idopont.tol + '<br>');
            $('#orarend').append('<b>Ig:</b> ' + elsoKurzus.idopont.ig + '<br>');

            let helyszin = data["PA orarend"].kurzus[0].helyszin ;
            $("#orarend").append('<p><b>Helyszin: </b>'+helyszin+"</p>");
        });
    });

    $("#box").show("bounce", { times: 3 }, "slow");

    $("#dial").dialog();

    $('#box').draggable();

    $("#adSzoveg").click(function(){
        $("#box").text("Mérnökinformatikus");
    });

    $("#gomb").click(function(){
        $("#box").text("PTI Gomb");
    });

    $("#ujgomb").click(function(){
        $("#linkszoveg").after("<button>ME GEIK-PTI</button>");
    });

    $("#ujfejlec").click(function(){
        $("body").prepend("<h1>JQuery feladat</h1>");
    });

    $("#ujalcim").click(function(){
        $("#adSzoveg").before("<h4>HTML -Add elements</h4>");
    });

    $("#ujurlapfejlec").click(function(){
        $("form").prepend("<h2>ŰRLAP-Y4O4X0</h2>");
    });
});