$(function(){

    $('.icon_list>li').on('click', function(){

        $('.icon_list>li>a>div').removeClass('on');
        $('.icon_list>li>a>p').removeClass('on');
        $(this).find('div').addClass('on');
        $(this).find('p').addClass('on');

        var i = $(this).index();

        $('.drk_list>ul.list').removeClass('on');
        $('.drk_list>ul.list').eq(i).addClass('on');

    })
    
})