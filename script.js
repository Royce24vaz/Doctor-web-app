$(function(){
 $(".account").hide(); 
 $(".appoint").hide();
  $(".proset").hide(); 
 $(".symptoms").hide()
 $(".mobile").hide();
 $(".home").hide()
 $(".profile").hide();
 $(".email").hide();
 $("#reg").click(function(){
 $(".account").show();
 $(".fog").hide();
 });
});

$(function(){
 $(".appoint").hide();
 $(".account").hide();  
 $("#log").click(function(){
 $(".account").hide();
 $(".fog").show();
 });
});

$(function(){
 $(".account").hide(); 
 $(".appoint").hide();
 $(".fpw").click(function(){
 $(".email").show();
 $(".fog").hide();
 
 $(".doc").hide();
 $(".tabs").hide();
 });
});

$(function(){ 
$(".appoint").hide();
 $(".goback").click(function(){
 $(".fog").show();
 $(".doc").show();
 $(".tabs").show();
 $(".goback").hide();
 $(".email").hide();
 
 });
});

$(function(){ 
 $(".appoint").hide();
 $(".login").click(function(){
 $(".profile").show();
 $(".email").hide();
$(".account").hide();
$(".doc").hide();
$(".tabs").hide()
$(".fog").hide();
 });
});


$(function(){ 
 $(".appoint").hide();
 $(".complete").click(function(){
 $(".home").show();
 $(".mobile").show();
 $(".profile").hide();
 $(".email").hide();
$(".account").hide();
$(".doc").hide();
$(".tabs").hide()
$(".fog").hide();
 });
});


$(function(){ 
 $("#books").click(function(){
 $(".home").hide();
 $(".appoint").show();
 $(".profile").hide();
 $(".email").hide();
 $(".proset").hide()
 $(".symptoms").hide();
$(".account").hide();
$(".doc").hide();
$(".tabs").hide()
$(".fog").hide();
 });
});

$(function(){ 
 $("#homes").click(function(){
 $(".home").show();
 $(".appoint").hide();
 $(".proset").hide()
 $(".profile").hide();
 $(".email").hide();
  $(".proset").hide();
 $(".symptoms").hide();
$(".account").hide();
$(".doc").hide();
$(".tabs").hide()
$(".fog").hide();
 });
});

$(function(){ 
 $("#heart").click(function(){
 $(".symptoms").show();
 $(".appoint").hide();
 $(".home").hide();
 $(".proset").hide();
 $(".profile").hide();
 $(".email").hide();
$(".account").hide();
$(".doc").hide();
$(".tabs").hide()
$(".fog").hide();
 });
});

$(function(){ 
 $("#user").click(function(){
 $(".proset").show();
 $(".home").hide();
 $(".appoint").hide();
 $(".symptoms").hide();
 $(".profile").hide();
 $(".email").hide();
$(".account").hide();
$(".doc").hide();
$(".tabs").hide()
$(".fog").hide();
 });
});
