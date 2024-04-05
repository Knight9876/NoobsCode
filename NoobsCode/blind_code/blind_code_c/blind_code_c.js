var code = document.querySelector(".code");
var textarea = document.getElementById("write");
var start_button = document.querySelector(".start-button");
var submit_button = document.querySelector(".submit-button");
var pop = document.getElementById("pop");
var pop_up = document.getElementById("pop-up");
var rules = document.querySelector(".rules");
var compiler = document.querySelector(".compiler");
var timer = document.querySelector(".timer");
var inputs = document.querySelector(".inputs");
var minutes = document.getElementById("minutes");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");
var second = document.getElementById("second");
var single_digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var checking_code, time, audio;

function c() {
  let c_display_code_1 = `#include stdio.h<br>
int main() {<br>
<p class = "indent">
int a = 1;<br>
int b = 2;<br>
printf(a + b);<br>
return 0;<br>
</p>
}`;

  let c_display_code_2 = `#include stdio.h<br>
int main() {<br>
<p class = "indent">
int a = 1;<br>
int b = 2;<br>
printf(a - b);<br>
return 0;<br>
</p>
}`;

  let c_display_code_3 = `#include stdio.h<br>
int main() {<br>
<p class = "indent">
int a = 1;<br>
int b = 2;<br>
printf(a * b);<br>
return 0;<br>
</p>
}`;

  let c_display_code_4 = `#include stdio.h<br>
int main() {<br>
<p class = "indent">
int a = 1;<br>
int b = 2;<br>
printf(a / b);<br>
return 0;<br>
</p>
}`;

  let c_display_code_5 = `#include stdio.h<br>
int main() {<br>
<p class = "indent">
int a = 1;<br>
int b = 2;<br>
printf(a % b);<br>
return 0;<br>
</p>
}`;

  let c_display_code = [
    c_display_code_1,
    c_display_code_2,
    c_display_code_3,
    c_display_code_4,
    c_display_code_5,
  ];

  var index = Math.floor(Math.random() * c_display_code.length);

  var random_c_display_code = c_display_code[index];
  code.innerHTML = random_c_display_code;

  let c_checking_code_1 = `#include stdio.h
int main() {
int a = 1;
int b = 2;
printf(a + b);
return 0;
}`;

  let c_checking_code_2 = `#include stdio.h
int main() {
int a = 1;
int b = 2;
printf(a - b);
return 0;
}`;

  let c_checking_code_3 = `#include stdio.h
int main() {
int a = 1;
int b = 2;
printf(a * b);
return 0;
}`;

  let c_checking_code_4 = `#include stdio.h
int main() {
int a = 1;
int b = 2;
printf(a / b);
return 0;
}`;

  let c_checking_code_5 = `#include stdio.h
int main() {
int a = 1;
int b = 2;
printf(a % b);
return 0;
}`;

  let c_checking_code = [
    c_checking_code_1,
    c_checking_code_2,
    c_checking_code_3,
    c_checking_code_4,
    c_checking_code_5,
  ];

  let random_c_checking_code = c_checking_code[index];
  return random_c_checking_code;
}

function start() {
  rules.style.visibility = "hidden";
  textarea.style.visibility = "visible";
  textarea.value = "";
  start_button.style.visibility = "hidden";
  submit_button.style.visibility = "visible";
  textarea.style.color = "transparent";
  textarea.readOnly = false;
  textarea.focus();
  checking_code = c();
  timer.style.visibility = "visible";
  inputs.style.visibility = "hidden";
  setTimer();
}

