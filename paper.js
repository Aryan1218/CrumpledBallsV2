class Paper{
constructor(x,y,radius){
    var options={
        isStatic = false,
        restitution:0.3,
        friciton:0.5,
        density:1.2
    }
this.body = Bodies.circle(x,y,radius,options)
this.radius  = radius;
World.add(world,this.body)
this.image = loadImage("sprites/paper.png");




display()
    var pos = this.body.position
    rectMode(CENTER)
    fill("red")
    circle(pos.x,pos.y, this.radius)
    pop();


function keypressed(){
    if(keyCode === UP_ARROW){
    Matter.Body.applyforce(paper.body,paper.body.pos({x:85,y:85})

    





    }







}
 




}
}
