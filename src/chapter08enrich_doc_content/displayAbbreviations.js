function displayAbbreviations() {
    var abbrs = document.getElementsByTagName("abbr");
    if (!abbrs || abbrs.length === 0) return false;
    var titles = [];
    for (var i = 0; i < abbrs.length; i++) {
        var item = abbrs[i];
        if (item.childNodes.length === 0) continue;
        var value = item.getAttribute("title");
        var key = item.lastChild.nodeValue;
        titles[key] = value;
    }
    var dl = document.createElement("dl");
    for (key in titles) {
        var title = titles[key];
        var dt = document.createElement("dt");
        var dtt = document.createTextNode(key);
        dt.appendChild(dtt);
        var dd = document.createElement("dd");
        var ddt = document.createTextNode(title);
        dd.appendChild(ddt);
        dl.appendChild(dt);
        dl.appendChild(dd);
    }

    var h2 = document.createElement("h2");
    var h2t = document.createTextNode("Abbreviations");
    h2.appendChild(h2t);
    document.body.appendChild(h2);
    document.body.appendChild(dl);
    // return true;
}

window.onload = function (ev) {
    displayAbbreviations();
    displayCitations();
};