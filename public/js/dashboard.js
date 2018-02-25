$(document).ready(function() {
  $(".button-collapse").sideNav();
  $("#fullpage").fullpage({
    //Navigation
    anchors: [
      "intro-section",
      "fin-section",
      "env-section",
      "health-section",
      "rewards-section"
    ],
    menu: "#breadcrumb-nav",

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    // autoScrolling: false,
    // fitToSection: true,
    fitToSectionDelay: 1000,
    easing: "easeInOutCubic",
    easingcss3: "ease",
    loopBottom: true,
    scrollOverflow: true,
    bigSectionsDestination: top,
    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
    responsiveHeight: '100vh',

    //Design
    lazyLoading: true
  });

  $(".icon-block").on("click", function(e) {
    $(this)
      .find("p")
      .toggleClass("invisible");
  });
});
