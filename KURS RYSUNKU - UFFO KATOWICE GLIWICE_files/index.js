//lightbox init
/*$(function() {
    $('#on_zdjecia a').lightBox();
    $('#on_zdjecia2 a').lightBox();
});*/

//change lang
function reload_lang(a){
    document.cookie = escape('lang') + "=" + escape(a);
    //setTimeout("location.reload(true);",1);
    location.href ='../';
}

function show_regulaminek()
{
    $('#regulaminek').toggle();
}