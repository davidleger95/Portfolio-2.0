//TODO optimize queries with variables instead of repeat selectors.

var meOffset = $('.me').position().top,
    workOffset = $('.work').position().top,
    skillsOffset = $('.skills').position().top,
    lifeOffset = $('.life').position().top;

var meDone = false,
    workDone = false,
    skillsDone = false,
    lifeDone = false;

var windowH = $(window).height(), 
    windowW =$(window).width();

function getSectionPositions(){
    meOffset = $('.me').position().top;
    workOffset = $('.work').position().top;
    skillsOffset = $('.skills').position().top;
    lifeOffset = $('.life').position().top;
}

function scrollToSection(section){
    $('html, body').animate({
        scrollTop: $(section).offset().top
    }, 750);
}

$(document).ready(function(){
    
    scrollAnimations();
    
    $(window).resize(function(){
        windowH = $(this).height();
        windowW = $(this).width();
    });
    
    // scroll animaion
    $(".btn-home").click(function (){
            scrollToSection('.welcome');
    });
    
    $(".btn-me").click(function (){
            scrollToSection('.me');
    });
    
    $(".btn-work").click(function (){
            scrollToSection('.work');
    });
    
    $(".btn-skills").click(function (){
            scrollToSection('.skills');
    });
    $(".btn-life").click(function (){
            scrollToSection('.life');
    });
    console.log($(document).scrollTop());
    
    
    // Section entering screen
    $(this).scroll(function(){
        scrollAnimations();
    });
});

function scrollAnimations(){
    var scrollPos = $(document).scrollTop();
    var position = scrollPos + (windowH/2);
    var menuMath = (-50 + scrollPos - windowH/3);

    $('.bg-left').css('background-position',  -(100+(scrollPos/20)) + 'px ' + scrollPos/10 + 'px');
    $('.bg-right').css('background-position', (scrollPos/20) + 'px ' + scrollPos/10 + 'px');


    //handles fixed menu display
    if(menuMath < -500){
        $('.navbar').css('top', -50);
    }else if(menuMath < 0){
        $('.navbar').css('top', menuMath/5);
    } else{
        $('.navbar').css('top', 0);
    }

    if(scrollPos == 10){
        //scrollToSection('.me');

    }else if(position >= meOffset && !meDone){
        $('.me .tagline').addClass('dropfade');
        $('.me .breakline').addClass('fade');
        $('.me .text').addClass('risefade');

        meDone = true;

        //testing
        console.log("fire me once");

    }else if(position >= workOffset && !workDone){
        $('.work .tagline').addClass('dropfade');
        $('.work .breakline').addClass('fade');
        $('.work .content').addClass('risefade');
        workDone = true;
    }else if(position >= skillsOffset && !skillsDone){
        $('.skills .tagline').addClass('dropfade');
        $('.skills .breakline').addClass('fade');
        $('.skills .content').addClass('risefade');
        skillsDone = true;
    }else if(position >= lifeOffset && !lifeDone){
        $('.life .tagline').addClass('dropfade');
        $('.life .breakline').addClass('fade');
        $('.life .content').addClass('risefade');
        lifeDone = true;
    }
}