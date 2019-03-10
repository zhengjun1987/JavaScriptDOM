if (1 + 1 != 2) {
    // alert("The world has gone mad!");
} else {
    // alert("All is well with the world!");
}//All is well with the world!

if (11) alert("11 is true");//11 is true
var anonymous;
if (anonymous) {
    // alert("unonymous is true!");
} else {
    // alert("unonymous is false!");
}

var my_mood = "happy";
var your_mood = my_mood;

if (my_mood = your_mood) {
    // alert("We feel the same!")
} else {
    // alert("We feel differently!")
}
anonymous = "";
your_mood = my_mood;
alert("your_mood == my_mood:"+(your_mood == my_mood));//your_mood == my_mood:true
alert("anonymous == undefined:"+(anonymous == undefined));//anonymous == undefined:true
alert("anonymous == false:"+(anonymous == false));//anonymous == false:false
alert("your_mood === my_mood:"+(your_mood === my_mood));//your_mood === my_mood:true
alert("anonymous === undefined:"+(anonymous === undefined));//anonymous === undefined:true
alert("anonymous === false:"+(anonymous === false));//anonymous === false:false

var number = 7;
if (number >= 5 && number <= 10) {
    alert("The number is in the right range")
}

var count = 0;
while (count < 100) {
    alert(count);
    count++;
}

count = 0;
do {
    count++;
    alert(count);
} while (count < 100);

for (var i = 0; i < 100; i++) {
    alert(i);
}

var beatles = ['John','Paul','George','Ringe'];
for (var member in beatles) {
    alert(beatles[member]);
}
