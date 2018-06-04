//Variables globales
var Board;
var canvas;
var ctx;
var pixheight;
var pixwidth;
var wallcolor = 'Black';
var backgroundcolor = 'White';
var dot = 'comida.png';
var img = new Image;
var pacmanimage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pacman.lxset.svg/768px-Pacman.lxset.svg.png';
var Score = 0;
var Blueimg = 'blueghost.png';
var BlueGhost;
var doorimg = 'door.png';
var Lives = 3;
//Programa principal

function startpacman(){
  setcanvas();
  setboard();
  setghosts();
  draw();
  play();

}

var pacman ={
  image: pacmanimage,
  posy: 13,
  posx: 10,
  dir: 0,
  changedir: function(event){
    if(event == "ArrowDown"){
      if(Board[(this.posy+1)][this.posx] != 1){
        this.dir = 1;}
    }else if (event == "ArrowUp") {
      if(Board[(this.posy-1)][this.posx] != 1){
        this.dir = 2;}
    }else if (event == "ArrowLeft") {
      if(Board[(this.posy)][this.posx-1] != 1){
        this.dir = 3;}
    }else if (event == "ArrowRight") {
      if(Board[(this.posy)][this.posx+1] != 1){
        this.dir = 4;}
    }
  },
  eat: function(){
    if(Board[(this.posy)][this.posx] == 2){
      Board[(this.posy)][this.posx] = 0;
      Score = Score + 1;
      document.getElementById("score").innerHTML = Score;
    }
  },
  move: function(){
    if(this.dir == 1){
      if(Board[(this.posy+1)][this.posx] != 1){
        this.posy = this.posy + 1;
        this.eat();
      }
    }else if (this.dir == 2) {
      if(Board[(this.posy-1)][this.posx] != 1){
        this.posy = this.posy - 1;
        this.eat();
      }
    }else if (this.dir == 3) {
      if (this.posx>0){
        if(Board[(this.posy)][this.posx-1] != 1){
          this.posx = this.posx - 1;
          this.eat();
        }
      }
    }else if (this.dir == 4) {
      if (this.posx<19){
        if(Board[(this.posy)][this.posx+1] != 1){
          this.posx = this.posx + 1;
          this.eat();
        }
      }
    }
  }
};


function setghosts(){
  BlueGhost = new Ghost(Blueimg, 8, 11, 'random');
}
function setcanvas(){
  canvas = document.getElementById("mycanvas");
  ctx = canvas.getContext("2d");
  canvas.height = canvas.width;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function setboard(){
  Board = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
           [2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2],
           [1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1],
           [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
           [1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1],
           [1, 2, 1, 2, 2, 2, 2, 1, 2, 1, 1, 2, 1, 2, 2, 2, 2, 1, 2, 1],
           [1, 2, 1, 2, 1, 1, 2, 1, 2, 2, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1],
           [1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1],
           [1, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 1],
           [1, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 1],
           [1, 1, 2, 1, 2, 1, 2, 1, 1, 3, 3, 1, 1, 2, 1, 2, 1, 2, 1, 1],
           [1, 1, 2, 1, 2, 1, 2, 1, 0, 0, 0, 0, 1, 2, 1, 2, 1, 2, 1, 1],
           [1, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 2, 1, 1],
           [1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1],
           [2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2],
           [1, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 1],
           [1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1],
           [1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1],
           [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
           [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

  pixwidth = canvas.width/Board.length;
  pixheight = canvas.height/Board.length;
}

function draw(){

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var i;
  var xpos = 0;
  var ypos = 0;

  for(i = 0;i < Board.length; i++){
    line = Board[i];

    for(j = 0; j<Board.length;j++){

      if (j == pacman.posx && i == pacman.posy){
        img.src= pacman.image;
        ctx.drawImage(img, 0, 0, 768, 768, xpos, ypos, pixwidth,pixheight);
      }else if (j == BlueGhost.posx && i == BlueGhost.posy) {
        img.src= BlueGhost.image;
        ctx.drawImage(img, 0, 0, 600, 600, xpos, ypos, pixwidth,pixheight);

      }else{
        if (line[j] == 0){
          ctx.fillStyle= backgroundcolor;
          ctx.fillRect(xpos, ypos, pixwidth, pixheight);
        }else if(line[j] == 2){
          img.src= dot;
          ctx.fillStyle= backgroundcolor;
          ctx.drawImage(img, 0, 0, 256, 256, xpos, ypos, pixwidth,pixheight);
        }else if(line[j] == 3){
          img.src= doorimg;
          ctx.fillStyle= backgroundcolor;
          ctx.drawImage(img, 0, 0, 300, 300, xpos, ypos, pixwidth,pixheight);
        }else{
          ctx.fillStyle= wallcolor;
          ctx.fillRect(xpos, ypos, pixwidth, pixheight);
        }
      }
      xpos += pixwidth;

    }
    xpos = 0;
    ypos += pixheight;
    }


}

function checkscore(){
  console.log(Lives);
  blueeats = pacman.posx == BlueGhost.posx && pacman.posy ==BlueGhost.posy;
  if (blueeats){
    Lives = Lives-1;
  }
  if (Lives == 0){
    return 'Lose';
  }else{
    return 'continue';
  }
}


function play(){
  var situation = 'continue';
  window.addEventListener('keydown', function(event) { pacman.changedir(event.key); });
  pacman.move();
  BlueGhost.move();
  draw();
  situation = checkscore();
  if (situation =='continue'){
  setTimeout(function(){
    requestAnimationFrame(play);},1000/8);
  }else{
    console.log('game over');
  }
}
