$(document).ready(function() {
  $(".button-collapse").sideNav();
  $("#fullpage").fullpage({
    //Navigation

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
});
