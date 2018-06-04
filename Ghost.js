function Ghost(img, x, y, type){
  this.image = img;
  this.posx = x;
  this.posy = y;
  this.type = type;
  this.dir = 2;
  this.changedir = function(){
    if (this.type == 'random'){
      this.dir = randdir();
    }
  };
  this.move = function(){
    if (this.posy == 11 && 9<=this.posx && this.posx<=11){
      this.posy = this.posy -2;
      this.changedir();
    }
    if(this.dir == 1){
      if(Board[(this.posy+1)][this.posx] != 1){
        this.posy = this.posy + 1;
      }else{
        this.changedir();
      }
    }else if (this.dir == 2) {
      if(Board[(this.posy-1)][this.posx] != 1 && Board[(this.posy-1)][this.posx] != 3){
        this.posy = this.posy - 1;
      }else{
        this.changedir();
      }
    }else if (this.dir == 3) {
      if (this.posx>0){
        if(Board[(this.posy)][this.posx-1] != 1){
          this.posx = this.posx - 1;
        }else{
          this.changedir();
        }
      }
    }else if (this.dir == 4) {
      if (this.posx<19){
        if(Board[(this.posy)][this.posx+1] != 1){
          this.posx = this.posx + 1;
        }else{
          this.changedir();
        }
      }
    }
  };
}

function randdir(){
  var rand = Math.random();
  var dir;
  if (rand<0.25){
    dir = 1;
  }else if(0.25<= rand && rand<0.5){
    dir = 2;
  }else if (0.5<= rand && rand<0.75){
    dir = 3;
  }else{
    dir = 4;
  }
  return dir;
}
