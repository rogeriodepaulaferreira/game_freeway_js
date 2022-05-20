function Score(start,backgroud){
    this.points = start;
    this.backgroud = backgroud;
    this.sound = loadSound("assets/sounds/pontos.wav");
}
Score.prototype.create = function(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255,240,60));
    text(this.points, this.backgroud.screenWidth / 5, 27);
}

Score.prototype.start = function(){
    this.create();
}

Score.prototype.removePoint = function(){
    if (this.points > 0) this.points --;
}

Score.prototype.scorePoint = function(){
    this.points ++;
    this.sound.play();
}