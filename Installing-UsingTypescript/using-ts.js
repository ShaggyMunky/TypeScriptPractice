//some linting errors are from the js-only file since the same variables exist
var button = document.querySelector("button");
var input1 = document.getElementById("num1"); //! means will never yield null and second part is typecasting
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
