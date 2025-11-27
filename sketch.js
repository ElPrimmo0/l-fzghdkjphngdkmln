const Motor= Matter.Engine,
      Mundo=Matter.World,       
      Corpos= Matter.Bodies;
      SAT=Matter.SAT;

let mundo, motor;  
let plataforma = [];
let coco = []
let Alerrandro;

let nivel=1;
      
function setup() {
  createCanvas(windowWidth,  windowHeight);  

  motor = Motor.create(); 
  mundo = motor.world;
  motor.world.gravity.y = 2;

  iniciarNivel(nivel)  
  
}
function draw() {
  background("skyBlue")
 Motor.update(motor); 
push()
 translate(-Alerrandro.corpo.position.x+width/2,-Alerrandro.corpo.position.y+height/2)  

  for (let plat of plataforma){
      plat.mostrar();

  if(JogadorTocandoPlataforma(Alerrandro, plat)){
    Alerrandro.resetarPular();
  }    
  }
 
 for (let cocos of coco){
    cocos.movimento()
    cocos.verificarBorda(plataforma);
    cocos.mostrar();

    let colisao = SAT.collides(cocos.corpo, Alerrandro.corpo);
    setTimeout(() =>{
    if(colisao.collided){
      //noLoop();
      
        removerTudo();
        coco.forEach(i =>{
          if(i.corpo)Mundo.remove(mundo, i.corpo);
        })
        coco=[];
        Matter.Engine.clear(motor); 
        motor = Motor.create();     
        mundo = motor.world;
        mundo.gravity.y = 2;
        nivel=1;
        iniciarNivel(nivel);
    }
    },300);
 }

  if(Alerrandro.corpo.position.y>height+500){
    noLoop()
    alert("Você caiu!");
  }

  
  verificarColisaoComPrivada(Alerrandro, privada);

  Alerrandro.mostrar();
  if(privada){
  privada.mostrar();
  }
  pop()
  textAlign(LEFT, TOP) 
  textSize(45)
  fill("black")
  text("Nivel: "+nivel, 50,50);
}

function iniciarNivel(nivel){
  if(nivel===1){
    nivel1();
  }
  if(nivel===2){
    nivel2();
  }
  if(nivel===3){
    nivel3();
  }
}

  function nivel1(){
  plataforma.push(new Plataformas(200, height-100, 200,20 ));
  plataforma.push(new Plataformas(400, height-250, 200,20 ));
  plataforma.push(new Plataformas(200, height-375, 200,20 ));
  plataforma.push(new Plataformas(400, height-500, 200,20 ));
  plataforma.push(new Plataformas(200, height-600, 200,20 ));
  plataforma.push(new Plataformas(400, height-725, 200,20 ));
  plataforma.push(new Plataformas(200, height-850, 200,20 ));
  plataforma.push(new Plataformas(400, height-925, 200,20 ));
  plataforma.push(new Plataformas(200, height-1050, 200,20 ));
  plataforma.push(new Plataformas(400, height-1175, 200,20 ));
  plataforma.push(new Plataformas(200, height-1250, 200,20 ));
  plataforma.push(new Plataformas(400, height-1375, 200,20 ));
  plataforma.push(new Plataformas(200, height-1500, 200,20 ));
  plataforma.push(new Plataformas(400, height-1625, 200,20 ));
  plataforma.push(new Plataformas(200, height-1750, 200,20 ));
  plataforma.push(new Plataformas(400, height-1875, 200,20 ));
  plataforma.push(new Plataformas(200, height-2000, 200,20 ));
        
  Alerrandro = new  Jadoar(100,  height-120, 75,50);
  privada = new  Privada(200, height-2050, 200,100 );
  coco.push(new Coco (400 , height-280, 50,50,2))
  coco.push(new Coco (200 , height-6300, 50,50,2))
  coco.push(new Coco (400 , height-1405, 50,50,2))
  } 

  function nivel2(){
  plataforma.push(new Plataformas(200, height-100, 200,20 ));
  plataforma.push(new Plataformas(600, height-250, 200,20 ));
  plataforma.push(new Plataformas(700, height-375, 200,20 ));
  plataforma.push(new Plataformas(600, height-500, 200,20 ));
  plataforma.push(new Plataformas(800, height-600, 200,20 ));
  plataforma.push(new Plataformas(900, height-725, 200,20 ));
  plataforma.push(new Plataformas(1000, height-850, 200,20 ));
  plataforma.push(new Plataformas(970, height-925, 200,20 ));
  plataforma.push(new Plataformas(850, height-1050, 200,20 ));
  plataforma.push(new Plataformas(900, height-1175, 200,20 ));
  plataforma.push(new Plataformas(850, height-1250, 200,20 ));
  plataforma.push(new Plataformas(950, height-1375, 200,20 ));
  plataforma.push(new Plataformas(1100, height-1500, 200,20 ));
  plataforma.push(new Plataformas(1200, height-1625, 200,20 ));
  plataforma.push(new Plataformas(1050, height-1750, 200,20 ));
  plataforma.push(new Plataformas(1150, height-1875, 200,20 ));
  plataforma.push(new Plataformas(1250, height-2000, 200,20 ));
  Alerrandro = new  Jadoar(100,  height-120, 75,50);
  privada = new  Privada(1250, height-2050, 200,100 );
  coco.push(new Coco (650 , height-280, 50,50,2))
  coco.push(new Coco (1000 , height-880, 50,50,2))
  coco.push(new Coco (1200 , height-1655, 50,50,2))
  }

  function nivel3(){
  plataforma.push(new Plataformas(400, height-300, 200,20 ));
  plataforma.push(new Plataformas(600, height-400, 200,20 ));
  plataforma.push(new Plataformas(700, height-500, 200,20 ));
  plataforma.push(new Plataformas(600, height-620, 200,20 ));
  plataforma.push(new Plataformas(800, height-760, 200,20 ));
  plataforma.push(new Plataformas(900, height-825, 200,20 ));
  plataforma.push(new Plataformas(950, height-975, 200,20 ));
  plataforma.push(new Plataformas(1100, height-1050, 200,20 ));
  plataforma.push(new Plataformas(1200, height-1150, 200,20 ));
  plataforma.push(new Plataformas(1050, height-1235, 200,20 ));
  plataforma.push(new Plataformas(1150, height-1365, 200,20 ));
  plataforma.push(new Plataformas(1250, height-1495, 200,20 ));
  Alerrandro = new  Jadoar(400,  height-330, 75,50);
  privada = new  Privada(1250, height-2050, 200,100 ); 
  coco.push(new Coco (400 , height-330, 50,50,2))
  coco.push(new Coco (800 , height-790, 50,50,2))
  coco.push(new Coco (1050 , height-1265, 50,50,2))

  }

  function removerTudo(){
    for (let plat of plataforma){
      if(plat.corpo){
        Mundo.remove(mundo,plat.corpo);
        
   }
 }
 coco = []
 
   for (let c of coco)
      if (c&&c.corpo){
        Mundo.remove(mundo, c.corpo);
        
    }
    if (privada && privada.corpo){
        Mundo.remove(mundo, privada.corpo);
        privada=null
    }
  }

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    Alerrandro.mover(0.065);
  }
  if(keyCode === LEFT_ARROW){
    Alerrandro.mover(-0.065);
  }
  if(keyCode === 32){
    Alerrandro.pular(-1.09);
  }
}
   
