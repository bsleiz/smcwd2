var hamburgerChange = document.getElementById("getHamb");
var hamburger1= function(){
    
if (hamburgerChange.alt =="hamburger menu toggle button"){
hamburgerChange.src="navbartogwhite.png";
}
}
         
var hamburgerChg = document.getElementById("getHamb");
var hamburger2= function(){
             
if (hamburgerChg.src =="navbartogwhite.png"){
hamburgerChg.src="hamburgerblk.png";
}}

var imgChange1 = document.getElementById("dog1");
var imgChange2 = document.getElementById("dog2");
var imgChange3 = document.getElementById("dog3");
var imgChange4 = document.getElementById("dog4");
var changeImg = document.getElementById("changeimage");
 
var changeImage1 = function(){
if (imgChange1.alt == "labrador"){
    changeImg.src = "lab_puppy_dog.jpg";
}}
var changeImage2 = function(){
if (imgChange2.alt=="pomeranian"){
    changeImg.src ="pomcute.jpg";
}}
var changeImage3 = function(){
if (imgChange3.alt=="terrier"){
    changeImg.src ="terrier.jpeg";
}}
var changeImage4 = function(){
if  (imgChange4.alt =="guide dog"){
    changeImg.src ="whiteguidedog.jpg";
}}


hamburgerChange.addEventListener("click",hamburger1);
hamburgerChg.addEventListener("click",hamburger2);
imgChange1.addEventListener("click",changeImage1);
imgChange2.addEventListener("click",changeImage2);
imgChange3.addEventListener("click",changeImage3);
imgChange4.addEventListener("click",changeImage4);
