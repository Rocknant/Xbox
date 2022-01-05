$(document).ready(function(){
    var one = $("#owl_1");
    var two = $("#owl_2");

    $(document).ready(function() {
        $('#owl-demo_images').owlCarousel({
            items : 4,
            autoPlay: 3000,
            navigation : false,
            stopOnHover : true,
            pagination : false,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3]
        });

    });

    one.owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:false,
        navText: [ '', ' ' ],
        responsive:{
            0:{
                items:1
            }
        }
    });
    two.owlCarousel({
        loop:true,
        margin:16,
        nav: false,
        dots: false,
        navText: [ '', ' ' ],
        responsive:{
            0:{
                items:1.1,
                margin:5
            },
            576:{
                items:2.9,
            },
            992:{
                items:4.75
            },
            1921:{
                items:6.75,
                margin:100
            }
        }
    });
});

