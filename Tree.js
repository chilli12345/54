class Tree{

    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:0
        }
        this.x=x;
        this.y=y;
        this.r=radius;
        this.image=loadImage("Plucking mangoes/tree.png");
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}