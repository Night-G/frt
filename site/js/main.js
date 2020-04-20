$(document).ready(function(){


    $('h1').mouseenter(function(){
        $('h1').css('color', '#660066');
    });
    $('h1').mouseleave(function(){
        $('h1').css('color','black');
    });
    // hide кнопку + show форму с затемнением при  нажатии  
    $('Button').click(function(){
        $('Button').hide(0);
        $('.regForm').show();
        $('.grey').show(0);
    });
    // show кнопку + hide форму с затемнением при нажатии на картинку 
    $('img').click(function(){
        $('.regForm').hide(0);
        $('.grey').hide(0);
        $('Button').show(0);
    });

    
   






    




});
