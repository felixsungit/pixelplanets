$("[data-toggle=popover]").popover();

var top = $(window).scrollTop();
const sun_size = 607;

$(document).scroll(function() {
    var posTop = $(window).scrollTop();
    $("#dis_px_num").text(posTop + " px");
    $("#dis_km_num").text( (posTop * 2372) + " km");
    
});


//go_to click
$("#sun_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#sun_back").offset().top
   }, 500);
});
$("#mercury_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#mercury_container").offset().top - sun_size 
   }, 500);
});
$("#mercury_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#mercury_container").offset().top - sun_size 
   }, 500);
});

$("#venus_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#venus_container").offset().top - sun_size 
   }, 500);
});


$("#earth_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#earth_container").offset().top - sun_size 
   }, 500);
});
$("#moon_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#moon_container").offset().top - sun_size 
   }, 500);
});

$("#mars_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#mars_container").offset().top - sun_size 
   }, 500);
});

$("#asteroid_belt_st_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#asteroid_belt_st").offset().top - sun_size + 35
   }, 500);
});

$("#jupiter_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#jupiter_container").offset().top - sun_size 
   }, 500);
});
$("#io_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#io_container").offset().top - sun_size 
   }, 500);
});

$("#europa_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#europa_container").offset().top - sun_size 
   }, 500);
});

$("#callisto_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#callisto_container").offset().top - sun_size 
   }, 500);
});
$("#ganymede_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#ganymede_container").offset().top - sun_size 
   }, 500);
});




$("#saturn_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#saturn_container").offset().top - sun_size 
   }, 500);
});

$("#titan_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#titan_container").offset().top - sun_size 
   }, 500);
});

$("#uranus_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#uranus_container").offset().top - sun_size 
   }, 500);
});
$("#neptune_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#neptune_container").offset().top - sun_size 
   }, 500);
});
$("#pluto_go_to").click(function(event){
	$('html, body').animate({
    scrollTop: $("#pluto_container").offset().top - sun_size 
   }, 500);
});
$("#triton_go_to").click(function(event){
  $('html, body').animate({
    scrollTop: $("#triton_container").offset().top - sun_size 
   }, 500);
});



$(".down_moon").click(function(event){
	event.preventDefault();
	$(this).siblings('.moons').slideToggle(150);
	$(this).children(".down_arrow").toggleClass("rotate");
});






