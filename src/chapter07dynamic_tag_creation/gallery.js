function preparePlaceHolder() {
// <img src="images/marathon.jpg" alt="my image gallery" id="placeholder">
// <p id="desc">Choose an image.</p>
//    动态创建上述两个标签
    var galleryNode;
    var p;
    var placeHolder;
    alert("preparePlaceHolder");
    if (!document.createElement
        || !document.createTextNode
        || !(galleryNode = document.getElementById("images"))
        || !(placeHolder = document.createElement('img'))
        || !(p = document.createElement('p'))
    ) return false;
    placeHolder.setAttribute("src", "images/marathon.jpg");
    placeHolder.setAttribute("alt", "my image gallery");
    placeHolder.setAttribute("id", "placeholder");
    p.setAttribute("id", "desc");
    p.appendChild(document.createTextNode("Choose an image."));
    galleryNode.parentNode.insertBefore(p, galleryNode);
    galleryNode.parentNode.insertBefore(placeHolder, p);
    return true;
}

function insertAfter(newElement, target) {
    var parentNode = target.parentNode;
    if (parentNode.lastChild == target) {
        parentNode.appendChild(newElement);
    } else {
        parentNode.insertBefore(newElement, target.nextSibling);
    }
}

/**
 * 这种写法还是将HTML元素节点与JavaScript脚本杂糅在一起，耦合度较高
 * 降低耦合度的方法：使用方法获取到统一class的元素设置其点击事件
 * */
function showPicture(whichPic) {
    var placeholder = document.getElementById("placeholder");
    if (!placeholder) return false;
    placeholder.setAttribute("src", whichPic.getAttribute("href"));
    var desc = document.getElementById("desc");
    if (!desc) return false;
    desc.lastChild.nodeValue = whichPic.getAttribute("title") || "此节点内容为空";
    return true;
}

function setGalleryItemOnClickCallback() {
    var galleryItems = document.getElementsByClassName("galleryItem");
    if (!document.getElementsByClassName || !galleryItems) {
        return false;
    }
    if (galleryItems.length > 0) {
        for (var i = 0; i < galleryItems.length; i++) {
            galleryItems[i].onclick = function () {
                return !showPicture(this);
            }
        }
    }
}

function showBodyChildrenCount() {
    var body = document.getElementsByTagName("body")[0];
    var number = 0;
    for (var i = 0; i < body.childNodes.length; i++) {
        var childNode = body.childNodes[i];
        if (childNode.nodeType === 1) number++;
    }
    // alert("number = " + number);

}

window.onload = function (ev) {
    preparePlaceHolder();
    showBodyChildrenCount();
    setGalleryItemOnClickCallback();
};

function popUp(element) {
    url = element.getAttribute("href") || "https://www.baidu.com/";
    window.open(url, "popup", "width=320,height=480");
}

var popups = document.getElementsByClassName("popup");
for (var i = 0; i < popups.length; i++) {
    var element = popups.item(i);
    element.onclick = function () {
        popUp(this);
        return false;
    }
}