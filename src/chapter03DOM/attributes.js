var pTag = document.getElementsByTagName("p");
for (var i = 0; i < pTag.length; i++) {
    var attribute = pTag[i].getAttribute('title');
    if (attribute != null) {
        alert(attribute);
    }
}

var purchases = document.getElementById("purchases");
alert(purchases.getAttribute("title"));
purchases.setAttribute("title","A list of goods.");
alert(purchases.getAttribute("title"));

var h1s = document.getElementsByTagName("h1");
for (var i = 0; i < h1s.length; i++) {
    h1s[i].setAttribute("class","sale");
}