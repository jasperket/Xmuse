$(document).ready(function () {
  $(".product-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  });
});

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

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const leftDeer = document.getElementById("leftDeer");
  const rightDeer = document.getElementById("rightDeer");
  const body = document.querySelector("body");
  const trees = document.querySelectorAll(".trees-container");

  const position = scrollPosition * 1.5;

  leftDeer.style.transform = `translate(-${position}px, -${position}px)`;
  rightDeer.style.transform = `translate(${position}px, -${position}px)`;

  const backgroundPosition = scrollPosition * 3;
  body.style.backgroundPosition = `0 ${backgroundPosition}px`;

  trees.forEach((tree) => {
    const treePosition = scrollPosition * 1.5;
    tree.style.transform = `translateX(-${treePosition}px)`;
    const width = tree.offsetWidth + treePosition;
    tree.style.width = `${width}px`;
  });
});

const contactImgs = document.querySelectorAll(".contact-item img");

contactImgs.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    const currSrc = img.src;
    img.src = currSrc.replace("01", "02");
  });
  img.addEventListener("mouseleave", () => {
    const currSrc = img.src;
    img.src = currSrc.replace("02", "01");
  });
});

const socialIcons = document.querySelectorAll(".social-icons img");

socialIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    const currSrc = icon.src;
    icon.src = currSrc.replace("01", "02");
  });
  icon.addEventListener("mouseleave", () => {
    const currSrc = icon.src;
    icon.src = currSrc.replace("02", "01");
  });
});

let resizeTimer;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    location.reload();
  }, 250);
});
