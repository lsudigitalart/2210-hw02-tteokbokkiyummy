function setup() {

    createCanvas (400,269);
    background(235,245,251);
    beginShape();
    fill(254,252,231);
    //1
    curveVertex(37,112);
    curveVertex(36,160);
    //2
    curveVertex(35,272);
    curveVertex(84,328);
    //3
    curveVertex(0,272);
    curveVertex(0,272);
    //4
    curveVertex(-5,108);
    curveVertex(-5,108);
    endShape(CLOSE);

}

function draw() {
    //put interactive stuff here

    fill (0);
    rect(0,28,width,10);
    let dot=1.8;
    let space=3.5;
    let color=150;
    let opacity=50;
    for(let x=0;x<width;x+=space){
        for(let y=0;y<height;y+=space){
            fill(color,opacity);
            noStroke();
            ellipse(x,y,dot,dot);
        }
    }    


    noStroke();
    fill (0);
    rect (0,0,width,65);

    //black line window 
    beginShape();
    //top left corner (x,y)
    vertex (269,66);
    //top right corner (x,y)
    vertex (295,42);
    //bottom right corner (x,y)
    vertex (320,269);
    //bottom left corner (x,y)
    vertex (294,269);
    endShape(CLOSE);

    //bottom white line
    stroke(255);
    strokeWeight(8);
    line(30,255,103,255);

    beginShape();
    strokeWeight(9);
    stroke(0,0,0);
    noFill();
    //curve top ref
    curveVertex(-9,-30);
    //curve point top
    curveVertex(36,111);
    //curve bottom ref
    curveVertex(30,269);
    //curve point bottom
    curveVertex(101,522);
    endShape();

    //black lines in back
    stroke(0);
    strokeWeight(3);
    line(250,58,400,244);
    line(261,56,404,230);
    line(111,63,239,271)
    line(158,66,300,271);
    line(171,62,294,236);
    strokeWeight(8);
    line(30,240,103,240);
    
    //blob
    beginShape();
    noStroke();
    fill(0);
    curveVertex(56,7);
    curveVertex(77,101);
    curveVertex(60,136);
    curveVertex(38,136);
    curveVertex(13,126);
    curveVertex(-6,78);
    curveVertex(-2,26);
    curveVertex(-2,26)
    endShape(CLOSE);

    //white window glare
    beginShape();
    fill(255);
    vertex(188,4);
    vertex(208,4);
    vertex(303,131);
    vertex(351,204);
    vertex(348,209);
    endShape(CLOSE);
    //white lines
    stroke(255);
    strokeWeight(40);
    line(325,-30,413,85);
    strokeWeight(5);
    line(110,37,252,273);
    strokeWeight(3);
    line(114,0,156,63);
    line(130,0,171,63);
    strokeWeight(35);
    line(74,0,128,268);

    stroke(0);
    strokeWeight(6);
    line(55,0,111,272);
    line (92,0,145,272);

    beginShape();
    fill(0);
    vertex(-6,272);
    vertex(30,255);
    vertex(32,273);
    endShape(CLOSE);

    beginShape();
    noStroke();
    fill(255);
    vertex(148,152);
    vertex(153,148);
    vertex(231,272);
    vertex(219,272);
    endShape(CLOSE);

    //where's my mouse
    //fill(255);
    //noStroke();
    //text(mouseX,10,10);
    //text(mouseY,10,20);
}