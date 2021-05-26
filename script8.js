submit.addEventListener("click", function () {
    if (age.value >= 18) {
        alert("Vous êtes majeur");
    } else {
        alert("Vous êtes mineur");
    };
});


/* submit.addEventListener("click", function () {
    if (age >= 18) {
        result = ("Vous êtes majeur");
    } else {
        let yearsLeft = 18 - age;
        result = ("Vous êtes mineur");
    };
    let p = document.createElement("p")
    p.innerText = result
    body.appendChild(p)
}); */
/* submit.addEventListener("click", function () {
    let age = document.getElementById('age').value;
    if (age >= 18) {
        result = ("Vous êtes majeur");
    } else {
        result = ("Vous êtes mineur");
    };
    let p = document.createElement("p")
    p.innerText = result
    body.appendChild(p);

});
  réponse apparaît bien mais dépop en instant*/


//________________________//
//                        //
//      CORRECTION        //
//________________________//

/*

function calculate (){
    if (age.value >0 && age.value<18 ){
        alert ('Vous êtes mineur');
    }else if (age.value >= 18 && age.value < 116) {
        alert('Vous êtes majeur');
        } else {
            alert('L'age n'est pas très crédible');
        }
    }
}

*/
