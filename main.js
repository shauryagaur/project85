//Create a reference for canvas
canvas=document.getElementById("myCanvas") 

//Give specific height and width to the car image
greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_X=5;
greencar_y=225;

function add() {
	background_imgtag=new Image();
	background_imgtag.onload=uploadBackground
	background_imgtag.src=background_image;

	background_imgtag=new Image();
	background_imgtag.onload=uploadgreencar
	background_imgtag.src=greencar_image;
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’
	ctx.drawImage(greencar_imgtag,greencar_X,greencar_y,greencar_width,greenvar_height)
	
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
		
		
}

function up()
{
	//Define function to move the car upward
if(greencar_y >=0){
	greencar_y=greencar_y-10
	console.log("when up arrow is pressed, x = " + greencar_X + " y =" + greencar_y)
	uploadBackground();
	uploadgreencar();
}

}

function down()
{
	//Define function to move the car downward
	if(greencar_y <=300){
		greencar_y=greencar_y+10
		console.log("when up arrow is pressed, x = " + greencar_X + " y =" + greencar_y)
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side

	if(greencar_X >=0){
		greencar_X=greencar_X-10
		console.log("when up arrow is pressed, y = " + greencar_y + " x =" + greencar_X)
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(greencar_X <=725){
		greencar_X=greencar_X+10
		console.log("when up arrow is pressed, y = " + greencar_y + " x =" + greencar_X)
		uploadBackground();
		uploadgreencar();
	}
}
