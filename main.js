const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

width = parseInt(prompt("Bitte gib die Breite des Canvas ein:"));
if (width > canvas.width)
{
	width = canvas.width;
    alert("Die Breite (Width) kann nicht größer als " + canvas.width + " px sein. Setze Wert auf " +  canvas.width + " px...");
}

height = parseInt(prompt("Bitte gib die Höhe (Height) des Canvas ein:"));
if (height > canvas.height)
{
	height = canvas.height;
	alert("Die Breite (Width) kann nicht größer als " + canvas.height + " px sein. Setze Wert auf " +  canvas.height + " px...");
}

pixel = parseInt(prompt("Bitte gib den Abstand zwischen den Markierungen (in Pixel) ein:"));

function drawCoordSystem(width, height, pixel) {
	context.strokeStyle = 'black';
	
	// x - Achse
	context.moveTo(0, height / 2);
	context.lineTo(width, height / 2);

	// Pfeil links
	context.moveTo(0, height / 2);
	context.lineTo(10, height / 2 - 5);
	context.moveTo(0, height / 2);
	context.lineTo(10, height / 2 + 5);
	

	// Pfeil rechts
	context.moveTo(width, height / 2);
	context.lineTo(width - 10, height / 2 - 5);
	context.moveTo(width, height / 2);
	context.lineTo(width - 10, height / 2 + 5);
	

	// y -Achse

	context.moveTo(width / 2, 0);
	context.lineTo(width / 2, height);

	// Pfeil oben
	context.moveTo(width / 2, 0);
	context.lineTo(width / 2 - 5, 10) 
	context.moveTo(width / 2, 0);
	context.lineTo(width / 2 + 5, 10);

	// Pfeil unten
	context.moveTo(width / 2, height);
	context.lineTo(width / 2 - 5, height - 10)
	context.moveTo(width / 2, height);
	context.lineTo(width / 2 + 5, height - 10);


	// Achsenbeschriftungen
    context.font = "12px Arial";
    context.fillText("X", width - 10, height / 2 - 10);
    context.fillText("Y", width / 2 + 10, 10);


    // Markierungen auf der x-Achse
	var xMark = [];
	var xNum = 0;

	
    for (let x = pixel; x < width; x = x +  pixel) {
        context.moveTo(x, height / 2 - 5);
        context.lineTo(x, height / 2 + 5);
		if (x <= width / 2)
		{
			xMark[xNum] = x;
			xNum++;
		}
		
    }
	
	/* Debbuging: X-Achse Markierungen
	for (debX = 0; debX < xMark.length; debX++)
	console.log("X: "+(debX+1) + ": " + xMark[xNum]);
	*/
	
	var yMark = [];
	var yNum = 0;
	
	for (let y = pixel; y < width ; y = y +  pixel) {
        context.moveTo(width / 2 - 5, y);
        context.lineTo(width / 2 + 5, y);
		if (y <= height / 2)
		{
			yMark[yNum] = y;
			yNum++;
		}
    }
	
	/* Debbuging: Y-Achse Markierungen
	for (debY = 0; debY < xMark.length; debY++)
	console.log("Y: "+(debY+1) + ": " + yMark[debY]);
	*/
	

	context.stroke();

	return { xMark, yMark };

}	

function star(xMark, yMark)
{
	context.strokeStyle = 'yellow';
	context.lineWidth = "0.4";

	for(i = 0; i < width; i++){
		context.moveTo(width / 2, 0 + yMark[i]);
		context.lineTo(width / 2 + xMark[i], height / 2);
		context.moveTo(width / 2, 0 + yMark[i]);
		context.lineTo(width / 2 - xMark[i], height / 2);
			
		context.moveTo(width / 2, height - yMark[i]);
		context.lineTo(width / 2 + xMark[i], height / 2);
		context.moveTo(width / 2, height - yMark[i]);
		context.lineTo(width / 2 - xMark[i], height / 2);
	
	}
	
	context.stroke();

}

function output(width, height, pixel)
{
	var { xMark, yMark } = drawCoordSystem(width, height, pixel);
	star(xMark,yMark);
}

output(width, height, pixel);	


