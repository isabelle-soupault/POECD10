/* document.addEventListener("submit", function () {
    let firstNumber = Math.trunc(document.getElementById('firstNumber').value);
    let secondNumber = document.getElementById('secondNumber').value);

alert(firstNumber * secondNumber);

});

Manque la gestion des chiffre entiers*/

/* if (Number.isInteger(firstNumber)) {
    alert('Le premier chiffre doit obligatoirement être un choffre à virgule')
} else {
    alert('super !)')
};
 */

/* if ((parseFloat(firstNumber) == parseInt(firstNumber)) && !isNaN(firstNumber)) {
    alert("firstNumber est un entier");
} else {
    alert("firstNumber n'est pas un entier");
}; */

document.addEventListener("submit", function () {
    if (isNaN(firstNumber.value) == true) {
        alert('Vous devez saisir un chiffre');
    }
    else {
        alert('Vous avez un chiffre');
    };
});
