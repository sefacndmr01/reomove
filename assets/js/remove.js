// PRELOADER
$(window).ready(function() {
    $('#loader').fadeOut();
});


// SCROLL CHECK FOR HEADER
var $header = $('#site__header'),
    scrollClass = 'scrolled',
    activateAtY = 20;

function deactivateHeader() {
    if (!$header.hasClass(scrollClass)) {
        $header.addClass(scrollClass);
    }
}

function activateHeader() {
    if ($header.hasClass(scrollClass)) {
        $header.removeClass(scrollClass);
    }
}

$(window).scroll(function() {
    if($(window).scrollTop() > activateAtY) {
        deactivateHeader();
    } else {
        activateHeader();
    }
});

//HTML5 Video
$('span.reo-play').click(function(e){
    var video = $(this).parent().children('video');
    $(video).get(0).play();
    $(video).attr('controls',true);
    $(this).css({'display':'none'});
});

$('.counter').countUp({
    'time': 2000,
    'delay': 10
});
    

// Rellax
var rellax = new Rellax('.rellax',{
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});

//ANIMATION AND COUNTER TRIGGER BEGIN 
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).scroll(function(){
    $('.reo-animation').each(function(){
        if($(this).isInViewport()){
            $(this).addClass('animate');
        }
        else{
            $(this).removeClass('animate');
        }
    });
});
//ANIMATION AND COUNTER TRIGGER END

$(window).ready(function(){
    //ADD ANIMATION DELAY
    $('.delay').each(function(){
        var delay = $(this).data('reo-delay');
        $(this).css({'animation-delay':delay+'s'});
    });
});

function removeAllActiveClasses(elem){
    $('section').each(function(){
        if(!$(this).is(elem)){
            $(this).removeClass('active');
            $(this).removeClass('modal-active');
            $(this).removeClass('hamburger-active');
        }
        else{
            return;
        }
    });
};

// REO MODAL
$('.reo-modal-trigger').click(function(){
 
    var modal_id = $(this).data('reo-modal-id');
    var backdrop_id = $(this).data('reo-backdrop-id');

    if(modal_id === undefined){
        console.log('Modal id is missing!');
        return;
    }
    else{
        var modal = $('#'+modal_id);
        var backdrop = (backdrop_id !== undefined) ? $('#'+backdrop_id) : undefined;
        var activeClass = 'modal-active';

        if(modal.hasClass(activeClass)){
            modal.removeClass(activeClass);

            if(backdrop !== undefined){
                backdrop.removeClass(activeClass);
            }

            //SPECIAL CASE
            if(modal_id == 'search-modal'){
                $('#site__header').css({'display':'block'});
            }
        }
        else{
            modal.addClass(activeClass);

            if(backdrop !== undefined){
                backdrop.addClass(activeClass);
            }

            //SPECIAL CASE
            if(modal_id == 'search-modal'){
                $('#site__header').css({'display':'none'});
            }
        }

        removeAllActiveClasses(modal);
    }
});

// REO HAMBURGER
$('.reo-hamburger-trigger').click(function(){
    
    
    var hamburger_id = $(this).data('reo-hamburger-id');
    var backdrop_id = $(this).data('reo-backdrop-id');

    if(hamburger_id === undefined){
        console.log('Hamburger id is missing!');
        return;
    }
    else{
        var hamburger = $('#'+hamburger_id);
        var backdrop = (backdrop_id !== undefined) ? $('#'+backdrop_id) : undefined;
        var activeClass = 'hamburger-active';

        if(hamburger.hasClass(activeClass)){
            hamburger.removeClass(activeClass);

            if(backdrop !== undefined){
                backdrop.removeClass(activeClass);
            }
        }
        else{
            hamburger.addClass(activeClass);

            if(backdrop !== undefined){
                backdrop.addClass(activeClass);
            }
        }

        removeAllActiveClasses(hamburger);
    }
});