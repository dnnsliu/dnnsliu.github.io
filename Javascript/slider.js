$('#next').click(function(){
    var curr = $('.active');
    var nexting = curr.next();

    if(nexting.length != 0){
        curr.removeClass('active');
        nexting.addClass('active');
    }else{
        curr.removeClass('active');
        $('#first').addClass('active');
    }
});

$('#prev').click(function(){
    var curr = $('.active');
    var prevImg = curr.prev();

    if(prevImg.length != 0){
        curr.removeClass('active');
        prevImg.addClass('active');
    }else{
        curr.removeClass('active');
        $('#last').addClass('active');
    }
});
