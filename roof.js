class Roof{
    constructor(x, y, w, h){
        var options={
            isStatic: true
        }
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(128,128,128);
        rect(0, 0, this.width, this.height);
        pop();
    }
}