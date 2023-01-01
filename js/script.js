// hamburger 
const hamburger=document.querySelector(".hamburger");
const navmenu=document.querySelector(".nav-menu");
const slider=document.querySelector(".marginresponsive")
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
    slider.classList.toggle("slidebottom");

})
document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
    slider.classList.remove("slidebottom");


}))
// slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000);
}
// placement
let placeindex=0;
showplace();
function showplace(){
  let i;
  let placeyear=document.getElementsByClassName("placeyear");
  for (i = 0; i < placeyear.length; i++) {
    placeyear[i].style.display = "none";
  }
  placeindex++;
  if (placeindex > placeyear.length) {placeindex = 1}
  placeyear[placeindex-1].style.display = "block";
  setTimeout(showplace, 4000);

}
