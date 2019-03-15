function displayCitations() {
    alert("displayCitations");
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    var quotes = document.getElementsByTagName("blockquote");
    if (!quotes || quotes.length === 0) return false;
    for (var i = 0; i < quotes.length; i++) {
        var quote = quotes[i];
        var cite = quote.getAttribute("cite");
        alert(cite);
        if (!cite) continue;
        var nodeList = quote.getElementsByTagName("*");
        if (nodeList.length === 0) {
            continue;
        }
        var link = document.createElement("a");
        link.appendChild(document.createTextNode("source"));
        link.setAttribute("href", cite);
        var sup = document.createElement("sup");
        sup.appendChild(link);
        nodeList[nodeList.length - 1].appendChild(sup);
    }
}