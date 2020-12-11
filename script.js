// DOM elements
var projectsBtn = $("#projects");
var aboutBtn = $("#about");
var contactBtn = $("#contact");
var projectContent = $("#projectContent");
var aboutContent = $("#aboutContent");
var contactContent = $("#contactContent")
var projTrales = $("#tralesAles");
var projDashboard = $("#weatherDash");
var projPlanner = $("#workPlanner");
var projQuiz = $("#codeQuiz");
var projWhatsGood = $("#whatsGood");
var projHikeHire = $("#hikeHire");
var projBurger = $("#projBurger");
var github = $("#github");
var email = $("#email");
var linkedin = $("#linkedin");
var hamburger = $("#hamburger");

// hamburger
hamburger.click( function () {
    window.location.href = "index.html"
});

// Events for projects nav
projectsBtn.click( function () {
    window.location.href = "projects.html"
});

projTrales.mouseenter( function () {
    projTrales.attr("src", "images/trales&ales.svg");
}).mouseleave( function () {
    projTrales.attr("src", "images/trales.svg");
}).click( function () {
    window.location.href = "trales-and-ales.html";
});

projDashboard.mouseenter( function () {
    projDashboard.attr("src", "images/weatherdash.svg");
}).mouseleave( function () {
    projDashboard.attr("src", "images/dash.svg");
}).click( function () {
    window.location.href = "weather-dashboard.html";
});

projPlanner.mouseenter( function () {
    projPlanner.attr("src", "images/planner.svg");
}).mouseleave( function () {
    projPlanner.attr("src", "images/plan.svg");
}).click( function () {
    window.location.href = "workday-planner.html";
});

projQuiz.mouseenter( function () {
    projQuiz.attr("src", "images/codequiz.svg");
}).mouseleave( function () {
    projQuiz.attr("src", "images/code.svg");
}).click( function () {
    window.location.href = "code-quiz.html";
});

projWhatsGood.mouseenter( function () {
    projWhatsGood.attr("src", "images/whatsgoodimg.svg");
}).mouseleave( function () {
    projWhatsGood.attr("src", "images/whatsgood.svg");
}).click( function () {
    window.location.href = "whats-good.html";
});

projHikeHire.mouseenter( function () {
    projHikeHire.attr("src", "images/hikehireimg.svg");
}).mouseleave( function () {
    projHikeHire.attr("src", "images/hikehire.svg");
}).click( function () {
    window.location.href = "hike-hire.html";
});

projBurger.mouseenter( function () {
    projBurger.attr("src", "images/burgerimg.svg");
}).mouseleave( function () {
    projBurger.attr("src", "images/burger.svg");
}).click( function () {
    window.location.href = "burgers-digest.html";
});

// Events for about nav
aboutBtn.click( function () {
    window.location.href = "about.html"
});

// Events for contact nav
contactBtn.click( function () {
    window.location.href = "contact.html"
});

github.click( function() {
    window.open("https://github.com/emijoha", "_blank");
});

email.click( function() {
    email.attr("src", "images/emailaddress.svg");
}).mouseleave( function () {
    email.attr("src", "images/email.svg");
})

linkedin.click( function() {
    window.open("https://www.linkedin.com/in/emilia-josefina-hartline-a14ab21a0/", "_blank");
});

// Splide slider
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' ).mount();
} );