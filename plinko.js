class Plinko{
    constructor(x,y,r){

        var options ={
            isStatic:true
        }
        this.r=r
    
        this.body=Bodies.circle(x,y,r,options)
        //this.color=color(random(0,255), random(0,255), random(0,255))
        
        World.add(world,this.body)
    
        }
        display(){
            ellipseMode(RADIUS)
            ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    }
}