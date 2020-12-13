class Ball{
    constructor(x,y){
        var options = {
        'restitution':0,
        'friction':1.0,
        'density':1,
        'isStatic':false
        }
            this.body=Bodies.circle(x,y,40,options);
            this.radius=40;
            World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
            push();
    
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            ellipseMode(RADIUS);
            ellipse(0,0,this.radius,this.radius)
            pop();
    }
    
    }
    