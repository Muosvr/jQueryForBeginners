/*
#5 Element selectors
$('h3').css({border: "3px solid blue"});

Class selectors
$('.wrapper').css({border: "3px solid red"});

Id selectors
$('#clients').css({border: "3px solid yellow"});

#6 jQuery Filters

grab the first li item in the header inside nav and create borders around them
$("header nav li:first").css({border:"2px solid pink"});
$("header nav li:last").css({border:"3px solid pink"});

#7 Traversing the DOM with jQuery

next
$("#contact-methods").next().css({border: "3px dotted black"});

prev
$("#social-nav").prev().css({border: "3px solid black"});

Other methods: .parent(), .parentAll(), .children(), .find(), .closest()
.find()-better performance,
.closest() - find the nearest parent that matches the element
.parentAll() - final all parents

jQuery Chaining
$("#contact-methods").css({border: "2px solid red"}) //find the element with Id of "contact-methods" and create a 2 px red border around it
    .next().css({border: "2px solid green"}) //find the next element down the line and create a 2 px solid green border around it
    .closest("section").css({border: "2px solid blue"}); // find the closest parent with the tag "section" and create a 2 px blue border around it

#9 Adding Content using jQuery
var tweet = "<div style='margin: 20px 0; padding: 10px; background: #eee;'>The big fight live: Ham vs Cheese!</div>";

$("#tweets div").append(tweet);

.append() adds content to bottom of the element
.prepend() adds content to top of element
.before() add content before element
.after() add content after element
.html() changes the whole html of the element
.text() changes the text of an element

#10 Wrap and Unwrap Elements
wrap() - wraps all matched elemtns individually by tag inside ()
unwrap() - unwraps all matched elements
wrapAll() - wraps all matched elements inside 1 single element using tag indicated in ()
e.g.
$("section").wrap('<div>');
$("section").unwrap();
$("section").wrapAll('<div>');

var wrapper = "<div class='wrapper'>";
var button = $(".button");
var wrapped = true;

button[0].onclick = function(){
    if (wrapped === true){
        $("section").unwrap();
        wrapped = false;
        button.text('Wrap')
    }else {
        $("section").wrap(wrapper);
        wrapped = true;
        button.text('Unwrap');
    }
}


#11 Removing content

.empty() - empties the inner HTML of an element
.remove() - removes the element completely

e.g.
$(".button").empty();
$("#contact-methods").empty();

#12 Changing attributes
.removeAttr() removes an attribute completely
.attr() can read or set any attribute
e.g.
$("#contact img").attr("alt","changed");//change attribute from alt to changed
$("#contact img").attr("alt");//read attribute alt, which returns the string map
$("#contact img").removeAttr("alt")//remove the alt attribute

#13 CSS with jQuery
$("#social-nav").css({
    "top": "-400px",
    "left": "150px",
    "opacity": "0.5",
    "border-top": "4px solid red"
})

#14 Adding & Removing Classes
removeClass() - removes a class from the matched elements(s)
addClass() - adds a class to the matched element(s)
toggleClass - toggles the class on and off on their matched element(s)

e.g.
$("header .wrapper").removeClass("wrapper"); //remove the class wrapper from the element inside the header tag that with the class wrapper
$("header > div").addClass("wrapper");//Go to the header and find the immediate next child that is a div tag and add the class wrapper to it

$("#points-of-sale").attr("style","height:0; overflow:hidden");
var button = $("#lead-banner a");
button[0].onclick = (function(){
    $("#points-of-sale").toggleClass("open");
    console.log($("#lead-banner a"));
    return false;
})

#15 Binding and unbinding events
var myList = $("#points-of-sale li"); //find the li tags inside points-of-sale id store in myList

myList.on('click', function(){ //Bind click event to the matched element and run function
    $(this).css("background", "pink"); // find the element and use css to turn background into pink
    myList.off('click'); // unbind click event, so other elements cannot be clicked anymore
})

#16 Event Helper
Shorter way to bind event
e.g.
$("#lead-banner").click(function(){ //.dblclick for double click
    alert("You clicked me!");
})

#17 Document Ready vs Window Load

These three lines mean the same thing: load function when document is ready
$(document).on("ready",function(){});
$(document).ready(function(){});
$(function(){});

These wait till everything, including images, are loaded 
$(window).on("load",function(){});
$(window).load(function(){});

#18 The Event Object in jQuery
$(document).ready(function(){
    $("*").on("click",function(e){ //"*" grabs everything in the window
        console.log(e.target);
        console.log("The event type is: " + e.type);
        console.log("X co-ordinate of the event is: " + e.pageX);
        console.log("Y co-oridinate of the event is: " + e.pageY);
        e.stopPropagation(); // this will prevent the parents of the target to be selected as well
    });
});

#19 Animation in jQuery

$(document).ready(function(){
    $("section > h2").on("click",function(){
       $(this).animate({"width": "500px", "height": "100px"},1000,"linear",complete); //parameter object, speed, type of animation, call back function to run when animation finishes
    });
});

function complete(){
           alert("Animation complete");
}

#20 Fading Elements In & Out
$(document).ready(function(){
    $("section > h2").on("click",function(){
        $(this).animate({"opacity": "0.5"}); // 0: transparent, 1: opaque
        $(this).fadeOut();//makes an element disappear
        $(this).fadeOut().fadeIn();//fades out then fades in
        $(this).fadeOut(2000).fadeIn(500) // adding speed
        $(this).fadeTo(1000,0.2)//specify speed and opacity to fade to
        
        //multiples
        $(this).fadeTo(200,0.2)
               .fadeTo(200,0.8)
               .fadeTo(200,0.2)
               .fadeTo(200,0.8)
               .fadeTo(200,0.2)
               .fadeTo(200,0.8)
               .fadeTo(200,0.2)
               .fadeTo(200,0.8);
    });
});

#21 Show Hide and Toggle

$(document).ready(function(){
   $("section > h2").on("click",function(){
        $(this).hide(1000)// if no value is passed through, it will just disappear. If a value exist, that it shrinks, moves, and fadeOut all together
               .show(1000); //zooms back in
   });
   
   $("img[alt=map]").on("click",function(){
      $("section > h2").toggle(1000); //state dependent hide or show
   });
});

#22 Sliding Elements
$(document).ready(function(){
    $(".slide-button-up").on("click",function(){
        $("#lead-banner").slideUp(100);
        //or use slideToggle() to toggle
    });
    $(".slide-button-down").on("click",function(){
        $("#lead-banner").slideDown(4000, function(){
        //or use slideToggle() to toggle
            alert("animation complete");
        });
    });
});

#23 Fading Animations Example
$(document).ready(function(){
    var allQuotes = $("blockquote");
    var currentQuote = 0;
    
    function changeQuote(){
      $(allQuotes[currentQuote]).fadeOut(200, function(){
          if(currentQuote == allQuotes.length - 1){
          currentQuote = 0;
          }else {
              currentQuote++;
          }
      
      $(allQuotes[currentQuote]).fadeIn(200);
      }); //use jQuery wrapper to wrap the selected HTML value: allQuotes[currentQuote], so fadeOut can be applied 
        
      
        
    }
    
    var quoteTimer = setInterval(changeQuote, 3000)//setting interval to call function
});

#24 Sliding Anmation Example

$(document).ready(function(){
    var items = $("#points-of-sale li");
    
    items.on("click", function(){
        
        $(this).find("p").slideToggle(500);
    });
});

#25 Using Plugins

$(document).ready(function(){
    $(".rslides").responsiveSlides();
});

*/



