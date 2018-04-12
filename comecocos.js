//Variables globales
var Board;
var canvas;
var ctx;
var pixheight;
var pixwidth;
var wallcolor = 'Black';
var backgroundcolor = 'White';
var dot = 'yellowdot.jpg';

//Programa principal

function startpacman(){
  setcanvas();
  setboard();
  draw();
}

function setcanvas(){
  canvas = document.getElementById("mycanvas");
  ctx = canvas.getContext("2d");
  canvas.height = canvas.width;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function setboard(){
  Board = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

  pixwidth = canvas.width/Board.length;
  pixheight = canvas.height/Board.length;
}

function draw(){
  console.log(Board);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var i;
  var xpos = 0;
  var ypos = 0;

  for(i = 0;i < Board.length; i++){
    line = Board[i];

    for(j = 0; j<Board.length;j++){
      console.log(line[j]);
      line[j]=2;
      if (line[j] == 0){
        ctx.fillStyle= backgroundcolor;
        ctx.fillRect(xpos, ypos, pixwidth, pixheight);
      }else if(line[j] == 2){
        //var img = new Image();   // Create new img element
        //img.src = dot;
        //ctx.drawImage(img, 0, 0, 640, 640, xpos, ypos, pixwidth,pixheight);
        ctx.fillRect(xpos, ypos, pixwidth, pixheight);
      }else{
        ctx.fillStyle= wallcolor;
        ctx.fillRect(xpos, ypos, pixwidth, pixheight);
      }
      xpos += pixwidth;

    }
    xpos = 0;
    ypos += pixheight;
    }

}
