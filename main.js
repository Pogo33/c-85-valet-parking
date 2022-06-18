canvas= document.getElementById("mycanvas");
ctx= canvas.getContext("2d");

my_Car_width=100;
my_car_height=160;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x=5;
car_y=225;

function add() {
	background_image_tag= new Image();
	background_image_tag.onload= uploadBackground();
	background_image_tag.src= background_image;
	mycar_imgtag= new Image();
	mycar_imgtag.onload=uploadgreencar;
	mycar_imgtag.src= greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(mycar_imgtag,car_x,car_y,my_Car_width,my_car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		if (car_x==655,car_y==95)
		{
			win();
		}
		if(car_x== 1065, car_y==95)
		{
			win();
		}
	}



function up()
{
	if(car_y>=0){
		car_y=car_y-10;
		console.log("when arrow up is pressed,x="+car_x+ "+| y=" + car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if (car_y<=300){
     car_y=car_y+10;
     console.log("when down arrow is pressed,x= "+car_x + "| y=" +car_y);
     uploadBackground();
     uploadgreencar();
	}
}

function left()
{
	if (car_x>=0){
     car_x=car_x-10;
     console.log("when left arrow is pressed,x= "+car_x + "| y=" +car_y);
     uploadBackground();
     uploadgreencar();
	}
}

function right()
{
	if (car_x<=1100){
     car_x=car_x+10;
     console.log("when down arrow is pressed,x= "+car_x + "| y=" +car_y);
     uploadBackground();
     uploadgreencar();
	}
}
function win(){
document.getElementById("status").innerHTML="YAY!YOU DID IT!"
 console.log("Yay! You won");
}
