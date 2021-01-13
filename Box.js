class Box {
 constructor(x,y,w,h){
 var options = {
    'friction':1.0,
    'restitution':0.8,
    'density':0.04
}
this.body = Bodies.rectangle( x,y,w,h,options)
 this.w=w
 this.h=h
  World.add(world,this.body)
}

display(){
    var pos = this.body.position
    var angle = this.body.angle 
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    rectMode(CENTER)
    fill("blue")
    stroke("pink")
    rect(0,0,this.w,this.h)
    pop();
     }
}