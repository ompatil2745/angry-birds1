class Chain{

constructor(bodyA,bodyB){

var options={

bodyA:bodyA,
BodyB:bodyB,
stiffness:0.04,
length:10

}
this.chain=Constraint.create(options)
World.add(world,this.chain);
}
display(){

var pointA=this.chain.bodyA.position
var pointB=this.chain.BodyB.position
strokeweight(4);
line(pointA.y,pointA.y,pointB.x,pointB.y)

}
}