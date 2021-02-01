class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.part1 = loadImage("sprites/sling1.png");
        this.part2 = loadImage("sprites/sling2.png");
        this.part3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,23,8)
            strokeWeight(4);
            if(pointA.x <200){
                line(pointA.x-27, pointA.y, pointB.x+30, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x-30, pointB.y);
                image(this.part3, pointA.x-30, pointA.y-6, 10,15);
            }
            else{
                line(pointA.x+27, pointA.y, pointB.x+30, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x-30, pointB.y); 
                image(this.part3, pointA.x+20, pointA.y-5, 10,15);
            }
        }
        image(this.part1, 200, 20);
        image(this.part2, 170, 20);
        
    }
    
}