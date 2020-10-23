function draw(){

    var div = document.getElementById("container");         // reset the canvas each time 
    div.innerHTML="";

    var size = document.getElementById("number").value;
    var margin = 5;
    for (var i=1; i <= size; i++) {
        var box = document.createElement("div");
        box.innerHTML = i;
        box.className = "box";
        box.style.marginLeft = margin + "px";
        var r = Math.round(Math.random()*255);
	    var g = Math.round(Math.random()*255);
        var b = Math.round(Math.random()*255);
        box.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        margin *= 2;
        container.appendChild(box);
    }
}