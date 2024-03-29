const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// partie supérieure obligatoire

rl.question("Saisir votre age ? ", (age) => {
  // logique habituelle
  if (age >= 18) {
    console.log("Vous êtes majeur");
    // console.log(age);
  } else if (age < 18) {
    console.log("Vous êtes mineur");
  }

  // ligne suivante obligatoire
  rl.close();
});