class Tanker {

  constructor(x, y, width, height) {
      
      var options = {
      isStatic: true
     }
    
     this.AbortController
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;
      
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      //arc(this.x,this.y,((this.width-15)/2),1*Math.PI, 2*Math.PI);
      ellipse(this.x,this.y,this.width-20,this.height);
      rect(this.x,this.y+10,this.width-10,10);
      rect(this.x,this.y+20,this.width,15);
      ellipse(this.x-15,this.y+35,15,15);
      ellipse(this.x,this.y+35,15,15);
      ellipse(this.x+15,this.y+35,15,15);
    };
}
