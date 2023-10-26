const fName = prompt('inserisci il tuo nome:', 'Eugen');
console.log(fName);

const lName = prompt('inserisci il tuo cognome:', 'Pps');
console.log(lName);

const color = prompt('inserisci il tuo colore prefe:', 'Black');
console.log(color);

const suffix = '#23';

const Password = `${fName}${lName}${color}${suffix}`;

document.getElementById('fName').innerHTML = `Nome: ${fName}`;
document.getElementById('lName').innerHTML = `Cognome: ${lName}`;
document.getElementById('color').innerHTML = `Colore prefe: ${color}`;
document.getElementById('passgen').innerHTML = `Password: ${Password}`;