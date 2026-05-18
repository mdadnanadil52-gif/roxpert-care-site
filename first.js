// FIREBASE CONFIG

const firebaseConfig = {

  apiKey: "AIzaSyC6WfNEkOxKt60ms6AEvoMHjYxWCiMJTBk",

  authDomain: "roxpert-care.firebaseapp.com",

  databaseURL:
  "https://roxpert-care-default-rtdb.firebaseio.com",

  projectId: "roxpert-care",

  storageBucket:
  "roxpert-care.firebasestorage.app",

  messagingSenderId: "791241297789",

  appId:
  "1:791241297789:web:7f8ad80c79d36a40e38614",

  measurementId: "G-Y96FNDX5SH"

};


// INITIALIZE FIREBASE

firebase.initializeApp(firebaseConfig);


// DATABASE

const database =
firebase.database();
// =========================
// ROXpert Care JavaScript
// =========================


// FORM SUBMIT

const form =
document.querySelector("form");

form.addEventListener("submit", function(e){

  e.preventDefault();

  const name =
  document.querySelector(
    'input[placeholder="Your Name"]'
  ).value;

  const number =
  document.querySelector(
    'input[placeholder="Mobile Number"]'
  ).value;

  const address =
  document.querySelector(
    'input[placeholder="Your Address"]'
  ).value;

  const brand =
  document.querySelector(
    'input[placeholder="RO Brand"]'
  ).value;

  const problem =
  document.querySelector(
    "textarea"
  ).value;


  database.ref("complaints").push({

    name:name,

    number:number,

    address:address,

    brand:brand,

    problem:problem

  });


  alert("Complaint Submitted!");

  form.reset();

});

// SMOOTH SCROLL

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

  link.addEventListener("click", function(e){

    e.preventDefault();

    const target =
    document.querySelector(
      this.getAttribute("href")
    );

    target.scrollIntoView({

      behavior:"smooth"

    });

  });

});


// HEADER SHADOW ON SCROLL

window.addEventListener("scroll", function(){

  const header =
  document.querySelector("header");

  header.classList.toggle(

    "sticky",

    window.scrollY > 0

  );

});


// SCROLL ANIMATION

const cards =
document.querySelectorAll(

  ".service-card, .tech-card"

);

window.addEventListener("scroll", function(){

  cards.forEach(card => {

    const cardTop =
    card.getBoundingClientRect().top;

    const screenHeight =
    window.innerHeight;

    if(cardTop < screenHeight - 100){

      card.classList.add("show");

    }

  });

});
// HERO BACKGROUND SLIDER

const hero =
document.querySelector(".hero");

const images = [

  "ro-service.png",

  "ro-repair.png",

  "ro-installation.png"

];

let current = 0;

function changeBackground(){

  hero.style.backgroundImage =

  `url(${images[current]})`;

  current++;

  if(current >= images.length){

    current = 0;
  }

}

changeBackground();

setInterval(changeBackground, 3000);
// LOADER DELAY

window.addEventListener("load", () => {

  const loader =
  document.getElementById("loader");

  setTimeout(() => {

    loader.style.display = "none";

  }, 2000);

});
