/*
* Show/hide sections of site
*/
$("#btn--to--about").click(function() {
    $("nav").css("visibility", "visible");
    $("footer").css("visibility", "visible");
    $("#home").css("display", "none");
    $("#about").css("display", "block");
})

$("#btn--to--play").click(function() {
    $("#about").css("display", "none");
    $("#play").css("display", "block");
})