// function check() {
  var error_array = [];
  var checking_code_words_array = [];
  var textarea_words_array = [];
  clearInterval(time);
  let checking_code_array = checking_code.split("\n");
  let textarea_array = textarea.value.split("\n");
  console.log(checking_code_array, textarea_array)

  for (let i = 0; i < checking_code_array.length; i++) {
    var word_array = []
    word_array.push(checking_code_array[i].split(" "))
    checking_code_words_array.push(word_array)    
  }
  for (let i = 0; i < textarea_array.length; i++) {
    var word_array = []
    word_array.push(textarea_array[i].split(" "))
    textarea_words_array.push(word_array)    
  }
  console.log(checking_code_words_array, textarea_words_array);

  correct = 0;
  for (var i = 0; i < checking_code_words_array.length; i++) {
    var len = checking_code_words_array[i]
    console.log(len);
    for (let j = 0; j < checking_code_words_array[i].length; j++) {
      if (textarea_words_array[j] == checking_code_words_array[j]) {
        continue;
      } else {
        correct++;
        if (textarea.value != "") {
          error_array.push(i, j, textarea_words_array[i][j]);
        }
        // var red = textarea.value[i]
        // red.style.color = "red"
      }
    }
    console.log(error_array)
  }
  compiler.style.visibility = "visible";

  if (correct == 0) {
    compiler.innerHTML = compiler.innerHTML + "Congratulations!!! You got it CORRECT!!!"
  }

  if (textarea.value == "") {
  } else {
    for (let i = 0; i < error_array.length; i += 3) {
      compiler.innerHTML = compiler.innerHTML + `In line ${error_array[i] + 1}, ` + `${error_array[i + 1] + 1} word` + "<br>";
    }
  }
  // pop.innerHTML = `There are total <span>${correct}</span> errors !!!`;
  // pop_up.style.visibility = "visible"
  // start_button.style.visibility = "hidden";
  // submit_button.style.visibility = "hidden";
  textarea.readOnly = true;
  textarea.style.backgroundColor = "transparent";
  textarea.style.color = "white";
  textarea.style.borderStyle = "double";
// }

function check() {
  var error_array = [];
  clearInterval(time);
  let checking_code_array = checking_code.split(" ");
  let textarea_array = textarea.value.split(" ");
  correct = 0;
  for (var i = 0; i <= checking_code_array.length; i++) {
    if (textarea_array[i] == checking_code_array[i]) {
      continue;
    } else {
      correct++;
      if (textarea_array[i] != undefined) {
        error_array.push(textarea_array[i], i);
      }
      // var red = textarea.value[i]
      // red.style.color = "red"
    }
  }
  compiler.style.visibility = "visible";

  if (correct == 0) {
    compiler.innerHTML = compiler.innerHTML + "Congratulations!!! You got it CORRECT!!!"
  }

  if (textarea.value == "") {
  } else {
    for (let i = 0; i < error_array.length; i += 2) {
      compiler.innerHTML =
        compiler.innerHTML +
        `${error_array[i + 1] + 1}` +
        " word, " +
        error_array[i] +
        "<br>";
    }
  }
  // pop.innerHTML = `There are total <span>${correct}</span> errors !!!`;
  // pop_up.style.visibility = "visible"
  // start_button.style.visibility = "hidden";
  // submit_button.style.visibility = "hidden";
  textarea.readOnly = true;
  textarea.style.backgroundColor = "transparent";
  textarea.style.color = "white";
  textarea.style.borderStyle = "double";
}

function tryAgain() {
  location.reload();
}

function setTimer() {
  if (minute.value in single_digit) {
    minute.value = `0${minute.value}`;
  }

  if (second.value in single_digit) {
    second.value = `0${second.value}`;
  }

  var mins = (minutes.innerHTML = minute.value);
  var secs = (seconds.innerHTML = second.value);

  if (minute.value == "" || second.value == "") {
    alert("Please enter a number !!!");
    location.reload();
  } else {
    if (mins == 0) {
      mins = "00";
    }

    if (secs == 0) {
      secs = "00";
    }

    if (secs >= 60) {
      secs = 59;
    }

    if (mins >= 60) {
      mins = 59;
    }

    if (secs <= -1) {
      secs = "00";
    }

    if (mins <= -1) {
      mins = "00";
    }

    time = setInterval(() => {
      if (secs == "00") {
        if (mins == "00") {
          check();
          audio = new Audio("../../popup.mp3");
          audio.play();
        } else {
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
      } else {
        secs -= 1;
        if (secs < 10) {
          secs = `0${secs}`;
        }
        seconds.innerHTML = secs;
      }

      if (mins == 0 && secs < 11) {
        timer.style.color = "orange";
        audio = new Audio("../../countdown.mp3");
        audio.play();
      }
    }, 1000);
  }
}
