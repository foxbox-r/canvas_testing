let c;
const PI2 = Math.PI * 2;

class Ball{
    constructor(x,y,r,rgba){
        this.x = x;
        this.y = y;
        this.r = r;
        this.rgba = rgba;
        
        this.vx = Math.random()*4;
        this.vy = Math.random()*4;

        this.sinValue = Math.random();
    }

    update(ctx,stageWidth,stageHeight){
        this.sinValue += 0.01;

        this.r += Math.sin(this.sinValue);

        this.x += this.vx;
        this.y += this.vy;

        if(this.x<0){
            this.vx *= -1;
            this.x += 10;
        } else if (this.x > stageWidth){
            this.vx *= -1;
            this.x -=  10;
        }

        if(this.y < 0){
            this.vy *= -1;
            this.y += 10;
        } else if(this.y > stageHeight){
            this.vy *= -1;
            this.y -= 10;
        }

        ctx.beginPath();
        const g = ctx.createRadialGradient(
            this.x,
            this.y,
            this.r*0.01,
            this.x,
            this.y,
            this.r
        );
        g.addColorStop(0,`rgba(${this.rgba.r},${this.rgba.g},${this.rgba.b},1)`);
        g.addColorStop(1,`rgba(${this.rgba.r},${this.rgba.g},${this.rgba.b},0)`);
        // ctx.fillStyle = `rgba(${this.rgba.r},${this.rgba.g},${this.rgba.b},${this.rgba.a})`;
        ctx.fillStyle = g;
        ctx.arc(this.x,this.y,this.r,0,PI2,false);
        ctx.fill();
    }
}

function mkColor(r,g,b,a=1){
    this.r = r;
    this.g = g;
    this.b = b;
    this.a =a;
}
const COLOR_LIST = [
    new mkColor(45,74,227),//blue
    new mkColor(250,255,89),//yellow
    new mkColor(255,104,248),//pupple
    new mkColor(44,209,252),//skyblue
    new mkColor(54,233,84),//green
];

class App{
    constructor(item_length,max_r,min_r){
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        c = this.canvas;
        this.max_r = max_r;
        this.min_r = min_r;
        this.item_length = item_length;
        this.resize();
        this.createParticles();
        window.addEventListener("resize",this.resize.bind(this),false);
        this.animate();
    }

    resize(){
        this.stageWidth = innerWidth;
        this.stageHeight = innerHeight;
        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;
        this.createParticles();
        this.ctx.globalCompositeOperation = "saturation";
        this.ctx.scale(1,1);
    }

    createParticles(){
        this.arr = [];
        for(let i=0;i<this.item_length;i++){
            const item = new Ball(
                Math.random() * this.stageWidth,
                Math.random()*this.stageHeight,
                Math.random() * (this.max_r - this.min_r) + this.min_r,
                COLOR_LIST[Math.floor(Math.random()*COLOR_LIST.length)],
                )
            this.arr.push(item);
        }
        console.log(this.arr);
    }

    update(){
        for(let i=0;i<this.item_length;i++){
            const item = this.arr[i];
            item.update(this.ctx,this.stageWidth,this.stageHeight);
        }
    }

    animate(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.update();
        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () =>{
    new App(20,900,400);
}
