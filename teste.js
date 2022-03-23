const cnv = document.querySelector("canvas");
const ctx = cnv.getContext("2d");

var caixa = [];
var jo = new Image();
jo.src ="zeze.png";
var Jogo = function(px,py,vx,vy,width,height,conte){
 this.px = px;
 this.py = py;
 this.vx = vx;
 this.vy = vy;
 this.width = width;
 this.height = height;
 this.conte = conte;
 this.visible = true;
 
}
var eroi = new Jogo(0,99,40,119,24,32);
   eroi.const = 0;
   eroi.vel = 2;
   caixa.push(eroi);

/*var som = new Jogo(0,99,30,50,24,32);
caixa.push(som);*/

const ok = function(){
   som.py = som.height + som.height* 1;
  
}
function draw() {
  ctx.clearRect(0,0,cnv.width,cnv.height);
for(var i in caixa){
   var pos = caixa[i]
if(pos.visible){
  //ctx.fillStyle = pos.color;
  ctx.drawImage(jo,pos.px,pos.py,pos.width,pos.height,pos.vx,pos.vy,pos.width,pos.height); 
  }
  
 }

}
function update(){
  eroi.vx += eroi.vel;
  eroi.const++;

if(eroi.const >= 40){

  eroi.const = 0;
  
}
if(eroi.vx + eroi.height >= cnv.width){

  eroi.vel -= 1;
  eroi.py = eroi.height +  eroi.height* 1;
 
}

if(eroi.vx  <= 0){
   
  eroi.vel += 1;
  eroi.py =  eroi.height + eroi.height* 2;
}
  eroi.px = Math.floor(eroi.const/5) * eroi.width;
}

function loop(){
  draw();
  update();
  requestAnimationFrame(loop);
  
}
loop();