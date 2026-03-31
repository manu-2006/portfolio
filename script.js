const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});
// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

// TYPING EFFECT
const text = ["Aspiring Developer", "ML Enthusiast", "Cybersecurity Learner"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = text[i];
  
  if (!isDeleting) {
    j++;
    if (j === current.length) isDeleting = true;
  } else {
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  document.querySelector(".typing").textContent = current.substring(0, j);
  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// PARTICLES CONFIG
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true, color: "#00eaff" }
  }
});
