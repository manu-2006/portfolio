// SCROLL ANIMATION
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// TYPING
const roles = ["Aspiring Developer","ML Enthusiast","Cybersecurity Learner"];
let i=0,j=0,current="",del=false;

function type(){
  current = roles[i];

  if(!del){
    j++;
    if(j==current.length) del=true;
  } else {
    j--;
    if(j==0){ del=false; i=(i+1)%roles.length;}
  }

  document.querySelector(".typing").innerText = current.substring(0,j);
  setTimeout(type, del?50:100);
}
type();

// PARTICLES
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    line_linked: { enable: true, color: "#00eaff" }
  }
});

// 3D TILT EFFECT
document.querySelectorAll(".tilt").forEach(card=>{
  card.addEventListener("mousemove", e=>{
    let x = e.offsetX;
    let y = e.offsetY;
    card.style.transform = `rotateY(${x/20}deg) rotateX(${y/20}deg)`;
  });
  card.addEventListener("mouseleave", ()=>{
    card.style.transform = "rotate(0)";
  });
});
