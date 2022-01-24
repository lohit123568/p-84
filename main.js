Canvas = document.getElementById('myCanvas');
ctx = Canvas.getContext("2d")

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;  
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
  if((keyPressed >=97 && keyPressed<=122)||( keyPressed>=65 && keyPressed<=90)){
	Aplhabetkey();
	document.getElementById("d1").innerHTML="YOU HAVE PRESSED APLHABET KEY";
  }
  
  else{
	  otherkey();
	  document.getElementById("d1").innerHTML="YOU HAVE PRESSED SPECIAL OR OTHER KEY"
	  console.log("other key")
  }

  if((keyPressed >=48 && keyPressed<=57)){
	Numberkey();
	document.getElementById("d1").innerHTML="YOU HAVE PRESSED NUMBER KEY";
  }

  if((keyPressed >=37 && keyPressed<=40)){
	Arrowkey();
	document.getElementById("d1").innerHTML="YOU HAVE PRESSED ARROW KEY";
  }
  if(keyPressed ==17 ){
	Specialkey();
	document.getElementById("d1").innerHTML="YOU HAVE PRESSED SPECIAL KEY";
  }
  if(keyPressed ==18 ){
	Specialkey();
	document.getElementById("d1").innerHTML="YOU HAVE PRESSED SPECIAL KEY";
  }
  if(keyPressed ==27 ){
	Specialkey();
	document.getElementById("d1").innerHTML="YOU HAVE PRESSED SPECIAL KEY";
  }

}
function Aplhabetkey()
{
	img_image="Alpkey.png";
	add();

}
function Numberkey()
{
	img_image="numkey.png";
	add();
}
function Arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function Specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey(){
	img_image="otherkey.png";
add();
}