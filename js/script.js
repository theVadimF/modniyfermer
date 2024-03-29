$('.mobile_menu_open').click(async function() {
  $('.mobile_menu').addClass('__open');
  await new Promise(r => setTimeout(r, 10));
  $('.mobile_menu').addClass('__visible');
})

$('.mobile_menu_close').click(async function() {
  $('.mobile_menu').removeClass('__visible');
  await new Promise(r => setTimeout(r, 400));
  $('.mobile_menu').removeClass('__open');
})

document.querySelectorAll('.cart_ctl .spinbox:not(.__disabled)').forEach((e) => {
  let box = $(e).find('.input')
  console.log(box);

  $(e).find('.btn.decrease').click(() => {
    if (box.val() > 1) {
      box.get(0).value--
    }
  })

  $(e).find('.btn.increase').click(() => {
    if (box.val() < 99) {
      box.get(0).value++
    }
  })

  box.on('blur', () => {
    if (box.val() > 99) {
      box.val(99)
    } else if (box.val() < 1) {
      box.val(1)
    }
  })
})

if ($('.product_card').length) {
  const card_slider = new Swiper('.card_main_slider', {
    grabCursor: true,
  });

  $('.product_card .images .slider_ctl.__next').click(function() {
    card_slider.slideNext();
  })

  $('.product_card .images .slider_ctl.__back').click(function() {
    card_slider.slidePrev();
  })

  const review_slider = new Swiper('.review_slider', {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      1060: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 2,
      }
    }
  });

  $('.reviews .cards .control.__next').click(function() {
    review_slider.slideNext();
  })

  $('.reviews .cards .control.__back').click(function() {
    review_slider.slidePrev();
  })
}

$('.category_btn').click(function() {
  if ($(this).hasClass('__open')) {
    $(this).removeClass('__open');
    $(this).siblings('.contents').slideUp();
  } else {
    $(this).addClass('__open');
    $(this).siblings('.contents').slideDown();
  }
})

$('.open_filters').click(async function() {
  $('.filters').addClass('__open');
  await new Promise(r => setTimeout(r, 10));
  $('.filters').addClass('__visible');
})

$('.close_filter').click(async function() {
  $('.filters').removeClass('__visible');
  await new Promise(r => setTimeout(r, 400));
  $('.filters').removeClass('__open');
})

if ($('.custom_map_wrap').length) {
  const pickup_slider = new Swiper('.pickup_slider', {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      1020: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 2,
      }
    }
  });

  $('.pickup_slider .controls .btn.__next').click(function() {
    pickup_slider.slideNext();
  })

  $('.pickup_slider .controls .btn.__back').click(function() {
    pickup_slider.slidePrev();
  })
}

$('.lk_mobile_nav .button').click(function() {
  if ($(this).hasClass('__open')) {
    $(this).removeClass('__open')
    $('.lk_mobile_nav .menu').slideUp();
  } else {
    $(this).addClass('__open')
    $('.lk_mobile_nav .menu').slideDown();
  }
})

let $inputs = $('.login_code .numbers .digit').on('input', e => {
  let $input = $(e.target);
  let index = $inputs.index($input);
  if ($input.val().length === $input.prop('maxlength')) {
    $inputs.eq(index + 1).focus();
  }
});

$('.login_code .numbers .digit').on('input', function(e) {
  let $input = $(e.target);
  let index = $inputs.index($input);
  if ($input.val().length === $input.prop('maxlength')) {
    $inputs.eq(index + 1).focus();
  }
});

$('.login_code .numbers .digit').on('keydown', function(e) {
  if (e.keyCode == 8) {
      let $input = $(e.target);
      let index = $inputs.index($input);
      if ($input.val().length === $input.prop('maxlength')) {
        if (e.target.value === "") {
          $inputs.eq(index - 1).focus();
        }
      } else if (index > 0) {
        $inputs.eq(index - 1).focus();
      }
    }
})

$('#cookie_open').click(function() {
  $('.cookies_popup').fadeIn();
})

$('#order_popup_open').click(function() {
  $('#order_popup').fadeIn();
})

$('#cart_popup_open').click(function() {
  $('#cart_popup').fadeIn();
})

$('#close_cookie').click(function() {
  $('.cookies_popup').fadeOut();
})

$('#close_order_popup').click(function() {
  $('#order_popup').fadeOut();
})

$('#close_cart_popup').click(function() {
  $('#cart_popup').fadeOut();
})