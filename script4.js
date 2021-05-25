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
    /*     alert("Nom : " + lastName + "\n" +
            "Prénom : " + firstName + \n" +
            "Ville : " + city + "\n");
     */
    alert(`Nom : ${lastName} \n Prénom : ${firstName} \n Ville : ${city}`)
});

// ------------------------//
//      CORRECTION        //
//________________________//

/*

 1 - Rajouter dans le HTML onclick="showserInfo()"
 pour créer la fonction que l'on va appliquer dans le fichier JS

 2 - Créer la fonction
 function showUserInfo(){
    let lastName = document.getElementById("lastname").value;
    let firstName = document.getElementById("firstname").value;
    let city = document.getElementById("city").value;
alert(`Nom : ${lastName} \n Prénom : ${firstName} \n Ville : ${city}`);


on peut donc passer / skipper le document.getElementById("")
 }

les lignes 41 à 43 peuvent être réduites.
let lastNameValue = lastname.value;
let firstNameValue = firstname.value;
let cityValue = city.value
En effet, le navigateur charge de base de nombreuses informations

Ce qui va donc donner in finé :
 function showUserInfo(){
let lastNameValue = lastname.value;
let firstNameValue = firstname.value;
let cityValue = city.value;

alert(`Nom : ${lastName} \n Prénom : ${firstName} \n Ville : ${city}`);

 }

*/
