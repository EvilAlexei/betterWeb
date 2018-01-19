// elements-panel collapse
$('.elements-panel-toggle').click(function (e) {
  e.preventDefault();

  $('.elements-panel').toggleClass('opened');
});
$('.close').click(function (e) {
  e.preventDefault();

  $('.elements-panel').removeClass('opened');
})

// element-settings collapse
$('.element-settings .opener').click(function () {
  $(this).toggleClass('closed')
})
