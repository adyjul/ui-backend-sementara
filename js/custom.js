$(document).ready(function(){   

    $('#bar').click(function(){        
        $(this).toggleClass('open');
        $('#page-content-wrapper ,#sidebar-wrapper').toggleClass('toggled' );
        var lebarNavbarWrap = $(".navbar").width()
        $(".topBar-input").css("width",lebarNavbar-500)
    });


    $(".btn-navbar-search").click(function(){
        $(this).css("display","none");
        $(".navbar-search-overlap").addClass("show");
    })

    $(".btn-custom-navbar").click(function(){
        $(".navbar-search-overlap").removeClass("show");    
        $(".btn-navbar-search").css("display","block")
    })

    var lebarNavbar = $(".navbar").width()

    $(".topBar-input").css("width",lebarNavbar-500)
   

    $(window).resize(function(){
        var lebarNavbarResize = $(".navbar").width()
        $(".topBar-input").css("width",lebarNavbarResize-500)
    })

    
    $(".nav-sub").click(function(){            
       var value = $(this).attr("data-name");        
       dinamisValue(value)              
    })
    

    function dinamisValue(value){        
        $(".nav-subItems-"+value).css("left","0px")
        $(".nav-items").css("left","-20rem")        

        $(".sub-item-show").click(function(){  
                  
            $(".nav-subItems-"+value).css("left","20rem")
            $(".nav-items").css("left","0px")
        })
    }

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    
              

})  