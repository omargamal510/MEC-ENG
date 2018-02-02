// Function that shows date

var dateDisplayer = document.getElementById('date').innerHTML = Date();

//========


//-- Show navbar2---

$(document).ready(function () {

    $("div#nav2-button").on("click", function() {
        $("#nav2").slideToggle();
    });

});

//========


// Input focus and blur for placeholder effect

var searchInput = document.getElementById('search-input');

searchInput.onfocus = function () {

    'use strict';
    this.removeAttribute('placeholder');
};

searchInput.onblur = function () {

    'use strict';
    this.setAttribute('placeholder','Search');
};

//======





//=== Slider Functions
$(document).ready(function mine() {

    var $one    = $('section#one'),
        $two    = $('section#two'),
        $three  = $('section#three'),
        $four   = $('section#four');

        $one.fadeOut(1500);
        $two.fadeIn(3000, function () {$two.fadeOut(3000)});
        $three.fadeIn(6000, function () {$three.fadeOut(3000)});
        $four.fadeIn(9000, function () {$four.fadeOut(3000)});

    setInterval(mine, 11500);
});

//========







// Loader time functions

var loaderHolder = document.getElementById('loader-holder');
var loader1 = document.getElementById('loader');


$(document).ready(function () {
    $('div#loader-holder').delay(1500).fadeOut(1500, function() {scrollTo(0, 0)});
});




// ---------


