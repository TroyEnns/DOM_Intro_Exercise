//1. Change the greeting from "Hello, There!" to "Hello, World!".
 
var greeting = document.getElementById('greeting');
greeting.innerText = "Hello World!";

//2. Set the background color of each `<li>` to `yellow`.
var allLis = document.getElementsByTagName('li');
for(i=0;i<allLis.length;i++){
	allLis[i].style.backgroundColor="yellow";
}

//3. Create an image tag, set its `src` attribute to `http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`, 
//and append the to the `#greeting` div.
var image = document.createElement("img");
image.setAttribute("src","http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
greeting.appendChild(image);


//4. Add the class of `selected` to an `<li>` when it is clicked.
//Remove it from any other `li`s as well.
//5. Change the image to be the most recently clicked food item.
function resetLis(){
    for (i = 0;i < allLis.length; i++){
    allLis[i].className = "";
  }
}

document.getElementById('essentials').addEventListener("click", function(){
  resetLis();
  event.target.className = "selected";
  document.images[1].src = "images/" + event.target.innerText + ".jpeg";
});

//6. When the gray div is moused over, it's removed from the DOM.
var hideMe=document.getElementById("ghosting");
function hide(e) {
	e.target.style.visibility = 'hidden';
}
hideMe.addEventListener('mouseenter', hide);

//When the orange div is moused over, its width doubles.
var orange=document.getElementById("resize");
var orangeOriginal=orange.scrollWidth+"px";
var orangeBigger=orange.scrollWidth*2+"px";

function bigger(e){
	e.target.style.width=orangeBigger;
}
resize.addEventListener('mouseenter',bigger);
//When the mouse moves out of the div, it returns to its original size.
function small(e){
	e.target.style.width=orangeOriginal;
}
resize.addEventListener('mouseleave',small);

//When the reset button is clicked - 
//remove the `selected` class from each 
//`<li>` and change the image to `panic.jpeg`.

var reset = document.getElementById("reset");

reset.addEventListener("click",function(){
  resetLis();
  document.images[1].src="images/panic.jpeg";
});

//When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is 
//pressed, the page alerts the message "I HATE NUMBERZZZ!"

document.addEventListener('keydown', function(event) {
  if (event.which === 48, 49, 50, 51, 52, 53, 54, 55, 56, 57) {
    alert("I HATE NUMBERZZZ!");
  }
});



