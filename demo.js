var hidden = false;
$('.wrapper').click(function() {
    console.log('click');
    if (hidden) {
        $('.slice').stop().animate({left: '-8em'}, 2000);
        hidden = false;
    } else {
        $('.slice').stop().animate({left: '-34em'}, 2000);
        hidden = true;
    }
    console.log('click end');
});