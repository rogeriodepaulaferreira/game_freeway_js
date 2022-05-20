function Scenery(background, screenWidth, screenHeight){
    this.background = loadImage(background);
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.sound = loadSound("assets/sounds/trilha.mp3");
}

Scenery.prototype.create = function(){
    background(this.background, this.screenWidth, this.screenHeight);
}

Scenery.prototype.start = function(){
    this.create();
}

Scenery.prototype.startMusic = function(){
    this.sound.loop();
}