// option - 1
// redirect page

jQuery(document).ready(function ($) {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("e-filter-7ff4067-project-category");

  if (category) {
    // Wait a bit in case Elementor loads filters with delay
    setTimeout(function () {
      $(
        '.elementor-widget-taxonomy-filter button[data-filter="' +
          category +
          '"]'
      ).trigger("click");
    }, 500);
  }
});

// option - 2
// 	redirect page also section

jQuery(document).ready(function ($) {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("e-filter-7ff4067-project-category");

  if (category) {
    // Wait until Elementor loads filters
    setTimeout(function () {
      // Trigger the filter
      $(
        '.elementor-widget-taxonomy-filter button[data-filter="' +
          category +
          '"]'
      ).trigger("click");

      // Scroll to the section
      $("html, body").animate(
        {
          scrollTop: $("#our_completed_projects").offset().top,
        },
        800
      ); // 800ms = smooth scroll
    }, 500);
  }
});
