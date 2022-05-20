function Character(image,positionX,positionY,width,height,speedY,scenery,score){
    this.character = loadImage(image);
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.speedY = speedY;
    this.scenery = scenery;
    this.score = score;

    this.rightFace = this.positionX + this.width;
    this.leftFace = this.positionX;
    this.upperFace = this.positionY;
    this.bottomFace = this.positionY + this.height;
}

Character.prototype.positionUpdate = function(){
    this.rightFace = this.positionX + this.width;
    this.leftFace = this.positionX;
    this.upperFace = this.positionY;
    this.bottomFace = this.positionY + this.height;
}

Character.prototype.create = function(){
    image(this.character,this.positionX,this.positionY,this.width,this.height);
}

Character.prototype.checkEndScreen = function(){
    if (this.upperFace <= 0){
        this.positionY = 0;
    }
    if (this.bottomFace >= this.scenery.screenHeight){
        this.positionY = this.scenery.screenHeight - this.height
    }
}

Character.prototype.controls = function(){
    if (keyIsDown(UP_ARROW)){
        this.positionY -= this.speedY;
    }
    if (keyIsDown(DOWN_ARROW)){
        this.positionY += this.speedY;
    }
    this.positionUpdate();
    this.checkEndScreen();
    this.checkScore();
}

Character.prototype.start = function(){
    this.create();
    this.controls();
}

Character.prototype.restart = function(){
    this.positionY = this.scenery.screenHeight - this.height;
}

Character.prototype.checkScore = function(){
    if (this.upperFace < 20){
        this.score.scorePoint();
        this.restart();
    }
}