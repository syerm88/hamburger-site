$(function () {
  $('.c-button').on('click', function () { 
    $(this).toggleClass('is-open');
    $('.l-sidebar').toggleClass('is-open');
    $('.hamburger-demo-cover').toggleClass('is-open'); 
  });
});