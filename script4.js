// const lastName = document.getElementsbyId('lastname');
/* const firstName = document.getElementsbyId('firstname');
const city = document.getElementsbyId('city'); */
/* const lastName;
const firstName;
const city;

function getValue() {
    let lastName = document.getElementsById("lastname").value;
    let firstName = document.getElementsById("firstname").value;
    let city = document.getElementsById("city").value;
    alert(lastName + firstName + city);
} */

/* const lastName = document.getElementById("lastname").value;
const firstName = document.getElementById("firstname").value;
const city = document.getElementById("city").value;
alert('nom : ' + lastName + '\n' +
    'prénom : ' + firstName + '\n' +
    'ville : ' + city + '\n');
 */

document.addEventListener("submit", function () {
    let lastName = document.getElementById("lastname").value;
    let firstName = document.getElementById("firstname").value;
    let city = document.getElementById("city").value;
    alert('Nom : ' + lastName + '\n' +
        'Prénom : ' + firstName + '\n' +
        'Ville : ' + city + '\n');

});
