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

document.querySelectorAll('.cart_ctl .spinbox').forEach((e) => {
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
    slidesPerView: 3,
    spaceBetween: 30,
  });

  $('.reviews .cards .control.__next').click(function() {
    review_slider.slideNext();
  })

  $('.reviews .cards .control.__back').click(function() {
    review_slider.slidePrev();
  })
}
