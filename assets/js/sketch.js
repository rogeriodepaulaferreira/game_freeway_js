let scenery;
let character;
let score;
const path = 'assets/images/';
let carros = [{
  'imagem':path+'carro-1.png',
  'posicaoX':450,
  'posicaoY':40,
  'largura':50,
  'altura':40,
  'velocidade':2,
  'instancia':''
},{
  'imagem':path+'carro-2.png',
  'posicaoX':450,
  'posicaoY':96,
  'largura':50,
  'altura':40,
  'velocidade':3.2,
  'instancia':''
},{
  'imagem':path+'carro-3.png',
  'posicaoX':450,
  'posicaoY':150,
  'largura':50,
  'altura':40,
  'velocidade':2.5,
  'instancia':''
},{
  'imagem':path+'carro-2.png',
  'posicaoX':450,
  'posicaoY':210,
  'largura':50,
  'altura':40,
  'velocidade':3.9,
  'instancia':''
},{
  'imagem':path+'carro-1.png',
  'posicaoX':450,
  'posicaoY':262,
  'largura':50,
  'altura':40,
  'velocidade':1.2,
  'instancia':''
},{
  'imagem':path+'carro-3.png',
  'posicaoX':450,
  'posicaoY':317,
  'largura':50,
  'altura':40,
  'velocidade':2.9,
  'instancia':''
}];


function preload(){
  scenery = new Scenery('assets/images/estrada.png',500,400);
  score = new Score(0,scenery);
  character = new Character('assets/images/ator-1.png',85,366,30,27,2,scenery,score);
  carros.forEach(function(param,index){
    carros[index]['instancia'] = new Car(param.imagem,param.posicaoX,param.posicaoY,param.largura,param.altura, param.velocidade,scenery,character);
  });
}

function setup() {
  createCanvas(scenery.screenWidth, scenery.screenHeight);
  scenery.startMusic();
}

function draw() {
  scenery.start();
  score.start();
  character.start();
  carros.forEach(function(carro,index){
    carro.instancia.start();
  });
}