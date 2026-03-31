// TYPING
const roles=["Developer","ML Enthusiast","Cybersecurity"];
let i=0,j=0,del=false;

function type(){
  let text=roles[i];
  if(!del){j++; if(j==text.length)del=true;}
  else {j--; if(j==0){del=false;i=(i+1)%roles.length;}}
  document.querySelector(".typing").innerText=text.substring(0,j);
  setTimeout(type,100);
}
type();

// SCROLL
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-100)
      el.classList.add("active");
  });
});

// GITHUB PROJECTS
fetch("https://api.github.com/users/manu-2006/repos")
.then(res=>res.json())
.then(data=>{
  let container=document.getElementById("projects-container");
  data.slice(0,4).forEach(repo=>{
    let div=document.createElement("div");
    div.className="project";
    div.innerHTML=`<h3>${repo.name}</h3><p>${repo.description||""}</p>`;
    container.appendChild(div);
  });
});

// EMAILJS
emailjs.init("dA8wxfUZxcpBV3vRB");

document.getElementById("contact-form").addEventListener("submit",function(e){
  e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE","YOUR_TEMPLATE",this)
  .then(()=>alert("Message Sent"));
});
