$(document).ready(function(){


    $('h1').mouseenter(function(){
        $('h1').css('color', '#660066');
    });
    $('h1').mouseleave(function(){
        $('h1').css('color','black');
    });
    // hide кнопку после при ее нажатии  
    $('Button').click(function(){
        $('Button').hide(100);
    });
    // show кнопку при нажатии на картинку (еще показываеться при закрытии окна (после нажатия кнопки regist))
    $('img').click(function(){
        $('Button').show(100);
    });











});
