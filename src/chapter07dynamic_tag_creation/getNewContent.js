function getNewContent() {
    var request = getHttpObject();
    alert(request);
    if (!request) {
        alert("Sorry,your browser doesn\'t support XMLHTTPRequest")
        return false;
    }
    request.open("GET","example.txt",true);
    request.onreadystatechange = function (ev) {
        if (request.readyState === 4) {
            alert("Response Received!")
            var paragraphElement = document.createElement("p");
            paragraphElement.appendChild(document.createTextNode(request.responseText))
            document.getElementById("new").appendChild(paragraphElement);
        }
    };
    request.send(null);
    alert("Function Done!");
}

addLoadEvent(getNewContent);