function extracted(inserted) {
    inserted = inserted || "This is inserted!";
    document.write("<p>" + inserted + "</p>")
}

// extracted("INSERTED CHARACTERS");

window.onload = function (ev) {
    var byId = document.getElementById("testdiv");
    // alert(byId.innerHTML);//<p>This is <em>my</em> content.</p>
    // alert(byId.innerText);//This is my content.

    // byId.innerHTML += "<p>I inserted <em>this</em> content.</p>";

    var child = document.createElement("p");
    // child.innerHTML = "I inserted <em>a new</em> content.";

    /**
     * 这个方法添加的文本节点不会对内容进行标签解析；
     * 而是必须将含有标签内容的文本分段视为不同类型的节点进行创建
     * */
    // var textNode = document.createTextNode("I inserted <em>a new</em> content.");

    var textNode = document.createTextNode("I inserted ");
    var emNode = document.createElement('em');
    emNode.appendChild(document.createTextNode("a new"));
    var endNode = document.createTextNode(" content.");
    child.appendChild(textNode);
    child.appendChild(emNode);
    child.appendChild(endNode);

    byId.appendChild(child);
};