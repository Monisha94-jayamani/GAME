//To create a header to diaplay for game
document.getElementById("root").style.textAlign = "center";
var header = document.createElement("h1");
var textnode = document.createTextNode("Number guessing game......let's play");
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
   console.log("number",n,r);
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
    if(uservalue.length!==4)
    {
      alert("kindly enter 4 digit number")
    }
    else
    {
    u.push(uservalue);
    console.log(u);
    // var m = u.map((value, index) => {
    var s = uservalue.toString().split("");
    console.log(s);
    if (s.join("") == a.join("")) {
      var scorce = 5 - u.length;
      console.log("scorce",scorce)
      submit.onclick = "disable";
      alert("You win a game");
      
      console.log(s.join("") == a.join(""));
    }
    if(s.join("")==a.join("") && u.length!==5)
    {
        //to calculate the scorce
      var scorce = 6 - u.length;
      console.log("scorce is"+scorce)
      var s1= document.createElement("h4");
      var text1 = document.createTextNode("your scorce is"+ scorce);
      s1.appendChild(text1);
      document.getElementById("root").appendChild(s1);
    }
    //to create a span to display user input---1
    //document.getElementById("myText").value = "Johnny Bravo";
    var z1 = document.createElement("input");
    z1.setAttribute("id", "number1");
    z1.setAttribute("color", "white");
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
      z1.style.backgroundColor = "red";
      z1.setAttribute("color", "white");
    }
    z1.style.borderRadius = "50%";
    z1.setAttribute("value", s[0]);

    //  z1.appendChild(z11);
    document.body.appendChild(z1);
    document.getElementById("userid").value = "";
    //to create a span to display user input----2
    var z2 = document.createElement("input");
    z2.setAttribute("id", "number2");
    z2.setAttribute("color", "white");
    z2.style.borderRadius = "50%";
    z2.style.height = "25px";
    z2.style.width = "25px";
    if (a[1] == s[1]) {
      z2.style.backgroundColor = "green";
    } else if (a.includes(s[1])) {
      z2.style.backgroundColor = "orange";
    } else {
      z2.style.backgroundColor = "red";
      z2.setAttribute("color", "white");
    }
    z2.style.borderRadius = "50%";
    z2.setAttribute("value", s[1]);
    document.body.appendChild(z2);
    //to create a span to display user input----3
    var z3 = document.createElement("input");
    z3.setAttribute("id", "number3");
    z3.setAttribute("color", "white");
    z3.style.borderRadius = "50%";
    z3.style.height = "25px";
    z3.style.width = "25px";
    if (a[2] == s[2]) {
      z3.style.backgroundColor = "green";
    } else if (a.includes(s[2])) {
      z3.style.backgroundColor = "orange";
    } else {
      z3.style.backgroundColor = "red";
      z3.setAttribute("color", "white");
    }
    z3.style.borderRadius = "50%";
    z3.setAttribute("value", s[2]);
    document.body.appendChild(z3);
    //to create a span to display user input----4
    var z4 = document.createElement("input");
    z4.setAttribute("id", "number4");
    z4.setAttribute("color", "white");
    z4.style.borderRadius = "50%";
    z4.style.height = "25px";
    z4.style.width = "25px";
    if (a[3] == s[3]) {
      z4.style.backgroundColor = "green";
    } else if (a.includes(s[3])) {
      z4.style.backgroundColor = "orange";
    } else {
      z4.style.backgroundColor = "red";
      z4.setAttribute("color", "white");
    }
    z4.style.borderRadius = "50%";
    z4.setAttribute("value", s[3]);
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
      var scorce = 6 - u.length;
      console.log("scorce is"+scorce)
      var s= document.createElement("h4");
      var text = document.createTextNode("your scorce is"+ scorce);
      s.appendChild(text);
      document.getElementById("root").appendChild(s);
      alert("game is over your");
    }

  }
}

  document.getElementById("enters").onclick = enterbutton;
}
start.onclick = gameBoard;
