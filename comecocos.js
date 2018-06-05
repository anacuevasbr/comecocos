//Variables globales
var Board;
var canvas;
var ctx;
var pixheight;
var pixwidth;
var wallcolor = 'Black';
var backgroundcolor = 'White';
var dot = 'white/comida.png';
var bigdot ='white/comidagrande.png';
var fruits = ['white/cherry.png', 'white/apple.png', 'white/orange.png'];
var img = new Image;
var pacmanimage = 'white/pacman.png';
var Score = 0;
var Blueimg = 'white/blueghost.png';
var Redimg = 'white/redghost.png';
var Orangeimg = 'white/orangeghost.png';
var Pinkimg = 'white/pinkghost.png';
var BlueGhost;
var RedGhost;
var OrangeGhost;
var PinkGhost;
var doorimg = 'white/door.png';
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
      Score = Score + 10;
      document.getElementById("score").innerHTML = Score;
    }else if (Board[(this.posy)][this.posx] == 4) {
      Board[(this.posy)][this.posx] = 0;
      Score = Score + 50;
      document.getElementById("score").innerHTML = Score;
    }else if (Board[(this.posy)][this.posx] > 4) {
      Board[(this.posy)][this.posx] = 0;
      Score = Score + 100;
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
  BlueGhost = new Ghost(Blueimg, 8, 11, 'random', '');
  RedGhost = new Ghost(Redimg, 9, 11, 'target', 'DR');
  OrangeGhost = new Ghost(Orangeimg, 10, 11, 'target', 'DL');
  PinkGhost = new Ghost(Pinkimg, 11, 11, 'target', 'UR');
}
function setcanvas(){
  canvas = document.getElementById("mycanvas");
  ctx = canvas.getContext("2d");
  canvas.height = canvas.width;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function setboard(){
  Board = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
           [5, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2],
           [1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1],
           [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
           [1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1],
           [1, 2, 1, 2, 2, 2, 2, 1, 2, 1, 1, 2, 1, 2, 2, 2, 2, 1, 2, 1],
           [1, 2, 1, 2, 1, 1, 2, 1, 4, 2, 2, 4, 1, 2, 1, 1, 2, 1, 2, 1],
           [1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1],
           [1, 4, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 4, 1],
           [1, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 1],
           [1, 1, 2, 1, 2, 1, 2, 1, 1, 3, 3, 1, 1, 2, 1, 2, 1, 2, 1, 1],
           [1, 1, 2, 1, 2, 1, 2, 1, 0, 0, 0, 0, 1, 2, 1, 2, 1, 2, 1, 1],
           [1, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 2, 1, 1],
           [1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1],
           [2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2],
           [1, 1, 2, 2, 2, 1, 4, 1, 2, 1, 1, 2, 1, 4, 1, 2, 2, 2, 1, 1],
           [1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1],
           [1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1],
           [1, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 1],
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

      }else if (j == PinkGhost.posx && i == PinkGhost.posy) {
        img.src= PinkGhost.image;
        ctx.drawImage(img, 0, 0, 600, 600, xpos, ypos, pixwidth,pixheight);

      }else if (j == OrangeGhost.posx && i == OrangeGhost.posy) {
        img.src= OrangeGhost.image;
        ctx.drawImage(img, 0, 0, 600, 600, xpos, ypos, pixwidth,pixheight);

      }else if (j == RedGhost.posx && i == RedGhost.posy) {
        img.src= RedGhost.image;
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
        }else if(line[j] == 4){
          img.src= bigdot;
          ctx.fillStyle= backgroundcolor;
          ctx.drawImage(img, 0, 0, 500, 500, xpos, ypos, pixwidth,pixheight);
        }else if(line[j] == 5){
          img.src= fruits[0];
          ctx.fillStyle= backgroundcolor;
          ctx.drawImage(img, 0, 0, 650, 650, xpos, ypos, pixwidth,pixheight);
        }else if(line[j] == 6){
          img.src= fruits[1];
          ctx.fillStyle= backgroundcolor;
          ctx.drawImage(img, 0, 0, 650, 650, xpos, ypos, pixwidth,pixheight);
        }else if(line[j] == 7){
          img.src= fruits[2];
          ctx.fillStyle= backgroundcolor;
          ctx.drawImage(img, 0, 0, 650, 650, xpos, ypos, pixwidth,pixheight);
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
  var blueeats = pacman.posx == BlueGhost.posx && pacman.posy ==BlueGhost.posy;
  var redeats = pacman.posx == RedGhost.posx && pacman.posy ==RedGhost.posy;
  var orangeeats = pacman.posx == OrangeGhost.posx && pacman.posy ==OrangeGhost.posy;
  var pinkeats = pacman.posx == PinkGhost.posx && pacman.posy ==PinkGhost.posy;
  var i = 0;
  var win = true;
  var line;

  if (blueeats || redeats || orangeeats || pinkeats){
    Lives = Lives-1;
  }

  for(i = 0;i < Board.length; i++){
    line = Board[i];

    for(j = 0; j<Board.length;j++){
      if (line[j] ==2 || line[j]>=4){
        win = false;
      }
    }
  }
  console.log(win);
  if (Lives == 0){
    return 'Lose';
  }else if (win) {
    return 'win';

  }else{
    return 'continue';
  }
}


function play(){
  var situation = 'continue';
  window.addEventListener('keydown', function(event) { pacman.changedir(event.key); });
  pacman.move();
  BlueGhost.move();
  RedGhost.changedir();
  RedGhost.move();
  OrangeGhost.changedir();
  OrangeGhost.move();
  PinkGhost.changedir();
  PinkGhost.move();
  draw();
  situation = checkscore();
  if (situation =='continue'){
    setTimeout(function(){
      requestAnimationFrame(play);},1000/7);
  }else if (situation =='win') {
    console.log('congratulations')

  }else{
    console.log('game over');
  }
}
