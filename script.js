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