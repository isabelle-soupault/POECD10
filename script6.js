
submit.addEventListener("click", function () {
    let result = firstNumber.value % secondNumber.value
    let p = document.createElement("p")
    p.innerText = result
    body.appendChild(p)
});

// function leftoverResult() {

/* document.addEventListener("submit", function () {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    alert(firstNumber % secondNumber);

});
 */
// };


/* let x = functionLeftOver(document.getElementById("firstNumber").value, document.getElementById("secondNumber").value);
function functionLeftOver(a, b) {
    return a % b;
}
alert(x); */

//  erreur => NAN
// document.getElementById("resultLeftOver").innerHTML = x;


// function functionLeftOver(x, y) {

//     x = parseInt(document.getElementById("firstNumber").value);
//     y = parseInt(document.getElementById("secondNumber").value);
//     let result = x % y;

//     // document.getElementById("txtresult").value = result;
//     alert(result);
// };

