$(document).ready(function(){
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.modal').modal();
    


    
        $('.one-time').slick({
          dots: true,
          autoplay : true,
          arrows : false
        });
      
  
    var headerHeight = $(".white").outerHeight();
    $(".nav-link").click(function(){
       
        var linkHref = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 2000);

    });

    $('.lhalf2').html(function(index,oldhtml){
        var effectArray = $(this).attr("data-effect");
        console.log(effectArray);
        var split = oldhtml.split('');
        var text = '';
        split.forEach(function(currentItem, index){
            text += "<span class='"+effectArray+"'>"+currentItem+"</span>";
        });
    
        return text;
    });
    $(".lhalf2").toArray().forEach(function(currentItem){
        var delay = $(currentItem).attr("data-delay");
        $(currentItem).find("span").each(function(index){
            $(this).css({
                "animationDelay": delay*index+"s",
            });
        });
    });

    $('.magic').html(function(index,oldhtml){
        var effectArray = $(this).attr("data-effect");
        console.log(effectArray);
        var split = oldhtml.split('');
        var text = '';
        split.forEach(function(currentItem, index){
            text += "<span class='"+effectArray+"'>"+currentItem+"</span>";
        });
    
        return text;
    });
    $('.magic').toArray().forEach(function(currentItem){
        var delay = $(currentItem).attr("data-delay");
        $(currentItem).find("span").each(function(index){
            $(this).css({
                "animationDelay": delay*index+"s",
            });
        });
    });

    $(window).scroll(function() {
        $('#why-us').each(function(){
        var imagePos = $(this).offset().top;
    
        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("bigEntrance");
            }
        }, 2000);
    });
    
    $(window).scroll(function() {
        $('#our-team').each(function(){
        var imagePos = $(this).offset().top;
    
        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("fadeIn");
            }
        }, 2000);
    });
    
    // $('.contact-form').on('submit', function(event) {
    //     event.preventDefault();
    //     $.ajax({
    //         url: '/contacts',
    //         method: "POST",
    //         data: {
    //             firstname: $(".first-name").val().trim(),
    //             lastname: $(".last-name").val().trim(),
    //             email: $(".email").val().trim(),
    //             message: $(".message").val()
    //         }
    //     }).then(function(data){
    //         console.log(data);
    //     });
        
    // });
    
});


