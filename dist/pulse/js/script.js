const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  controls: false,
  nav: true,
  mouseDrag: true,
  responsive: {
    1440: {
      items:1,
      
    },
    1024: {
      items: 2,
      
    },
    992: {
      items: 2,
      nav:false
    },
    768: {
      nav: true
    },
  } 
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});

(function($) {
  $(function() {
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this).addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    
  });
    function toggleSlide(item){
      $(item).each(function(i){
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
      });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
    // Modal
    $('[data-modal="consultation"]').on('click', function(){
      $('.overlay , #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button_catalog').each(function(i){
      $(this).on('click', function(){
        $('#order .modal__desc').text($('.catalog-item__title').eq(i).text())
        $('.overlay, #order').fadeIn('slow');
      });
    });
    function validateForms(form){
      $(form).validate({
        rules: {
          name: 'required',
          phone:'required',
          email:{
            required: true,
            email: true
          }
        },
        messages: {
          name: "Пожалуйста, введите своё имя",
          phone: "Пожалуйста, введите свой номер телефона",
          email: {
            required: "Пожалуйста, введите свою эл.почту",
            email: "Пример адреса почты  name@domain.com"
          }
        }
      });

    }
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
  
    $('form').submit(function(e){
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function(){
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
      });
      return false;
    })
    // pageup
    $(window).scroll(function(){
      if ($(this).scrollTop() > 1600){
        $('.pageup').fadeIn('fast');
      }else{
        $('.pageup').fadeOut('fast');
      }
    });
    $("a[href='#up']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
});

new WOW().init();

})(jQuery);