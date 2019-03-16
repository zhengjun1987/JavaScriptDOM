function nextElement(node) {
    if (node.nodeType === 1) return node;
    if (node.nextSibling) return nextElement(node.nextSibling);
    return null;
}

function styleHeaderSiblings(tagname, className) {
    className = className || "intro";
    tagname = tagname || "h1";
    var h1s = document.getElementsByTagName(tagname);
    var node;
    for (var i = 0; i < h1s.length; i++) {
        node = nextElement(h1s[i].nextSibling);
        if (!node) continue;
        // node.style.fontWeight ="bold";
        // node.style.fontSize = "1.2em";

        //    可以在CSS中设置特定类型的样式，然后在此处指定/追加元素节点的类型
        node.className = !node.className ? className : node.className + " " + className;
    }
}