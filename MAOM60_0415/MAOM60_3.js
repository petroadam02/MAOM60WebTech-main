$(document).ready(function() {
    let clickCount = 0;

    $("#katIdeLabel").click(function(){
        $("#elso").hide();
    });

    $("#katIdeLabel2").click(function() {
        clickCount++;
        if(clickCount===2)
            $("#masodik").hide();
    });

    $("#fejlec").mousemove(function(){
        window.alert("Fejléc");
    });

    $('#jelentkezes').mouseenter(function() {
        window.alert("Gomb")
      });

      $('.inputField').mouseenter(function() {
        $(this).addClass('inputField-hover');
    });
    
    $('.inputField').mouseleave(function() {
        $(this).removeClass('inputField-hover');
    });

    $('.inputField').click(function(){
        $('.inputField').removeClass('active');
        $(this).addClass('active');
    })
    
})