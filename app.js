//  Questions

var data = [
    {
        question: "Q1: Who Created Javascript?",
        ans: "Brendan Eich",
        op1: "James Gosling",
        op2: "Guido Van Rossum",
        op3: "Brendan Eich",
        op4: "Mitchell Baker",
    },
    {
        question: "Q2:  In your JavaScript code, how do you find out which character <br/> occurs at the 5th position in a string 'How are you?'",
        ans: "CharAt()",
        op1: "String()",
        op2: "CharAt()",
        op3: "IndexOf()",
        op4: "StringOf()",
    },
    {

        question: "Q3: Which of the following is the correct syntax of FOR? ",
        ans: "for(initialize; test; increment)",
        op1: "for(increment; test; initialize)",
        op2: "for(test; initialize; increment)",
        op3: "for(initialize; test; increment)",
        op4: "for( initialize; test), increment",
    },
    {
        question: "Q4:The Opposite Of OnMouseOver is:  ",
        ans: "onmouseout",
        op1: "onmouseoff",
        op2: "onblur",
        op3: "onfocus",
        op4: "onmouseout",
    },
    {
        question: "Q5: To insert a JavaScript into an HTML page, which tag is used? ",
        ans: "script",
        op1: "javascript",
        op2: "js",
        op3: "script",
        op4: "script = javascript",
    },
    {
        question: "Q6:How do you call a function named 'myFunction'?",
        ans: "myFunction()",
        op1: "call myFunction()",
        op2: "myFunction()",
        op3: "call function myFunction()",
        op4: "call function",
    },
    {
        question: "Q7: How does Java Script store dates in objects of Date type? ",
        ans: "The number of milliseconds since January 1st, 1970",
        op1: "The number of days since January 1st, 1900",
        op2: "The number of picoseconds since January 1st, 1970",
        op3: "The number of seconds since January 1st, 1970",
        op4: "The number of milliseconds since January 1st, 1970",
    },
    {
        question: "Q8:Which of the following is correct to write 'Hello World' on the web page? ",
        ans: "document.write(Hello World)",
        op1: "System.out.println(Hello World)",
        op2: "document.write(Hello World)",
        op3: "print(Hello World)",
        op4: "response.write(Hello World)",
    },
    {
        question: "Q9:What is the alternate name for Java script? ",
        ans: "ECMAScript",
        op1: "LimeScript",
        op2: "ECMScript",
        op3: "ECMAScript",
        op4: "both b and c",
    },
    {
        question: "Q10: What is the correct syntax for referring to an external script called 'abc.js'? ",
        ans: "script src='abc.js'",
        op1: "script src='abc.js'",
        op2: "script href='abc.js'",
        op3: "script name='abc.js'",
        op4: "script='abc.js'",
    },
    {
        question: "Q11:How do you create a function in JavaScript?",
        ans: "function myFunction()",
        op1: "function:myFunction()",
        op2: "function.create myFunction()",
        op3: "function = myFunction()",
        op4: "function myFunction()",
    },
    {
        question: "Q12: How to write an IF statement in JavaScript? ",
        ans: "if(i==5)",
        op1: "if i=5 then",
        op2: "if i==5 then",
        op3: "if(i==5)",
        op4: "if i = 5",
    },
    {
        question: "Q13: How does a WHILE loop start? ",
        ans: "while(i<=10)",
        op1: "while(i=1 to 10)",
        op2: "while(i<=10)",
        op3: "while(i<=10;i++)",
        op4: "while(i=0,i<10)",
    },
    {
        question: "Q14:How can you add a comment in a JavaScript? ",
        ans: "//this is comment",
        op1: "#thisiscomment",
        op2: "!-- this is comment-->",
        op3: "//this is comment",
        op4: "'this is comment'",
    },
    {
        question: "Q15:What is the correct way to write a JavaScript array?",
        ans: "var colors = ['red', 'green', 'blue']",
        op1: " var colors = 'red', 'green', 'blue'",
        op2: " var colors = 1 = ('red'), 2 = ('green'), 3 ('blue')",
        op3: " var colors = (1:'red', 2:'green', 3:'blue')",
        op4: "var colors = ['red', 'green', 'blue']",
    },
    {
        question: "Q16: How do you round the number 7.25, to the nearest integer?",
        ans: " Math.round(7.25)",
        op1: " Math.rnd(7.25)",
        op2: " round(7.25)",
        op3: " Math.round(7.25)",
        op4: " rnd(7.25)",
    },
    {
        question: "Q17:What will the following code return: Boolean(10 > 9)",
        ans: "true",
        op1: "true",
        op2: "NaN",
        op3: "undefined",
        op4: "false",
    },
    {
        question: "Q18:Which operator is used to assign a value to a variable? ",
        ans: "=",
        op1: "*",
        op2: "X",
        op3: "=",
        op4: "-",
    },
    {
        question: "Q19: Which of the following is not a valid JavaScript variable name?",
        ans: "2java",
        op1: "2java",
        op2: "javaandjava",
        op3: "_java",
        op4: "none of the above",
    },
    {
        question: "Q20:JavaScript File Has An Extension of:",
        ans: ".js",
        op1: ".javascript",
        op2: ".js",
        op3: ".xml",
        op4: ".java",
    },
]

