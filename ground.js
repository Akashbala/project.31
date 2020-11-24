class Ground {
    constructor(x,y,width,hight){
        var options = {
            isStatic: true
        }
     this.body=Bodies.rectangle(x,y,width,hight,options)
     this.width=width
     this.hight=hight
     World.add(world,this.body)
    }
    display(){
    var posit = this.body.position
        rectMode(CENTER)
        fill("white")
        rect(posit.x,posit.y,this.width,this.hight)

    }
}