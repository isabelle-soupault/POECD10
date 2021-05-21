submit.addEventListener("click", function () {
    if (isNaN(shoeSize.value) == true) {
        alert('Votre pointure doit est un nombre :)');
    }
    else if (isNaN(yearOfBirth.value) == true) {
        alert('Votre année de naissance doit être un nombre :)');
    } else {
        let result = ((((shoeSize.value * 2) + 5) * 50) - yearOfBirth.value) + 1766;
        alert(result);
    }
});