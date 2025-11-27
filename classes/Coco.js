class Coco {
    constructor(x, y, largura, altura, velocidade) {
        this.larguraVisual = largura;
        this.alturaVisual = altura;


        const colliderShrink = 6;
        this.larguraFisica = largura;
        this.alturaFisica = Math.max(altura - colliderShrink, 2);


       
        this.spriteOffsetY = 6;


       
        this.corpo = Matter.Bodies.rectangle(x, y, this.larguraFisica, this.alturaFisica, {
            isStatic: false,
            friction: 0.5,
            frictionStatic: 1.0,
            restitution: 0,
            density: 0.002,
            frictionAir: 0.01,
            inertia: Infinity
        });


        this.velocidade = velocidade;
        this.sentido = 1;


       
        this.image = null;
        loadImage('limpamerda.png', (img) => {
            this.image = img;
        });


        Matter.World.add(mundo, this.corpo);
    }


    mostrar() {
        const pos = this.corpo.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.corpo.angle);


       
        if (this.image) {
            imageMode(CENTER);
            image(this.image, 0, this.spriteOffsetY, this.larguraVisual, this.alturaVisual);
        }
        pop();
    }


    movimento() {
        const alvo = this.velocidade * this.sentido;
        const vx = this.corpo.velocity.x;
        if (Math.abs(vx - alvo) > 0.2) {
            Matter.Body.setVelocity(this.corpo, { x: alvo, y: this.corpo.velocity.y });
        }
       
    }    
    verificarBorda(plataformas) {
        const pos = this.corpo.position;
        const vy = this.corpo.velocity.y;


        for (let plat of plataformas) {
            const esquerda = plat.corpo.position.x - plat.largura / 2;
            const direita  = plat.corpo.position.x + plat.largura / 2;
            const topo     = plat.corpo.position.y - plat.altura / 2;


            const dentroHorizontal = pos.x > esquerda && pos.x < direita;
            const distBaseTopo = (pos.y + this.alturaFisica / 2) - topo;
            const margemSnap = 4;
            const podeSnap = dentroHorizontal &&
                             distBaseTopo >= -margemSnap &&
                             distBaseTopo <=  margemSnap &&
                             vy >= -0.2;


            if (podeSnap) {
                const yAlvo = topo - this.alturaFisica / 2;
                Matter.Body.setPosition(this.corpo, { x: pos.x, y: yAlvo });
                Matter.Body.setVelocity(this.corpo, { x: this.corpo.velocity.x, y: 0 });
            }




            if (dentroHorizontal) {
                if (pos.x <= esquerda + 10) {
                    this.sentido = 1;
                } else if (pos.x >= direita - 10) {
                    this.sentido = -1;
                }
            }
        }
    }
}
