//To create a header to diaplay for game
document.getElementById("root").style.textAlign = "center";
var header = document.createElement("h1");
var textnode = document.createTextNode("Hey lets play");
header.appendChild(textnode);
document.getElementById("root").appendChild(header);
//To create a start button
var start = document.createElement("BUTTON");
var t = document.createTextNode("Start");
start.appendChild(t);
start.style.backgroundColor = "green";
start.style.width = "108px";
document.body.appendChild(start);
var b = document.createElement("br");
document.body.appendChild(b);
//lets computer generate a random unique 4 digits number
var a = [];
var u = [];
for (var i = a.length; i <= 4; i++) {
  var r = Math.floor(Math.random() * 10);
  var n = a.includes(r.toString());
  // console.log(n,r);
  if (n.toString() == "false") {
    a.push(r.toString());
    //console.log(a);
    i = a.length;
  }
  i = a.length;
}
console.log("a", a);
//when start button click have to enter the new page and start the game
//function to create input tag and its style
function gameBoard() {
  var label = document.createElement("h4");
  label.innerHTML = "Enter the 4 digit numbers";
  label.style.marginTop = "99px";
  document.body.appendChild(label);
  //only one start so disable it
  start.onclick = "disable";
  //to getting input from user
  var input = document.createElement("INPUT");
  input.setAttribute("id", "userid");
  input.setAttribute("type", "text");
  input.setAttribute("maxlength", "4");
  input.setAttribute("minlength", "4");
  input.setAttribute("size", "10");
  input.style.marginTop = "88px";
  input.style.width = "99px";
  document.body.appendChild(input);
  //submit button
  var submit = document.createElement("BUTTON");
  var sub = document.createTextNode("Submit");
  submit.appendChild(sub);
  submit.setAttribute("id", "enters");
  submit.style.backgroundColor = "green";
  document.body.appendChild(submit);
  //break a line
  var b = document.createElement("br");
  document.body.appendChild(b);
  //when user submit the button to get the value from
  function enterbutton() {
    var uservalue = document.getElementById("userid").value;
    u.push(uservalue);
    console.log(u);
    // var m = u.map((value, index) => {
    var s = uservalue.toString().split("");
    console.log(s);
    if (s.join("") == a.join("")) {
      alert("You win a game");
      console.log(s.join("") == a.join(""));
    }
    //to create a span to display user input---1
    var z1 = document.createElement("span");
    z1.style.borderRadius = "50%";
    z1.style.height = "25px";
    z1.style.width = "25px";
    var n1 = a.includes(s[0]);
    console.log(n, a, s[0]);
    console.log("hi", a.includes(s[0]));
    if (a[0] == s[0]) {
      z1.style.backgroundColor = "green";
    } else if (a.includes(s[0])) {
      z1.style.backgroundColor = "orange";
    } else {
      z1.style.backgroundColor = "black";
    }
    z1.style.borderRadius = "50%";
    var z11 = document.createTextNode(s[0]);
    z1.appendChild(z11);
    document.body.appendChild(z1);
    document.getElementById("userid").value = "";
    //to create a span to display user input----2
    var z2 = document.createElement("span");
    z2.style.borderRadius = "50%";
    z2.style.height = "25px";
    z2.style.width = "25px";
    if (a[1] == s[1]) {
      z2.style.backgroundColor = "green";
    } else if (a.includes(s[1])) {
      z2.style.backgroundColor = "orange";
    } else {
      z2.style.backgroundColor = "black";
    }
    z2.style.borderRadius = "50%";
    var z12 = document.createTextNode(s[1]);
    z2.appendChild(z12);
    document.body.appendChild(z2);
    //to create a span to display user input----3
    var z3 = document.createElement("span");
    z3.style.borderRadius = "50%";
    z3.style.height = "25px";
    z3.style.width = "25px";
    console.log("2", a[2], s[2]);
    if (a[2] == s[2]) {
      z3.style.backgroundColor = "green";
    } else if (a.includes(s[2])) {
      z3.style.backgroundColor = "orange";
    } else {
      z3.style.backgroundColor = "black";
    }
    z3.style.borderRadius = "50%";
    var z13 = document.createTextNode(s[2]);
    z3.appendChild(z13);
    document.body.appendChild(z3);
    //to create a span to display user input----4
    var z4 = document.createElement("span");
    z4.style.borderRadius = "50%";
    z4.style.height = "25px";
    z4.style.width = "25px";
    console.log("3", a[3], s[3]);
    if (a[3] == s[3]) {
      z4.style.backgroundColor = "green";
    } else if (a.includes(s[3])) {
      z4.style.backgroundColor = "orange";
    } else {
      z4.style.backgroundColor = "black";
    }
    z4.style.borderRadius = "50%";
    var z14 = document.createTextNode(s[3]);
    z4.appendChild(z14);
    document.body.appendChild(z4);
    z1, z2, z3, z4.setAttribute("display", "inline-block");
    s = "";
    //break a line
    var b = document.createElement("br");
    document.body.appendChild(b);
    //to make 5 chances of user
    if (u.length == 5) {
      submit.onclick = "disable";
      //to calculate the scorce
      var scorce = 5 - u.length;
      alert("game is over your scorce is" + scorce);
    }
  }
  document.getElementById("enters").onclick = enterbutton;
}
start.onclick = gameBoard;
