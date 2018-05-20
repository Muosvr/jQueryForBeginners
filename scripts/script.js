//#5 Element selectors
// $('h3').css({border: "3px solid blue"});

// Class selectors
// $('.wrapper').css({border: "3px solid red"});

// Id selectors
// $('#clients').css({border: "3px solid yellow"});

//#6 jQuery Filters

// grab the first li item in the header inside nav and create borders around them
// $("header nav li:first").css({border:"2px solid pink"});
// $("header nav li:last").css({border:"3px solid pink"});

//#7 Traversing the DOM with jQuery

//next
//$("#contact-methods").next().css({border: "3px dotted black"});

//prev
// $("#social-nav").prev().css({border: "3px solid black"});

//Other methods: .parent(), .parentAll(), .children(), .find(), .closest()
//.find()-better performance,
//.closest() - find the nearest parent that matches the element
//.parentAll() - final all parents

// jQuery Chaining
// $("#contact-methods").css({border: "2px solid red"}) //find the element with Id of "contact-methods" and create a 2 px red border around it
//     .next().css({border: "2px solid green"}) //find the next element down the line and create a 2 px solid green border around it
//     .closest("section").css({border: "2px solid blue"}); // find the closest parent with the tag "section" and create a 2 px blue border around it

//#9 Adding Content using jQuery
// var tweet = "<div style='margin: 20px 0; padding: 10px; background: #eee;'>The big fight live: Ham vs Cheese!</div>";

// $("#tweets div").append(tweet);

//.append() adds content to bottom of the element
//.prepend() adds content to top of element
//.before() add content before element
//.after() add content after element
//.html() changes the whole html of the element
//.text() changes the text of an element

//#10 Wrap and Unwrap Elements
// wrap() - wraps all matched elemtns individually by tag inside ()
// unwrap() - unwraps all matched elements
// wrapAll() - wraps all matched elements inside 1 single element using tag indicated in ()
//e.g.
// $("section").wrap('<div>');
// $("section").unwrap();
// $("section").wrapAll('<div>');

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