function verificarColisaoComPrivada(Alerrandro,privada){
  if(!privada) return;
  let colisao = SAT.collides(Alerrandro.corpo, privada.corpo);
  
  if(colisao.collided){
    removerTudo();
    nivel++;
    alert("nivel" + nivel)
    iniciarNivel(nivel);
  }
}

function JogadorTocandoPlataforma(jogador, plat){
   const posicaoJogador = jogador.corpo.position;
  const posicaoPlataforma = plat.corpo.position;

  const topoJogador = posicaoJogador.y - jogador.altura / 2;
  const baseJogador = posicaoJogador.y + jogador.altura / 2;
  const esquerdaJogador = posicaoJogador.x - jogador.largura / 2;
  const direitaJogador = posicaoJogador.x + jogador.largura / 2;


  const topoPlataforma = posicaoPlataforma.y - plat.altura / 2;
  const esquerdaPlataforma = posicaoPlataforma.x - plat.largura / 2;
  const direitaPlataforma = posicaoPlataforma.x + plat.largura / 2;

 
  const tocando =
    baseJogador >= topoPlataforma &&       
    baseJogador <= topoPlataforma + 10 &&    
    direitaJogador >= esquerdaPlataforma &&  
    esquerdaJogador <= direitaPlataforma;

  return tocando;

    
}

function JogadorTocandoPlataforma(jogador, plat){
  const posicaoJogador = jogador.corpo.position;
  const posicaoPlataforma = plat.corpo.position;

  const topoPlataforma = posicaoPlataforma.y - plat.altura / 2;
  const esquerdaPlataforma = posicaoPlataforma.x - plat.largura / 2;
  const direitaPlataforma = posicaoPlataforma.x + plat.largura / 2;

  const baseJogador = posicaoJogador.y + jogador.altura / 2;
  const esquerdaJogador = posicaoJogador.x - jogador.largura / 2;
  const direitaJogador = posicaoJogador.x + jogador.largura / 2;

  
  const tocando =
    baseJogador >= topoPlataforma - 5 &&     
    baseJogador <= topoPlataforma + 10 &&     
    direitaJogador >= esquerdaPlataforma &&
    esquerdaJogador <= direitaPlataforma &&
    jogador.corpo.velocity.y >= 0; 

  if (tocando) {
    
    Matter.Body.setPosition(jogador.corpo, {
      x: posicaoJogador.x,
      y: topoPlataforma - jogador.altura / 2
    });

    
    Matter.Body.setVelocity(jogador.corpo, {
      x: jogador.corpo.velocity.x,
      y: 0
    });

    
    jogador.corpo.friction = 0.8;
  } else {
    
    jogador.corpo.friction = 0;
  }

  return tocando;
}

function  windowResized() {
  resizeCanvas(windowWidth,  windowHeight);    
}
