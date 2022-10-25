/*  JavaScript Document                      */
/*  Written by Chris Converse for lynda.com  */

var panelWidth = 0;

var startPanel = 2;

$(document).ready(function(){
    
    $('.sp .tabs').css('display', 'block');
    $('.sp .panel_container .panel').css({'position':'absolute', 'height':'400px'});
    $('.sp .panel_container .panels').css({'position':'absolute', 'top':'0px'});
    
    window.panelWidth = $('.sp').width();
    
    $('.panel_container .panel').each(function(index){
        
        $(this).css({'width':window.panelWidth + 'px', 'left':(index*window.panelWidth) + 'px'});
        
        $('.sp panels').css('width', (index+1)*window.panelWidth + 'px');
    });
    
    $('.sp .tabs span').each(function(){
        
        $(this).on('click', function(){
            
            changePanels($(this).index());
        });
    });
    
    $('.sp .tabs span:nth-child('+startPanel+')').trigger('click');


});

function changePanels(newIndex){
    
    var newPanelPosition = (window.panelWidth*newIndex)*-1;
    
    var newPanelHeight = $('.sp .panel:nth-child('+(newIndex+1)+')').find('.panel_content').height() +15;
    
    $('.sp .panels').animate({left:newPanelPosition},1000);
    $('.sp .panel_container').animate({height:newPanelHeight},1000);
    
    $('.sp .tabs span').removeClass('selected');
    $('.sp .tabs span:nth-child('+(newIndex+1)+')').addClass('selected');
}
