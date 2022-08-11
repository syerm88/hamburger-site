$(function () {
  $('.c-button').on('click', function () { 
    $(this).toggleClass('is-open');
    $('.l-sidebar').toggleClass('is-open');
    $('.hamburger-bg-cover').toggleClass('is-open'); 
  });
});

$(window).on('resize', function() {
  let $windowWidth = window.innerWidth;

  if($windowWidth > 1200){
    $('.c-button').removeClass('is-open');
    $('.l-sidebar').removeClass('is-open');
    $('.hamburger-bg-cover').removeClass('is-open');    
  };
});