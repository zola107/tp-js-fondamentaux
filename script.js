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


