var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var w = innerWidth;
var h = innerHeight;

canvas.width = w;
canvas.height = h;

var fontSize = 12;
var columns = Math.floor(w / fontSize);
var drops = [];
for( var i = 0; i < columns; i++ ){
    drops.push(0);
}

var j = 2;

var str = "0101000001110101111110101101110100111010100111111010110100001010001011101111011";

function draw(){
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, w, h);
    // context.fontSize = "700 " + fontSize + "px";
    // if(j % 2 == 0){
    //     context.fillStyle = "red"
    // }
    // else if (j % 3 == 0){
    //     context.fillStyle = "lime"
    // }
    // else if (j % 5 == 0){
    //     context.fillStyle = "yellow"
    // }
    // else{
    //     context.fillStyle = "cyan"
    // }
    // j++;
    context.fillStyle = "cyan"

    for( var i = 0; i < columns; i++ ){
        var index = Math.floor(Math.random() * str.length);
        var x = i * fontSize;
        var y = drops[i] * fontSize;
        context.fillText(str[index], x, y);
        if( y >= canvas.height && Math.random() > 0.99){
            drops[i] = 0;
        }
        drops[i]++;
    }
}

draw();
setInterval(draw, 40);