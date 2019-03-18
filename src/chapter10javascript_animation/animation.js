var movement;

function positionMessage() {
    var message = document.getElementById("message");
    message.style.position = 'absolute';
    message.style.left = '50px';
    message.style.top = '100px';
    // moveElement("message",200,100,10);
    moveElement("message",125,25,20);

    var whoa = document.getElementById("message2");
    whoa.style.position = "absolute";
    whoa.style.left = "50px";
    whoa.style.top = "50px";
    moveElement("message2",125,125,20);
}

window.onload = function (ev) {
    positionMessage();
};

function moveElement(elementId, finalX, finalY, interval) {
    var message = document.getElementById(elementId);
    var xpos = parseInt(message.style.left);
    var ypos = parseInt(message.style.top);
    if (xpos === finalX && ypos === finalY) return true;
    if (xpos < finalX) {
        xpos++;
    }
    if (xpos > finalX) {
        xpos--;
    }
    if (ypos < finalY) {
        ypos++;
    }
    if (ypos > finalY) {
        ypos--;
    }
    message.style.left = xpos + "px";
    message.style.top = ypos + "px";
    var handler = "moveElement(\"" + elementId + "\", " + finalX + "," + finalY + "," + interval + ")";
    movement = setTimeout(handler, interval);
}