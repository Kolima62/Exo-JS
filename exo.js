// Exo1
const NOM = "K";
console.log(NOM);

// exo2
let age = 25;
age +=5;
console.log("J'aurai "+age+" ans dans 5 ans.");

// exo3
const PRENOM = "Malik";
const NOMCOMPLET = `${PRENOM} ${NOM}`;
console.log(NOMCOMPLET)

// exo4
let nombre1 = 6;
let nombre2 = 9;

if (nombre1 == nombre2) {
    console.log(`${nombre1} égalité avec ${nombre2}`);
} else if (nombre1 > nombre2) {
    console.log(`${nombre1} supérieur à ${nombre2}`);
} else {
    console.log("Ne rentre pas dans les conditions")
}