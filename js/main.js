$(document).ready(function(){

/*Menu*/
    $("#sandwich").on("click", function(){
        $("header nav ul").toggleClass("open");
    });
/*End menu*/

/*Burger*/
    $("#sandwich, .menu_item").click(function() {
        $("#sandwich").toggleClass("active");
    });
/*End burger*/

/*Serch focus*/
    $(".search").on("click", function() {
        $(".search input").css("display", "block");
        $("#searchInput").focus();
        $(".search input").focusout(function(){
             $(this).css("display", "none");
        });
    });
/*End focus*/
    $(".bob-say").fadeIn(7000);
    $(".mary-say").fadeIn(9000);
    $("#get-started").fadeIn(11000);

});


$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
        .fadeOut(3000)
        .next()
        .fadeIn(3000)
        .end()
        .appendTo('#slideshow');
},  3000);

$('video').on('ended', function () {
    this.load();
    this.play();
});

var string = "We copy your terabytes before your coffee gets cold.";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
    str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
    var running = setTimeout(animate, 120);
})();

// if($(".carousel-indicators>li").hasClass("active")) {
//     (function move() {
//         var elem = document.getElementById("myBar");
//         var width = 0;
//         var id = setInterval(frame, 50);
//
//         function frame() {
//             if (width >= 100) {
//                 clearInterval(id);
//             } else {
//                 width++;
//                 elem.style.width = width + '%';
//             }
//         }
//     })();
// }