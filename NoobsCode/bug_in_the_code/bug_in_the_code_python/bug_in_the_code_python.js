var textarea = document.getElementById("write");
var start_button = document.querySelector(".start-button")
var submit_button = document.querySelector(".submit-button")
var pop = document.getElementById("pop")
var pop_up = document.getElementById("pop-up")
var timer = document.querySelector(".timer")
var inputs = document.querySelector(".inputs")
var minutes = document.getElementById("minutes")
var minute = document.getElementById("minute")
var seconds = document.getElementById("seconds")
var second = document.getElementById("second")
var single_digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var checking_code, time, audio

function python() {
    let python_display_code_1 = `a = 1
print(a + b)
b = 2`;

    let python_display_code_2 = `b = 2
print(a - b)
a = 1`;

    let python_display_code_3 = `a = 1
print(a * b)
b = 2`;

    let python_display_code_4 = `a = 1
print(a // b)
b = 2`;

    let python_display_code_5 = `print(a % b)
a = 1
b = 2`;

    let python_display_code = [
        python_display_code_1,
        python_display_code_2,
        python_display_code_3,
        python_display_code_4,
        python_display_code_5,
    ];

    let index = Math.floor(Math.random() * python_display_code.length);

    let random_python_display_code = python_display_code[index];
    textarea.value = random_python_display_code;

    let python_checking_code_1 = `a = 1
b = 2
print(a + b)`;

    let python_checking_code_2 = `a = 1
b = 2
print(a - b)`;

    let python_checking_code_3 = `a = 1
b = 2
print(a * b)`;

    let python_checking_code_4 = `a = 1
b = 2
print(a // b)`;

    let python_checking_code_5 = `a = 1
b = 2
print(a % b)`;

    let python_checking_code = [
        python_checking_code_1,
        python_checking_code_2,
        python_checking_code_3,
        python_checking_code_4,
        python_checking_code_5,
    ];

    let random_python_checking_code = python_checking_code[index];
    return random_python_checking_code;
}

function start() {
    start_button.style.visibility = "hidden";
    submit_button.style.visibility = "visible";
    textarea.readOnly = false;
    textarea.focus();
    checking_code = python();
    timer.style.visibility = "visible"
    inputs.style.visibility = "hidden"
    setTimer();
}

function check() {
    clearInterval(time)
    correct = 0;
    for (var i = 0; i <= checking_code.length; i++) {
        if (textarea.value[i] == checking_code[i]) {
            continue;
        } else {
            correct++;
            // var red = textarea.value[i]
            // red.style.color = "red"
        }
    }
    pop.innerHTML = `There are total <span>${correct}</span> errors !!!`;
    pop_up.style.visibility = "visible"
    start_button.style.visibility = "hidden";
    submit_button.style.visibility = "hidden";
    textarea.readOnly = true    
    textarea.style.backgroundColor = "transparent"
    textarea.style.color = "white"
    textarea.style.borderStyle = "double"
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