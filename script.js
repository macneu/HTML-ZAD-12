

window.addEventListener("load", (event) => {
    setTimeout(() => {  document.getElementById("first").style.animationName = 'erse_out'; }, 3000);
    setTimeout(() => {  document.getElementById("first").style.display = "none"; document.getElementById("sec").style.display = "block";}, 4000);
  });

function bad() {
    document.getElementById("sec").style.animationName = 'erse_out';
    setTimeout(() => {  document.getElementById("sec").style.display = "none"; document.getElementById("vid").style.display = "block";}, 1000)
}

function marek() {
    document.getElementById("sec").style.animationName = 'erse_out';
    setTimeout(() => {  document.getElementById("sec").style.display = "none"; document.getElementById("vid").style.display = "block";}, 1000)
}

function good() {
    document.getElementById("sec").style.animationName = 'erse_out';
    setTimeout(() => {  document.getElementById("sec").style.display = "none"; document.getElementById("ok").style.display = "block";}, 1000)
    setTimeout(() => {  document.getElementById("ok").style.animationName = 'erse_out';}, 3000)
    setTimeout(() => {  document.getElementById("ok").style.display = "none"; document.getElementById("bye").style.display = "block";}, 4000)
    setTimeout(() => {  close();}, 6000)
}