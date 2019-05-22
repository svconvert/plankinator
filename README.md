# plankinator

Plankinator est un jeu inspiré d'Akinator, décliné pour les plantes du Campus de l'IUT de Périgueux. Notez qu'il s'agit d'un jeu basique non optimisé destiné à une faible quantité de données et dont le code est simple. Pas de base de données et du javascript pur.

## Arborescence
- index.html **Départ du jeu**
- assets/ **Tous les fichiers annexes**
- assets/css/styles.css **Styles de la page**
- assets/data/plantes.js **Liste des plantes**
- assets/data/questions.js **Liste des questions**
- assets/img/accueil.png **Image d'accueil (Lancer Plankinator)**
- assets/img/bravo.png **Image de fin (Trouvé)**
- assets/js/scripts.js **Les fonctionnalités**

## Configuration
Pour personnaliser Plankinator, vous devez saisir vos plantes et vos questions dans les fichiers **assets/data/plantes.js** et **assets/data/questions.js**.
Quelques données complètement imaginaires y sont déjà placées, inspirez-vous en pour comprendre la structure et la respecter scrupuleusement.

Les questions sont une liste [] d'objets {}. Chaque objet question doit posséder 2 attributs : **numero** et **intitule**.   
``` 
{
    numero: 5,
    intitule: "intitulé de la question sous forme de chaine de caractères "" "
} 
```
Listez vos questions, séparez chaque objet d'une , et veillez à ne pas utiliser 2 fois le même numéro.   
   
Les plantes sont une liste [] d'objets {}. Chaque objet plante doit posséder 2 attributs : **name** et **yesQuestion**.

``` 
{
    name: "Orchidée sauvage",
    yesQuestion: [1, 4, 12]
} 
```
**yesQuestion** est la liste pour la plante considéré, des questions auxquelles on répond par "oui". Soyez exhaustifs. Pour chaque plante, regardez soigneusement la liste des questions, prenez toutes celles dont la réponse est positive.

## Fonctionnement de gitHub
### 1- Le wiki   
L'onglet **wiki** cache des articles qui peuvent vous aider.   
[wiki](https://github.com/svconvert/plankinator/wiki)
### 2- gh-pages   
Le projet est visible [ici](https://svconvert.github.io/plankinator/)   

## Améliorations à prévoir
- Un peu plus de styles, arranger les boutons, changer les images
- Amélioration de l'algorithme avec un niveau pour les questions de très discriminantes à plus générales ?
- Ajout d'un système de compte du nomnre de questions ou d'affichage des questions posées avant d'obtenir le résultat.
- ... A vous de me le dire.