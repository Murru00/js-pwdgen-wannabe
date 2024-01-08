//TITLE

const resultElement = document.getElementById('main-title');

//NAME

const firstName =(prompt ( 'Inserisci il tuo Nome'));
console.log(firstName);


//SURNAME

const surname =  (prompt ( 'Inserisci il tuo Cognome'));
console.log(surname);



//COLOR

const color =  (prompt ( 'Inserisci il tuo colore preferito'));
console.log(color);


// PASSWORD GENERATOR

const password = firstName + surname + color + '23';
console.log(password);

alert ('Sicuro di utilizzare questa password anche se è insicura? La tua passord è'  + password);






