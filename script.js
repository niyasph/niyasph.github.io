const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
console.log("Ham burger menu clicked");

  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

/* Close menu when clicking a link */
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Faed-up animation on scroll
const reveals = document.querySelectorAll(".fade-up");

function reveal() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Text rotator Animation
document.querySelectorAll(".text-rotator").forEach(rotator => {

  const words = rotator.querySelectorAll("span");
  let index = 0;

  function rotateText() {

    words[index].classList.remove("active");

    index = (index + 1) % words.length;

    words[index].classList.add("active");

    setTimeout(rotateText, 2500); 
  }

  setTimeout(rotateText, 2500);

});

// Counter animation
const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  const suffix = counter.getAttribute("data-suffix") || "";
  let count = 0;
  const duration = 2000;
  const increment = target / (duration / 16);

  const updateCounter = () => {
    count += increment;

    if (count < target) {
      counter.innerText = Math.ceil(count) + suffix;
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target + suffix;
    }
  };

  updateCounter();
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

counters.forEach(counter => observer.observe(counter));

// About section animations
const aboutOberver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".about-image, .about-content")
.forEach((el)=>aboutOberver.observe(el));