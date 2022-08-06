$(function () {
  $('.c-button').on('click', function () { 
    $(this).toggleClass('open');
    $('.l-sidebar').toggleClass('is-open'); 
  });
});