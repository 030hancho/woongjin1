$(function(){

    $('.header_b').hover(function(){

        $('.gnb').stop().slideDown();
        $('.gnbbg').stop().slideDown();

    }, function(){

        $('.gnb').stop().slideUp();
        $('.gnbbg').stop().slideUp();

    }); //hover

    $('.header_b').hover(function(){

        $(this).addClass('on');
        $(this).next().addClass('on');
        $('.gnbbg').addClass('on');

    }, function(){

        $(this).removeClass('on');
        $(this).next().removeClass('on');
        $('.gnbbg').removeClass('on');

    })

    $('.gnb').hover(function(){

        $(this).addClass('on');
        $(this).prev().addClass('on');

    }, function(){

        $(this).removeClass('on');
        $(this).prev().removeClass('on');

    });

})