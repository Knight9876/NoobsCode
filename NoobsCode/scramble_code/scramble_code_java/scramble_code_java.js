var textarea = document.getElementById("write");
var start_button = document.querySelector(".start-button")
var submit_button = document.querySelector(".submit-button")
var pop = document.getElementById("pop")
var pop_up = document.getElementById("pop-up")
var compiler = document.querySelector(".compiler")
var rules = document.querySelector(".rules")
var timer = document.querySelector(".timer")
var inputs = document.querySelector(".inputs")
var minutes = document.getElementById("minutes")
var minute = document.getElementById("minute")
var seconds = document.getElementById("seconds")
var second = document.getElementById("second")
var single_digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var checking_code, time, audio

function java() {
    let java_display_code_1 = `}
int a = 1;
public static void main(String args[]) {
System.out.println(a + b);    
int b = 2;
}
class Addition {`;

    let java_display_code_2 = `System.out.println(a - b);
int b = 2;
public static void main(String args[]) {    
class Subtraction {
}
}
int a = 1;`;

    let java_display_code_3 = `}
public static void main(String args[]) {
class Multiplication {
System.out.println(a * b);
int a = 1;
}
int b = 2;`;

    let java_display_code_4 = `System.out.println(a / b);    
class Division {
int a = 1;
}
int b = 2;
}
public static void main(String args[]) {`;

    let java_display_code_5 = `class Modulo_Division {
int b = 2;
System.out.println(a % b);    
}
}
int a = 1;
public static void main(String args[]) {
`;

    let java_display_code = [
        java_display_code_1,
        java_display_code_2,
        java_display_code_3,
        java_display_code_4,
        java_display_code_5,
    ];

    let index = Math.floor(Math.random() * java_display_code.length);

    let random_java_display_code = java_display_code[index];
    textarea.value = random_java_display_code;

    let java_checking_code_1 = `class Addition {
public static void main(String args[]) {
int a = 1;
int b = 2;
System.out.println(a + b);
}
}`;

    let java_checking_code_2 = `class Subtraction {
public static void main(String args[]) {
int a = 1;
int b = 2;
System.out.println(a - b);
}
}`;

    let java_checking_code_3 = `class Multiplication {
public static void main(String args[]) {
int a = 1;
int b = 2;
System.out.println(a * b);
}
}`;

    let java_checking_code_4 = `class Division {
public static void main(String args[]) {
int a = 1;
int b = 2;
System.out.println(a / b);
}
}`;

    let java_checking_code_5 = `class Modulo_Division {
public static void main(String args[]) {
int a = 1;
int b = 2;
System.out.println(a % b);
}
}`;

    let java_checking_code = [
        java_checking_code_1,
        java_checking_code_2,
        java_checking_code_3,
        java_checking_code_4,
        java_checking_code_5,
    ];

    let random_java_checking_code = java_checking_code[index];
    return random_java_checking_code;
}

function start() {
    textarea.style.visibility = "visible"
    rules.style.visibility = "hidden"
    start_button.style.visibility = "hidden";
    submit_button.style.visibility = "visible";
    textarea.readOnly = false;
    textarea.focus();
    checking_code = java();
    timer.style.visibility = "visible"
    inputs.style.visibility = "hidden"
    setTimer();
}

function check() {
    var error_array = [];
    clearInterval(time);
    let checking_code_array = checking_code.split("\n");
    let textarea_array = textarea.value.split("\n");
    correct = 0;
    for (var i = 0; i <= checking_code_array.length; i++) {
      if (textarea_array[i] == checking_code_array[i]) {
        continue;
      } else {
        correct++;
        error_array.push(textarea_array[i], i);
        // var red = textarea.value[i]
        // red.style.color = "red"
      }
    }
    compiler.style.visibility = "visible";
  
    if (correct == 0) {
      compiler.innerHTML =
        compiler.innerHTML + "Congratulations!!! You got it CORRECT!!!";
    }
  
    if (textarea.value == "") {
    } else {
      for (let i = 0; i < error_array.length; i += 2) {
        compiler.innerHTML =
          compiler.innerHTML +
          `${error_array[i + 1] + 1}` +
          " line, " +
          error_array[i] +
          "<br>";
      }
    }
  //   pop.innerHTML = `There are total <span>${correct}</span> errors !!!`;
  //   pop_up.style.visibility = "visible";
    start_button.style.visibility = "hidden";
    submit_button.style.visibility = "hidden";
    textarea.readOnly = true;
    textarea.style.backgroundColor = "transparent";
    textarea.style.color = "white";
    textarea.style.borderStyle = "double";
  }

function tryAgain() {
    location.reload()
}

function setTimer() {
    if (minute.value in single_digit) {
        minute.value = `0${minute.value}`;
    }
    
    if (second.value in single_digit) {
        second.value = `0${second.value}`;
    }
    
    var mins = minutes.innerHTML = minute.value
    var secs = seconds.innerHTML = second.value
    console.log(minute.value)

    if (minute.value == "" || second.value == "") { 
        alert("Please enter a number !!!");
        location.reload()
    }
    else {
        if (mins == 0) {
            mins = "00";
        }

        if (secs == 0) {
            secs = "00";
        }
        
        if(secs >= 60) {
            secs = 59;
        }
        
        if(mins >= 60) {
            mins = 59;
        }

        if (secs <= -1) {
            secs = "00";
        }
        
        if (mins <= -1) {
            mins = "00";
        }

        time = setInterval ( () => {
            if (secs == "00") {
                if (mins == "00") {
                    check();
                    audio = new Audio("../../popup.mp3")
                    audio.play()

                }
                else {
                    mins -= 1;
                    secs = 59;
                    if (mins <= -1) {
                        mins = "00";
                    }
                    if (mins < 10) {
                        mins = `0${mins}`;
                    }
                    minutes.innerHTML = mins;
                    seconds.innerHTML = secs;
                }
            }
            else {
                secs -= 1;
                if (secs < 10) {
                    secs = `0${secs}`;
                }
                seconds.innerHTML = secs;
            } 
            
            if (mins == 0 && secs < 11) {
                timer.style.color = "orange"
                audio = new Audio("../../countdown.mp3")
                audio.play()
            }
        }, 1000);
    }
}