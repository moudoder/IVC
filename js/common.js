$(document).ready(function () {

  let result_sliders = $('.results-slider');
  for (let i = result_sliders.length - 1; i >= 0; i--) {
    let slider = result_sliders[i];
    let parent_slider = $(slider).parent('.results-slider-wrapper');
    let arrow_n = $(parent_slider).find('.results-slider-arrow--prev');
    let arrow_p = $(parent_slider).find('.results-slider-arrow--next');;
    $(slider).slick({
      infinite: true,  
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      prevArrow: arrow_n,
      nextArrow: arrow_p,
      responsive: [
          {
            breakpoint: 1160,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
     });
  }
  
  $('#discuss-file').on('change', function() {
    let file = $('#discuss-file')[0].files[0]
    if (file){
      $('.discuss-label__file')[0].innerHTML = file.name;
    }
  })

  

  $(".phone").inputmask("+7 (999) 999-9999");


  

  $('.slider-ranger').on('init reInit',function(event,slick){
    var amount = slick.slideCount;
    let range_slide = $(this).parent('.slider-section-wrapper');
    range_slide = $(range_slide).find('.slider-section-range');
    $(range_slide).attr('max',amount);

    //$('.slider-section-range').change(); 
  })

  $('.slider-ranger').on('afterChange',function(e,slick,currentSlide){
    let range_slide = $(this).parent('.slider-section-wrapper');
    range_slide = $(range_slide).find('.slider-section-range');
    $(range_slide).val(currentSlide+3);
    //$('.slider-section-range').change(); 
  })

  $('.slider-section-range').on('input change',function(){
    let slider_child = $(this).parent('.slider-section-wrapper');
    slider_child = $(slider_child).find('.slider-section-slider');
    $(slider_child).slick('slickGoTo',this.value-3);
    //$('.slider-section-range').change(); 
  });

  $('.knowledge-slider').slick({
      infinite: false,  
      slidesToShow: 3,
      dots: false,
      prevArrow: $('.knowledge-arrow--prev'),
      nextArrow: $('.knowledge-arrow--next'),
      responsive: [
          {
            breakpoint: 1160,
            settings: {
              variableWidth: true
            }
          },
          {
            breakpoint: 765,
            settings: {
              slidesToShow: 1,
              variableWidth: false,
            }
          }
        ]
  });

  $('.crucial-slider').slick({
      infinite: false,  
      slidesToShow: 4,
      dots: false,
      prevArrow: $('.crucial-arrow--prev'),
      nextArrow: $('.crucial-arrow--next'),
      responsive: [
          {
            breakpoint: 1160,
            settings: {
              infinite: true, 
              variableWidth: true
            }
          },
          {
            breakpoint: 765,
            settings: {
              slidesToShow: 1,
              variableWidth: false,
            }
          }
        ]
  });

  if ($(window).width() <= 1160) {
      
  }
  if ($(window).width() <= 1160 && $(window).width() > 765) {
    $('.clients-row').slick({
        infinite: false,  
        slidesToShow: 3,
        dots: false,
        arrows: false,
        variableWidth: true
    });
    $('.school-row').slick({
        infinite: false,  
        slidesToShow: 2,
        dots: false,
        arrows: false,
        variableWidth: true
    });
  }
})