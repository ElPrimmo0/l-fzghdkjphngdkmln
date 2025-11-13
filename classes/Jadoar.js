class  Jadoar {
    constructor(x,y, largura,altura){
       this.corpo =Matter.Bodies.rectangle(x,y,largura,altura,{
        friction: 0.3,
            restitution: 0.1, 
            density: 2,
            frictionAir:0.01,
            inertia: Infinity, 
            inverseInertia: 0.0001 
    })

        this.largura = largura;
        this.altura = altura;
        this.pulosDisponiveis=1;
        this.image= loadImage(
            'Pou.png' 
        )
        Matter.World.add(mundo, this.corpo); 
    }
      mostrar(){
        const  posicao = this.corpo.position;
        fill(100,100,100)
        imageMode(CENTER); 
        image(this.image,posicao.x, posicao.y, this.largura, this.altura); 

    }

    mover(direcao){
        
        Matter.Body.setVelocity(this.corpo, {
            x: direcao *100, 
            y: this.corpo.velocity.y
        });
    
    }
    pular(forcaPulo){
        if(this.pulosDisponiveis>0){
            
            Matter.Body.setVelocity(this.corpo, {
                x: this.corpo.velocity.x,
                y: forcaPulo * 11
            });
            this.pulosDisponiveis--; 
        }
    }

    resetarPular(){
        this.pulosDisponiveis=2;
    }
}