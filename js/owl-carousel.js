$(document).ready(function(){
    $(".slide-one").owlCarousel({
        loop: true,
        items: 6,
        margin: 10,
        responsive: {
            0: {
                items: 2.2
            },
            600: {
                items: 2.2
            },
            768: {
                items: 3.2
            },
            992: {
                items: 4.2
            },
            1200: {
                items: 5.2
            }
        }
    });  
    $(".slide-two").owlCarousel({
        loop: true,
        // items: 6,
        margin: 10,
        responsive: {
            0: {
                items: 1.2
            },
            500: {
                items: 2.2
            },
            768: {
                items: 3.2
            },
            992: {
                items: 4.2
            },
            1200: {
                items: 5.2
            }
        }
    });
});

    


