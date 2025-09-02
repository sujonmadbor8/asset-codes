document.addEventListener("DOMContentLoaded", function () {
  // Helper function
  function makeDivClickable(divId, targetUrl, sectionId, storageKey) {
    const container = document.getElementById(divId);

    if (container) {
      container.style.cursor = "pointer";
      container.addEventListener("click", function () {
        // Redirect without showing hash in URL
        window.location.href = targetUrl;
        // Store flag
        sessionStorage.setItem(storageKey, "true");
      });
    }

    // After page load, scroll if flag is set
    if (sessionStorage.getItem(storageKey) === "true") {
      sessionStorage.removeItem(storageKey);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  }

  // Zugreisen
  makeDivClickable(
    "zugreisen_con",
    "https://tim-w.360elevate.co/zugreisen",
    "zugreisen",
    "scrollToZugreisen"
  );

  // Kreuzfahrten
  makeDivClickable(
    "kreuzfahrten_con",
    "https://tim-w.360elevate.co/kreuzfahrten",
    "kreuzfahrten",
    "scrollToKreuzfahrten"
  );
});
