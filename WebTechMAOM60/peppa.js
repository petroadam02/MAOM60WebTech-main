$(document).ready(function(){
    $.ajax({
      url: 'peppa.json',
      dataType: 'json',
      success: function(data){
        $.each(data, function(i, edzo){
          var row = $('<tr>');
          row.append($('<td>').text(edzo.nev));
          row.append($('<td>').text(edzo.kor));
          row.append($('<td>').text(edzo.spec));
          row.append($('<td>').text(edzo.tapasztalat));
          $('#edzokTabla tbody').append(row);
        });
      }
    });
  });