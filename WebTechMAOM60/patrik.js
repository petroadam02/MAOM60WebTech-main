$(document).ready(function(){
  $.ajax({
      url: 'patrik.json',
      dataType: 'json',
      success: function(data){
          var table = $('#peppaTable tbody');
          $.each(data, function(index, item){
              table.append('<tr><td>' + item.nev + '</td><td>' + item.kor + '</td><td>' + item.spec + '</td><td>' + item.tapasztalat + " év" + '</td></tr>');
          });
      },
      error: function(){
          alert('Hiba a JSON fájl betöltése közben.');
      }
  });
});