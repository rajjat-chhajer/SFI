/*
For stackoverflow question: http://stackoverflow.com/questions/17859134/how-do-i-create-rating-histogram-in-jquery-mobile-just-like-rating-bar-in-google#17859134
*/
var ViewFrequencyBtn = document.getElementById("myBtn");


  $('.bar span').hide();
  $('#bar-five').animate({
     width: '75%'}, 2000);
  $('#bar-four').animate({
     width: '35%'}, 2000);
  $('#bar-three').animate({
     width: '20%'}, 2000);
  $('#bar-two').animate({
     width: '15%'}, 2000);
  $('#bar-one').animate({
     width: '30%'}, 2000);
  
  setTimeout(function() {
    $('.bar span').fadeIn('slow');
  }, 2000);


  