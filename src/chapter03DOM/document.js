// alert(document.dir);
// alert(document.bgColor);
// alert(document.charset);
// alert(document.compatMode);
// alert(document.cookie);
// alert(document.nodeName);

// alert(window.innerHeight);
// alert(window.innerWidth);

var elementById = document.getElementById("purchases");
// alert(typeof elementById);

var tagname = "li";
var elementsByTagName = document.getElementsByTagName(tagname);
// alert(tagname + " elements count:" + elementsByTagName.length);
// for (var i = 0; i < elementsByTagName.length; i++) {
//     var element = elementsByTagName[i];
//     alert(element.nodeName);
// }

var classNames = "sale";
var byClassName = document.getElementsByClassName(classNames);
alert("class " + classNames + " elements count:" + byClassName.length);

/*
* 典型的错误用法：document.getElementsByClassName返回的是一个元素节点的数组
* 没办法再调用getElementsByTagName
* getElementsByTagName只能针对有子节点的Element使用
* 这也侧面反映出DOM语言库设计得不是很精确
* */
// var liElementsImportant = byClassName.getElementsByTagName("li");
// alert("liElementsImportant count:" + liElementsImportant.toString());

var purchases = elementById.getElementsByClassName(classNames);
alert("purchases nodes count:"+purchases.length);