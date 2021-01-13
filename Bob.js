class Bob {
    constructor(x,y,r){
      var options={
          isStatic: false,
          //restitution : 0.3,
          //friction: 0.5,
          density: 1.2
      }
      this.r=r;
      this.x=x;
      this.y=y;
      this.body = Bodies.circle(x,y,r,options);
      
      World.add(world,this.body);
    }
   display(){
     var pos = this.body.position;
     
     //push();
     //translate(pos.x,pos.y);
     //rotate(angle);
     //fill(255,0,255);
     ellipseMode(RADIUS);
     ellipse(pos.x,pos.y,55,55);
     //pop(); 
   }
   };
   