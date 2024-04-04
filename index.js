marche = true;
while (marche === true) {
  function palindrome() {
    let mot = prompt("Entrez votre mot(svp).");

    // regex => pattern
    while (!/^[a-zA-Z]+$/.test(mot)) {
      mot = prompt("Veuillez saisir un mot uniquement composé de lettres : ");
    }

    const majuscule = mot.toUpperCase();

    const mot_tableau = majuscule.split("");

    const tableau_envers = mot_tableau.reverse();

    const mot_envers = tableau_envers.join("");
    const est_palindrome = `Le mot ${mot} est un palindrome!`;
    const pas_palindrome = `Le mot ${mot} n'est pas un palindrome...`;
    const resultat = majuscule === mot_envers ? est_palindrome : pas_palindrome;
    console.log(resultat);
  }
  palindrome();

  let retry = prompt("Voulez-vous réessayer ? Entrez 'oui' ou 'non' : ");
  if (retry === "non") {
    console.log("Au revoir");
    marche = false;
  } else if (retry === "oui") {
  } else {
    let retry = prompt("Il faut entrer 'oui' ou 'non' : ");
  }
}
