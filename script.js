console.log("Laboratoire prêt !");

const nom = "Camille";
let age = 18;


const motDePasseAttendu = "secret123";
let motDePasseUtilisateur = "1234"; 


if ( motDePasseUtilisateur ===  motDePasseAttendu ) {
    console.log("Accès autorisé. Bienvenue !");
} else if ( motDePasseUtilisateur.length < 8  ) {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}

const moi = {
    prenom: "camille",
    nom: "colleaux",
    ville: "paris",
    competences: ["HTML", "CSS"]
};

console.log (moi);
console.log ("Je m'apelle Camille Colleaux")

const notes = [12, 15, 9, 18];

console.log(notes[0])
console.log(notes.length);

for (let i = 0; i < notes.length; i++) {
    console.log("La note à l'indice " + i + " est " + notes[i]);
}

const classe = [
    { prenom: 'Camille', age: 18 },
    { prenom: 'laka', age: 17 }
    

];


for (let i = 0; i < classe.length; i++) 
    if (classe[i].age >= 18 ) {
        console.log(classe[i].prenom + " est majeur")
    }
else {
       console.log(classe[i].prenom + " est pas majeur")
}


function saluer(prenom) {
    const message = "Bonjour " + prenom;
    return message;
}

const salutationPourAlice = saluer("Alice");

console.log(salutationPourAlice);

const estMajeur = (age) => age >= 18;

console.log(estMajeur(18));










const tableau = [10, 12, 14, 15];

const calculerMoyenne = tableau => {

let moyenne = 0;

for (let i = 0; i < tableau.length; i++){
moyenne = moyenne + tableau[i];
}
return ( moyenne / tableau.length);
}

console.log(calculerMoyenne(tableau));



