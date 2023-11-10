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