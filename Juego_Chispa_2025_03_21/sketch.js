let img = []
function preload() {
  img[0] = loadImage('chispaAzul.PNG');
  img[1] = loadImage('chispaMagenta.PNG');
  img[2] = loadImage('chispaNaranja.PNG');
  img[3] = loadImage('chispaRoja.PNG');
  img[4] = loadImage('chispaVioleta.PNG');
}
let Uncuadrado, laCantidad, elFondo, otraVerdad;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  //createCanvas(400,400);
  laCantidad = 12;
  Uncuadrado = [laCantidad];
otraVerdad = [laCantidad];
elFondo=color(random(255),random(255),random(255));
  for(let i = 0; i<laCantidad; i++){
    otraVerdad[i] = false;
      Uncuadrado[i] = new elCuadrado();
  }
  noStroke();

}


function draw() {
  background(elFondo);

  for(let i = 0; i<laCantidad; i++){
    Uncuadrado[i].muestra(otraVerdad[i]);
  }

}

function elCuadrado(unColor ) {

  this.veloY = round(random(1,5));
  this.mueveX = 0;
  this.posX = round(random(width));
  this.posY = round(random(-height,-100));
  this.tamanoX = round(random(80,200));
  // this.tamanoY= round(random(40,120));
    let unN = int(random(12)%5)
  this.muestra = (laVerdad)=> {
      this.laVerdad = laVerdad;

      image(img[unN],this.posX+this.mueveX,this.posY,this.tamanoX,this.tamanoX);
    this.posY+=this.veloY;
    this.mueveX = this.mueveX;
    if(this.posY>height){
      this.posY = round(random(-height-100,-500));
    }
    if(this.laVerdad){
      this.posY = round(random(-height-100,-500));

    }
  }
}

function mouseReleased() {
  for(let i = 0; i<laCantidad; i++){
  if(mouseX>Uncuadrado[i].posX&&mouseX<Uncuadrado[i].posX+Uncuadrado[i].tamanoX&&mouseY>Uncuadrado[i].posY&&mouseY<Uncuadrado[i].posY+Uncuadrado[i].tamanoX){
otraVerdad[i]=!otraVerdad[i];
}else{
        otraVerdad[i]=false;
}
}
}