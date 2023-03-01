$('.sub_menu').hide();
$('.menu').bind('mouseover mouseout', function(event){
    if(event.type === 'mouseover'){
        $(this).children('.sub_menu').stop().slideDown();
    }else if(event.type === 'mouseout'){
        $(this).children('.sub_menu').stop().slideUp(10);
    }
});

var $modal_content = '<div id="modal_box"></div>'
$('body').append('<div id="modal_all">' + $modal_content + '</div>');
$('#modal_all').hide();
$('#modal_box').load('popup.html');

$('#notice_box td').eq(0).click(function(){
    $('#modal_all').show();
});

var $slide_width = $('#head_line_box > li').width();
$('#head_line_box > li:last').prependTo('#head_line_box');
$('#head_line_box').css('margin-left',  '-' + $slide_width + 'px');
var kgl_1 = true
var num = 1;

setInterval(function(){
    kgl(1);
}, 3000);

function kgl(e){
    if(kgl_1 === true){
        $('#head_line_box').animate({marginLeft: '-=' + $slide_width + 'px'},1000,function(){
            if(e === num){
                $('#head_line_box > li:first').appendTo('#head_line_box');
            
            } else if(e === -num){	
                $('#head_line_box > li:last').prependTo('#head_line_box');
            }
            $('#head_line_box').css('margin-left','-'+ $slide_width + 'px');
        });
            
    }
}