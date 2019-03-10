//行注释
var mood = "happy";
//变量无需声明直接可以使用
age = 33;

/*
* 这两个alert之间的关系是串联的
* 第一个被点击关闭之后才会弹出第二个
* */
// alert(mood);//happy
// alert(age);//33


/**
 * 多行注释，自我提醒
 * 有注释是好事
 * */
// alert(age.type);//undefined

age = "thirty-three";
mood = 'don\'t ask!';
height = 'about 5\'10" tall';
// alert(height);//about 5'10" tall
var age = 33.25;
var temperature = -20;
var negtiveFloat = -20.333333333333;
var married = true;

//数组
var beatles = Array(4);
beatles[0] = 'John Lennon';
beatles[1] = 'Paul';
beatles[2] = 'George';
beatles[3] = 'Ringo';
// alert(beatles);//John Lennon,Paul,George,Ringo

var strings = Array('John', "Paul", "George", "Ringo");
var years = [1987, 2002, 2006, 2010, 2015];
var lennon = ['John', 1940, false];

var lennon = Array();
lennon['name'] = 'John';
lennon['birth'] = 1940;
lennon['living'] = false;

// alert(lennon['name']);//John

var lennon = Object();
lennon.name = "John Lennon";
lennon.birth = 1940;
lennon.living = false;

var lennon = {name: "John Lennon", birth: 1940, living: false};
// alert(lennon);//[object Object]

var beatles = {};
beatles.vocalist = lennon;
alert(beatles.vocalist.name);