//  SignUp Function

function signup() {
    var user = document.getElementById("username");
    var pass = document.getElementById("password");
    var e_mail = document.getElementById("e-mail");
    var Pnumber = document.getElementById("Pnumber");
    if (user.value === "" || pass.value === "" || e_mail.value === "" || Pnumber === "") {
        swal("Please Enter Complete Information");
    }
    else {
        localStorage.setItem("username", user.value);
        localStorage.setItem("password", pass.value);
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e_mail.value)) {
            localStorage.setItem("E-mail", e_mail.value);
            if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(Pnumber.value)) {
                localStorage.setItem("Pnumber", Pnumber.value);
                swal("Congratulation!", "Your Account Is Created!", "success");
            } else {
                swal("Invalid Phone Number")
            }
        } else {
            swal("invalid email")
        }

    }
}

// Login Function

function login() {
    var users = document.getElementById("userlogin").value;
    var passs = document.getElementById("passlogin").value;

    var user1 = localStorage.getItem("username");
    var pass1 = localStorage.getItem("password");
    if (users !== "" && passs !== "") {
        if (users === user1 && passs === pass1) {
            window.location = "page1.html"
        }
        else {
            swal("Account Not Found!")
        }
    }
    else {
        swal("Please Enter Username And Password!")
    }
    // console.log(user1+ "<br/>"+pass1)

}
window.onkeydown = function () {
    if (event.keyCode === 13) {
        login()
    }
}

var myVar;
// PreLoader Function

function myFunction() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}
// window.onkeydown = function(){
//     if(event.keyCode === 13){
//         signup()
//     }
// }

//  Quiz.html Page

function start() {
    window.location = "quiz.html";
    timer()
}

var question = document.getElementById("question");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");
var count = 0;
//  Show First Question

function showquiz() {
    start1();
    question.innerHTML = data[count].question
    op1.innerHTML = data[count].op1
    op2.innerHTML = data[count].op2
    op3.innerHTML = data[count].op3
    op4.innerHTML = data[count].op4

}

var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var input = document.querySelectorAll(".value");
var score = 0;
var total = 40;


//  Check Answer



function checkanswer() {
    for (i = 0; i < input.length; i++) {
        if (input[i].checked === true) {
            if (input[i].value == data[count].ans) {
                score += 2
                localStorage.setItem("score", score)


            }

        }
    }

}

//  Show Next Questions



function nextquestion() {
    if (count < data.length - 1) {

        a.value = data[count].op1
        b.value = data[count].op2
        c.value = data[count].op3
        d.value = data[count].op4
        checkanswer()
        count++
        showquiz()
        remove()
    }
    else {
        window.location = "result.html"
    }
}


//  Remove Checked 

function remove() {
    for (i = 0; i < input.length; i++) {
        input[i].checked = false
    }
}

//  result.html

function generatestuff(image) {

    var con = document.getElementById("con")
    var img = document.getElementById("img")
    img.src = image
    con.appendChild(img)
}
var heading = document.getElementById("heading1")

//  Calculate Score


function scores() {

    var per = ((localStorage.getItem("score")) / total) * 100
    if (per < 70) {
        generatestuff("assets/fail1.png")
        heading.innerHTML = "Failed!<br/> <br/>You Got " + per + "%"
    } else {
        generatestuff("assets/pass.png")
        heading.innerHTML = "Congratulations!<br/> <br/>You Got " + per + "%"


    }
}

function again() {
    localStorage.setItem("score", 0);
    window.location = "index.html"
}


// --------------------- Timer---------------------------------------

var min = 30;
var sec = 60
var minhead = document.getElementById("min");
var sechead = document.getElementById("sec");

var interval = null

function start1() {
    if (interval !== null) {
        clearInterval(interval)
    }
    interval = setInterval(timer, 1000)
}
function timer() {
    sec--
    sechead.innerHTML = sec;
    if (sec == 0) {
        min--
        minhead.innerHTML = min
        sec = 60
        if (min >= 0) {
            timer()
        }
        else {
            alert("Finished")
            clearinterval1()
        }
    }

}
function pause() {
    clearInterval(interval)
}
function clearinterval1() {
    min = 3
    sec = 60
    minhead.innerHTML = min;
    sechead.innerHTML = sec;
    pause()
}