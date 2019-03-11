var placeholder = document.getElementById("placeholder");
var desc = document.getElementById("desc");

function showPicture(whichPic) {
    var href = whichPic.getAttribute("href");
    placeholder.setAttribute("src", href);
    desc.lastChild.nodeValue = whichPic.getAttribute("title");
}

function showBodyChildrenCount() {
    var body = document.getElementsByTagName("body")[0];
    var number = 0;
    for (var i = 0; i < body.childNodes.length; i++) {
        var childNode = body.childNodes[i];
        if (childNode.nodeType === 1) number++;
    }
    alert("number = " + number);
}

window.onload = showBodyChildrenCount;