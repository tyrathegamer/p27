class Chain{
    constructor(a,pointB){
        var options = {
            'bodyA':a,
            'pointB':pointB,
            'length':500,
            'stiffness':1
        }
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);
        
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.pointB
        stroke(235);
        line (pointA.x,pointA.y,pointB.x,pointB.y)

    }
    
}
