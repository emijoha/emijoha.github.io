// DOM elements
var projectsBtn = $("#projects");
var aboutBtn = $("#about");
var contactBtn = $("#contact");
var projectContent = $("#projectContent");
var aboutContent = $("#aboutContent");
var contactContent = $("#contactContent")

projectsBtn.click( function () {
    if (projectContent.hasClass("is-hidden")) {
        projectContent.removeClass("is-hidden");
    }
    else {
        projectContent.addClass("is-hidden");
    }
});

aboutBtn.click( function () {
    if (aboutContent.hasClass("is-hidden")) {
        aboutContent.removeClass("is-hidden");
    }
    else {
        aboutContent.addClass("is-hidden");
    }
})

contactBtn.click( function () {
    if (contactContent.hasClass("is-hidden")) {
        contactContent.removeClass("is-hidden");
    }
    else {
        contactContent.addClass("is-hidden");
    }
})