$(document).ready(function () {


    //------------------------------ Initialize ----------------------------------------


    //------------------------------ Event-----------------------------------------------

    openNav = function() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("navbar1").classList.remove('navbar-fixed-top');
        document.getElementById("navbar1").setAttribute("style", "background-color: #4caf50; margin-bottom: 0px;");
        //#9c27b0
    }

    closeNav = function() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("navbar1").classList.add('navbar-fixed-top');
        document.getElementById("navbar1").removeAttribute("style", "background-color: #4caf50; margin-bottom: 0px;");
    }

    opensideNav = function() {
        document.getElementById("mySidenav1").style.width = "250px";
    }

    closesideNav = function() {
        document.getElementById("mySidenav1").style.width = "0";
    }
    
    $("a").on('click', function (event) {
        if(!$(this).hasClass('nav-index')){
            // Make sure this.hash has a value before overriding default behavior        
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if

            var element = $(this).closest('.modal');
            if(element.length){
                element.modal('toggle');
            }
        }
        
    });
    
    $("#rangkuman-nav, #evaluasi-nav").off().on("click", function(){
        var dataExpand = '#' + $(this).data("expand");

        //hide all details then show the correct one
        $('.nav-pill-details').hide();
        $(dataExpand).show('slow');
    });

    $('[data-toggle="popover"]').popover();

    $('.expand-materi').off().on('click', function(e){
        e.preventDefault();
        var element = '#' + $(this).data('id');

        $(element).toggle("slow");
    });

    $('.slide-materi').off().on('click', function(e){
        e.preventDefault();
        var element = '#' + $(this).data('id');
        var parent = $(this).closest('#materi-overview');

        // $(parent).toggle("slow");
        // $(element).toggle("slow");
        $(parent).toggle();
        $(element).toggle();
    });

    $('.back-materi').off().on('click', function(e){
        e.preventDefault();
        var element = '#' + $(this).data('id');
        var parent = $(this).closest('.modal-content').siblings("#materi-overview");
        
        // $(parent).toggle("slow");
        // $(element).toggle("slow");
        $(parent).toggle();
        $(element).toggle();
    });

    $('.carousel-control').off().on('click', function(e){
        e.preventDefault();
    })

    $('html').on('mouseup', function(e) {
        if(!$(e.target).closest('.popover').length) {
            $('.popover').each(function(){
                $(this.previousSibling).popover('hide');
            });
        }
    });

});