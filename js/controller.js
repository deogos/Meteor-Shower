/* 
const KEY_CODE =
{
	W:87,
	S:83,
	A:65,
	D:68,
}

document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyReleased);
var controls =
{
	slow: false,
	fast: false,
	left: false,
	right:false,
	isRight:true,
}

turnRight()
{
    if(!isRight)
	{
	
	}
}

turnLeft()
{
	if(isRight)
	{
        
	}
}

accelerate()
{

}

decelerate()
{

}

function keyPressed(evt)
{
	switch(evt.keyCode)
	{
		case KEY_CODE.W:
			controls.slow = true;
			break;
		case KEY_CODE.S:
			controls.fast = true;
			break;
		case KEY_CODE.A:
			controls.left = true;
			break;
		case KEY_CODE.D:
			controls.right = true;
			break;
	}
}

function keyReleased(evt)
{
	switch(evt.keyCode)
	{
		case KEY_CODE.W:
			controls.slow = false;
			break;
		case KEY_CODE.S:
			controls.fast = false;
			break;
		case KEY_CODE.A:
			controls.left = false;
			break;
		case KEY_CODE.D:
			controls.right = false;
			break;
	}
}
*/