document.addEventListener("submit", function () {
    let firstNumber = Math.trunc(document.getElementById('firstNumber').value);
    let secondNumber = Math.trunc(document.getElementById('secondNumber').value);


    alert(firstNumber * secondNumber);

});