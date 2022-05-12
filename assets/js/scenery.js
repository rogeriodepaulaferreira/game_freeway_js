function Scenery(background, screenWidth, screenHeight){
    this.background = loadImage(background);
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
}

Scenery.prototype.create = function(){
    background(this.background);
}

Scenery.prototype.start = function(){
    this.create();
}