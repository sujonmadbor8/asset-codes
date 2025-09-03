document.addEventListener("DOMContentLoaded", function () {
  // Loop through each loop item
  document.querySelectorAll(".e-loop-item.use-case").forEach(function (item) {
    const videoDiv = item.querySelector("#use_case_video");
    const imgDiv = item.querySelector("#use_case_img");

    if (videoDiv) {
      // Check if background video or iframe exists inside video container
      const hasIframe = videoDiv.querySelector("iframe");
      const hasVideo = videoDiv.querySelector("video");
      const bgLink = videoDiv
        .getAttribute("data-settings")
        ?.includes("background_video_link");

      if ((hasIframe && hasIframe.src.trim() !== "") || hasVideo || bgLink) {
        // ✅ Video found → hide image
        if (imgDiv) imgDiv.style.display = "none";
        videoDiv.style.display = "block";
      } else {
        // ❌ No video → hide video, show image
        videoDiv.style.display = "none";
        if (imgDiv) imgDiv.style.display = "block";
      }
    }
  });
});
