$(document).ready(function () {
  $(".product-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  });
});

// Navbar hover effect
document.querySelectorAll(".nav-item").forEach((item) => {
  const wrapper = item.querySelector(".nav-circle-wrapper");
  const text = item.querySelector(".nav-text");
  let isHovering = false;

  wrapper.addEventListener("mouseenter", () => {
    isHovering = true;
    text.style.opacity = "1";
    text.style.pointerEvents = "auto";
  });

  item.addEventListener("mouseleave", () => {
    isHovering = false;
    setTimeout(() => {
      if (!isHovering) {
        text.style.opacity = "0";
        text.style.pointerEvents = "none";
      }
    }, 100);
  });

  text.addEventListener("mouseenter", () => {
    isHovering = true;
  });

  text.addEventListener("mouseleave", () => {
    isHovering = false;
    text.style.opacity = "0";
    text.style.pointerEvents = "none";
  });

  // Add click event listener for smooth scrolling
  text.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = text.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
