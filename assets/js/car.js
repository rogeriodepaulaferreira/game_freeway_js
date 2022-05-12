function Car(image, positionX, positionY, width, height, speedX, scenery, character){
    this.background = loadImage(image);
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.speedX = speedX;
    this.scenery = scenery;
    this.character = character;

    this.rightFace = this.positionX + this.width;
    this.leftFace = this.positionX;
    this.upperFace = this.positionY;
    this.bottomFace = this.positionY + this.height;
}

Car.prototype.positionUpdate = function(){
    this.rightFace = this.positionX + this.width;
    this.leftFace = this.positionX;
    this.upperFace = this.positionY;
    this.bottomFace = this.positionY + this.height;
}

Car.prototype.checkEndScreen = function(){
    if(this.rightFace <= 0 ){
        this.positionX = this.scenery.screenWidth;
    }
}

Car.prototype.checkColisao = function(){
    if (this.upperFace < this.character.bottomFace && this.bottomFace > this.character.upperFace ){
        if (this.leftFace <= this.character.rightFace && this.rightFace >= this.character.leftFace){
            this.character.restart();
        }
    }
}

Car.prototype.create = function(){
    image(this.background,this.positionX,this.positionY,this.width,this.height);
}

Car.prototype.move = function(){
    this.positionX -= this.speedX;
    this.positionUpdate();
    this.checkEndScreen();
    this.checkColisao();
}

Car.prototype.start = function(){
    this.create();
    this.move();
}