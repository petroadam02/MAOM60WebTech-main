$(document).ready(function(){
    $.ajax({
      url: 'patrik.json',
      dataType: 'json',
      success: function(data) {
        $('#nev').text(data.nev);
        $('#kor').text(data.kor);
        $('#spec').text(data.spec);
        $('#tapasztalat').text(data.tapasztalat);
      }
    });
  });
