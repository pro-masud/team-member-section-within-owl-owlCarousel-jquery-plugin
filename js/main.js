(function($){
    $(document).ready(function(){
        

        // magnifiy popup open link
        $('.video-area-btn').magnificPopup({
            type: 'video'
        });


    });

    

})(jQuery)

$(".member-list").owlCarousel({
    navigation : true,
    pagination: false,
    slideSpeed : 2500,
    stopOnHover: true,
    autoPlay: 3000,
    items: 4,
    //singleItem:true,
    itemsMobile : [550,1],
    itemsDesktopSmall : [991,2],
    transitionStyle : "fade",
    navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
});