let button = document.querySelectorAll("button");
let input = document.querySelector("#display-answer");

let ans = "";
// buttons ka array

let arr = Array.from(button); // ye hume button ka array bana k dedega

// we can't use for each loop in button, but we can use it in array

arr.forEach((button) => {
  button.addEventListener("click", (evt) => {
    if (evt.target.innerHTML == "=") {
      ans = eval(ans);
      input.value = ans;
    } else if (evt.target.innerHTML == "RESET") {
      ans = "";
      input.value = ans;
    } else if (evt.target.innerHTML == "DEL") {
      ans = ans.substring(0, ans.length - 1);
      input.value = ans;
    } else {
      ans += evt.target.innerHTML;
      input.value = ans;
    }
  });
});
