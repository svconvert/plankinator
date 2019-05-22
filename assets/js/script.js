// Initialisation des variables globales :
// Liste des questions qui restent à poser
let questionsNonPosees = [];
// Liste des plantes pas encore éliminées
let plantesAcceptables = [];
// Numéro de la dernière question posée
let questionEnCours = -1;

// Fonction lancée lors du clic sur l'image d'accueil (Sans paramètre)
// Et relancée à chaque itération avec la liste des plantes retenues en paramètre.
function runPlankinator(plantesRetenues = []) {

    // Première itération : on vient de cliquer sur l'image d'accueil
    if (plantesRetenues.length == 0) {
        // Cacher le calque "ecranAccueil"
        document.getElementById("ecranAccueil").className = "cache";
        // Montrer le calque "ecranQuestions
        document.getElementById("ecranQuestions").className = "visible centrer";
        // Initialisations des listes avec les listes des fichiers /assets/data/plantes.je et /assets/data/questions.js
        questionsNonPosees = questions;
        plantesAcceptables = plantes;
    // Itérations suivantes
    } else {
        // La liste des plantes acceptables devient la liste passée en paramètre à la fonction
        plantesAcceptables = plantesRetenues;

        // Supprimer la question qui vient d'être posée de la liste questionsNonPosees
        let temp = [];
        for(i=0; i<questionsNonPosees.length; i++) {
            if (questionsNonPosees[i].numero != questionEnCours) {
                temp.push(questionsNonPosees[i]);
            }
        }
        questionsNonPosees = temp;
        
        // Décocher les boutons radio
        reinitRadio();
    }

    // Sélectionner aléatoirement une nouvelle question
    let numeroQuestionEnCours = getRandomInt(questionsNonPosees.length);
    
    // Afficher la question
    document.getElementById("textQuestion").innerHTML = questionsNonPosees[numeroQuestionEnCours].intitule;
    // Enregistrer la question en cours
    questionEnCours = questionsNonPosees[numeroQuestionEnCours].numero;
}

// Fonction appelée lorsqu'on sélectionne un bouton radio. 
// On cherche la question dans la liste des plantes encore acceptables
// On garde les plantes qui conviennent et on supprime les autres.
// Si la liste contient 0 ou 1 élément, on arrête, sinon on reprend
function traiteReponse(reponse) {
    let temp = [];
    
    // Sélectionner les plantes acceptables et les mettre dans la variable temp
    for (i=0; i<plantesAcceptables.length; i++) {
        const plante = plantesAcceptables[i];

        if (plante.yesQuestions.includes(questionEnCours) == reponse) {
            temp.push(plante);
        }
        
    }

    // Si temp est vide, il n'y a plus de plante acceptable, donc pas de résultat
    if (temp.length == 0) {
        termine("");
    // Si temp ne contient qu'un élément, c'est le bon.
    } else if (temp.length == 1) {
        termine(temp[0].name);
        // Si temp contient plus d'une plante, on relance la processus
    } else {
        plantesAcceptables = temp;
        runPlankinator(plantesAcceptables);
    }
}

// Fonction appelée à la fin du jeu pour afficher les résultats
function termine(param) {
    // Afficher la phrase de résultat
    if (param == "") {
        document.getElementById("textBravo").innerHTML = "Félicitation, vous avez découvert une plante non référencée sur le campus, merci de bien vouloir nous faire part de votre découverte !";
    } else {
        document.getElementById("textBravo").innerHTML = "La plante trouvée est " + param;
    }
    // Afficher l'écran de résultat
    document.getElementById("ecranTrouve").className = "visible centrer";
    // Cacher l'écran de questions
    document.getElementById("ecranQuestions").className = "cache";
    // Réinitialiser les boutons radio pour le prochain jeu.
    reinitRadio();
}

// Fonction appelée lorsqu'on clique sur le bouton recommencer.
function recommencer() {
    document.getElementById("ecranAccueil").className = "visible centrer";
    document.getElementById("ecranTrouve").className = "cache";
}

// Fonctions utilitaires

// Retourne un entier entre 0 et max - 1
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

// Fonction qui réinitialise les boutons radio
function reinitRadio() {
    var ele = document.getElementsByName("radioReponse");
    for(var i=0;i<ele.length;i++)
      ele[i].checked = false;
}