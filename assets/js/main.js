
    $(window).on("load", function(){
      owlcarouselfun();
    })
       function owlcarouselfun(){

        var OwlSliderOne= $('#sliderone');
        var CarSlider1 =$('#CarouselSlider1');
        var CarSlider2 =$('#CarouselSlider2');
        var CarSlider3 =$('#CarouselSlider3');

        var prevNav= '<';
        var nextNav= '>';

      
        if(OwlSliderOne.length){
          OwlSliderOne.owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:true,
            navText:[prevNav, nextNav],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
              }
        })
        }

        if(CarSlider1.length){
          CarSlider1.owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            navText:[prevNav, nextNav],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
              }
        })
        }

        
        if(CarSlider2.length){
          CarSlider2.owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            navText:[prevNav, nextNav],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
              }
        })
        }

        
        if(CarSlider3.length){
          CarSlider3.owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            navText:[prevNav, nextNav],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
              }
        })
        }

        }
       
   