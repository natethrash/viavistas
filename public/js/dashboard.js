$(document).ready(function() {
  $(".button-collapse").sideNav();
  $("#fullpage").fullpage({
    //Navigation
    anchors: [
      "fin-section",
      "env-section",
      "health-section",
      "rewards-section"
    ],
    menu: "#breadcrumb-nav",

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    easing: "easeInOutCubic",
    easingcss3: "ease",
    loopBottom: true,
    loopTop: true,
    loopHorizontal: true,
    continuousVertical: true,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    lazyLoading: true
  });

  $(".icon-block").on("click", function(e) {
    $(this)
      .find("p")
      .toggleClass("invisible");
  });
});
