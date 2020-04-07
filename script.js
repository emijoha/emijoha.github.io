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
var projPassGen = $("#passGen");
var gitHub = $("#gitHub");

// Events for projects nav
projectsBtn.click( function () {
    if (projectContent.hasClass("is-hidden")) {
        projectContent.removeClass("is-hidden");
    }
    else {
        projectContent.addClass("is-hidden");
    }
});

projTrales.mouseenter( function () {
    projTrales.attr("src", "images/trales&ales.svg");
}).mouseleave( function () {
    projTrales.attr("src", "images/trales.svg");
}).click( function () {
    window.open("https://emijoha.github.io/Ales-and-Trales/", "_blank");
});

projDashboard.mouseenter( function () {
    projDashboard.attr("src", "images/weatherdash.svg");
}).mouseleave( function () {
    projDashboard.attr("src", "images/dash.svg");
}).click( function () {
    window.open("https://emijoha.github.io/Weather-Dashboard/", "_blank");
});

projPlanner.mouseenter( function () {
    projPlanner.attr("src", "images/planner.svg");
}).mouseleave( function () {
    projPlanner.attr("src", "images/plan.svg");
}).click( function () {
    window.open("https://emijoha.github.io/Daily-Planner/", "_blank");
});

projQuiz.mouseenter( function () {
    projQuiz.attr("src", "images/codequiz.svg");
}).mouseleave( function () {
    projQuiz.attr("src", "images/code.svg");
}).click( function () {
    window.open("https://emijoha.github.io/Code-Quiz/", "_blank");
});

projPassGen.mouseenter( function () {
    projPassGen.attr("src", "images/password.svg");
}).mouseleave( function () {
    projPassGen.attr("src", "images/pass.svg");
}).click( function () {
    window.open("https://emijoha.github.io/Password-Generator/", "_blank");
});

gitHub.mouseenter( function () {
    gitHub.attr("src", "images/github.svg");
}).mouseleave( function () {
    gitHub.attr("src", "images/git.svg");
}).click( function () {
    window.open("https://github.com/emijoha", "_blank");
});

// Events for about nav
aboutBtn.click( function () {
    if (aboutContent.hasClass("is-hidden")) {
        aboutContent.removeClass("is-hidden");
    }
    else {
        aboutContent.addClass("is-hidden");
    }
});

// Events for contact nav
contactBtn.click( function () {
    if (contactContent.hasClass("is-hidden")) {
        contactContent.removeClass("is-hidden");
    }
    else {
        contactContent.addClass("is-hidden");
    }
});