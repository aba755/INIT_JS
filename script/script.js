// let compteur=2;

// function maFonction()

// {
//     let myVar =456;
//     console.log("myVar:"+myVar);

//     console.log("myVar fonction :"+myVar);
// }



// if(compteur>1)

// {
// let myVar2="Wazaa!";
// console.log("myVar2:"+myVar2);
// }

// console.log("myVar fin:"+myVar);


/*la methode write ()*/
//let age=35;
//document.write(age);
//document.write("Votre age est"+ age);
//document.write("<b>"+"Votre age est"+"</b>" +age);
//document.write("<b>"+"Votre age est"+"</b>"+age);


/*la Methode Alert()
myVar="Bonjour";
window.alert(myVar);
window.alert("chaine de caractères");
windows.alert(myVar+"chaine de caractères");
*/


/*Methode prompt()*/
/*let reponse1=window.prompt("Saisissez votre nom");
let reponse2=window.prompt("Saisissez votre prénom");
let sexe;



/*la methode confirme()
if(window.confirm("Etes-vous un homme?")==true)
{
    sexe="Mr";
}
else{
    sexe= "Mme";
}
alert("Bonjour "+ sexe + " " + reponse2 + " " + reponse1 + ". Bienvenue sur notre site web!");
*/



/* les operateurs de calcul Jscript

let x=11;
let addition= x+3;//14
console.log(x+3);

let x=11;
let difference=x-3;//11
console.log(x-3);


let x=11;
let product=x*2;//22
console.log(x*2);

let x=11;
let quotient=x/2;//5.5
console.log(x/2);


let x=11;
let remainder=5%2;//1
console.log(x%2);
*/
/*
        // Fonction pour saisir des prénoms jusqu'à ce que l'utilisateur laisse le champ vide
        function saisirPrenoms() {
            let prenoms = [];
            let prenom;

            // Boucle pour demander des prénoms à l'utilisateur
            while (true) {
                prenom = prompt("Entrez un prénom (laisser vide pour arrêter la saisie) :");

                // Si le prénom est vide, sortir de la boucle
                if (prenom === "") {
                    break;
                }

                // Ajouter le prénom au tableau des prénoms
                prenoms.push(prenom);
            }

            // Afficher le nombre de prénoms et les prénoms saisis dans la console
            console.log(`Nombre de prénoms saisis : ${prenoms.length}`);
            console.log("Prénoms saisis :", prenoms);
        }
*/

/*
        // Fonction pour afficher les nombres inférieurs à N
        function afficherNombresInferieurs() {
            // Demande à l'utilisateur de saisir la valeur de N
            let N = parseInt(prompt("Entrez un nombre N : "), 10);
            
            // Vérification si la saisie est un nombre valide
            if (isNaN(N)) {
                console.log("Veuillez entrer un nombre valide.");
                return;
            }
            
            console.log(`Les nombres inférieurs à ${N} sont :`);
            
            // Boucle pour afficher tous les nombres inférieurs à N
            for (let i = 0; i < N; i++) {
                console.log(i);
            }
        }
 
*/




/*
// Fonction pour calculer la somme des entiers entre n1 et n2
function calculerSommeIntervalle() {
    // Demander à l'utilisateur de saisir les valeurs de n1 et n2
    let n1 = parseInt(prompt("Entrez le premier nombre (n1) : "), 10);
    let n2 = parseInt(prompt("Entrez le deuxième nombre (n2) : "), 10);

    // Vérification si les saisies sont des nombres valides
    if (isNaN(n1) && isNaN(n2)) {
        console.log("Veuillez entrer des nombres valides.");
        return;
    }

    // Initialisation de la somme
    let somme = 0;

    // Si n1 est supérieur à n2, échanger les valeurs pour s'assurer que n1 est inférieur ou égal à n2
    if (n1 > n2) {
        let temp = n1;
        n1 = n2;
        n2 = temp;
    }

    // Boucle pour calculer la somme des entiers de n1 à n2
    for (let i = n1; i <= n2; i++) {
        somme += i;
    }

    // Afficher la somme dans la console
    console.log(`La somme des entiers de ${n1} à ${n2} est : ${somme}`);
}
    */

/*
//AFFICHE IMAGE PAPILLON 

afficherImg('init_JS/img/papillon.jpg.jpg');

function afficherImg(image){
    document.write('<img src=init_JS/img/papillon.jpg" alt="Papillon">');
}
*/



/*
// Fonction pour afficher la table de multiplication 
function afficherTableMultiplication(nombre){
    for(let i=1; i<=10; i++) {
        let resultat = i * nombre;
    console.log(i+"x" + nombre+"="+resultat);
    }
}
*/



/*
//COMPTER LE NOMBRE DE LETTRE
function compteurlettre(phrase, lettre){

//initialiser un compteur á zero
let compteur=0;

//boucle pour chaque caractère de la phrase
for(let i=0; i<phrase.length; i++){
    if(phrase[i]=lettre){
        compteur++;
    }
}
  //retourner le nombre de fois que la lettre apparait dans la phrase 
   return compteur
}

*/

/*
//ADDITION DE DEUX NOMBRES 
function addition(a,b){
    return a+b;
}
console.log(addition(2,3));  //affiche 5
*/


/*
//CALCUL DU FACTEUR
function factoriel(n){
    if(n=0){
        return 1;
    }
    return n * factoriel(n-1);
}
console.log(factoriel(5));  //affiche:120
*/

/*
// CHAINE DE CARACTERES 

function rechercheCaracteres(chaine, caracteres){
    let compteur=0;
    for(let i = 0; i < chaine.length; i++){
        if (caracteres.includes(chaine[i])){
            compteur++;
        }
    }

    return compteur;
}
*/

/*
//TABLEAU DE PERSONNAGES AVEC LEURS AFFILIATIONS

const personnages = [
 { nom: "Luke Skywalker", espece: "Humain", affiliation: "Jedi" },
 { nom: "Darth Vader", espece: "Humain", affiliation: "Sith" },
 { nom: "Yoda", espece: "Yoda's species", affiliation: "Jedi" },
 { nom: "Obi-Wan Kenobi", espece: "Humain", affiliation: "Jedi" }
];

//Fonction pour filtrer les personnages par affiliation 
function filtrerParAffiliation(affiliation) {
    return personnages.filtrer(
        function(personnage){      //filtrerpour retourner les personnages ayant l'affiliation
    return personnage.affiliation==affiliation;
    });
}    //Filtrer les personnages par affiliation "Jedi"
    console.log(filtrerParAffiliation("Jedi"));

//fonction pour trouver un personnage par son nom
function trouverParNom(nom) {
    return personnages.find(
        function(personnage){
    return personnage.nom==nom;   
        });
}
    console.log(trouverParNom("Yoda"));

//Fonction pour calculer le nombre total de personnages
function nombreTotalPersonnages(){
    return personnages.length;
//retourne la longueur du tableau de personnages
}
    console.log(nombreTotalPersonnages());

//Fonction pour verifier si un personnage est présent dans le tableau 
function verifierPresencePersonnage(nom){
    return personnages.some(function (personnage){
    return personnage.nom == nom ;
        });
}
    console.log(verifierPresencePersonnage(""));
    */





/* 
//Algorithme qui demande l'age d'un enfant á l'utilisateur
//Demander l'age de l'enfant 
let age = parseInt(prompt("Saisir l'age de l'enfant"));
let categorie = "";

if (age >= 6 && age <= 7) {
    categorie = "Poussin";
} else if (age >= 8 && age <= 9) {
    categorie = "Pupille";
} else if (age >= 10 && age <= 11) {
    categorie = "Minime";
} else if (age >= 12) {
    categorie = "cadet";
} else {
    categorie = "Aucune categorie";
console.log("Categorie de l'enfant:" + categorie);
}

*/

/*
// Demander l'heure à l'utilisiteur 
let heures = parseInt(prompt("Saisir l'heure (0-23)"));
let minutes = parseInt(prompt("Saisir l'heure (0-59)"));
let secondes = parseInt(prompt("Saisir l'heure (0-29)"));
secondes += 1;

if (secondes >= 60) { //Verifier si on doit ajouter une minute supplémentaire
    secondes = 0;
    minutes += 1;

    if (secondes >= 60) { //Verifier si on doit ajouter une heure supplémentaire
        secondes = 0;
        heures += 1;


        if (heures >= 24) { //Verifier si on doit revenir á 0 heure
            heures = 0;

        }
    }
    console.log("Dans une seconde , il sera " + heures + " heures," + minutes + " minutes et " + secondes + "secondes.");
}
*/
/*
//Demander à l'utilisateur le nombre de photocopies 
let nbPhotocopie = parseInt(prompt("combien de photocopies avez vous effectuees?"));
let coutTotal = 0;
if (nbPhotocopie > 0) {
    let nbDixPremieres = Math.min(nbPhotocopie, 10);
    coutTotal += nbDixPremieres * 0.10;
    nbPhotocopie -= nbDixPremieres;
}

if (nbPhotocopie > 0) {
    let nbVingSuivantes = Math.min(nbPhotocopie, 20);
    coutTotal += nbVingSuivantes * 0.09;
    nbPhotocopie -= nbVingSuivantes;
}

if (nbPhotocopie > 0) {
    coutTotal += nbPhotocopie * 0.08;
}
console.log("le cout total des photocopies est de : " + coutTotal.toFixed(2) + "Euro");
*/

/*
//FUNCTION FILTRER LES PERSONNAGES JEDI:
function filtrerParAffiliation(affiliation, tableau) {
    const resultes = [];
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i].affiliation === affiliation) {
            resultats.push(tableau[i]);
        }
    }
    return resultats;
}
const personnagesJedi = filtrerParAffiliation("Jedi", personnage);
console.log(personnagesJedi);

//TROUVER UN PERSONNAGE PAR SON NOM (EX :"luke Skywalker"):
function trouverParNom(nom, tableau) {
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i].nom === nom) {
            return tableau[i];
        }
    }
    return null;
}
const personnageLuke = trouverParNom("Luke Skywalker", personnages);
console.log(personnageLuke);

//CALCULER LE NOMBRE TOTAL DE PERSONNAGES:
function estPresentDansTableau(nom, tableau) {
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i].nom === nom) {
            return true;
        }
    }
    return false;
}
const estPresent = estPresentDansTableau("Yoda", personnages);
console.log(estPresent ? "Yoda est present dans le tableau." : "Yoda n'est pas présent dans le tableau. ");

// exemples d'utilisation des methodes en utilisant une fonction native JS

//fILTRER LES PERSONNAGES JEDI:
const personnagesJedi = personnages.filtrer(personnage => personnage.affiliation === "Jedi");
console.log(personnagesJedi);

//TROUVER UN PERSONNAGE PAR SON NOM (EX : "LUKE SKYWALKER"):
const personnageLuke = personnages.find(personnage => personnage.nom === "Luke Skywalker");
console.log(personnageLuke);

//Calculer le nombre total de personnages:
const nombreTotalPersonnages = personnages.length;
console.log(nombreTotalPersonnages);

// Verfier si un personnage est présent dans le tableau (ex : "Yoda"):
const estPresent = personnages.some(personnage => personnage.nom === "Yoda");
console.log(estPresent ? "Yoda est present dans le tableau ." : "Yoda n'est pas present dans le tableau.");
*/


// Fonction Javascript

//alert("Coucou!");
//console.log("Ah que Coucou!");
//document.write("Coucou beuh!");


// CREATION D'UN NOEUD ELEMENT OU UN NOEUD TEXT
//let newP= document.createElement('p');
// nous avons crée ici un nouvel élément p. celui-ci ne contient pour le moment ni attribut ni contenu textuel, et n'a pas encore été inseré à l'interieur de notre page à un endroit precis.

// pour inserer du texte dans notre noeud élément

//newP.textContent= 'Paragraphe crée et inseré grâce au Javascript';

// créer directement en utilisant la méthode createTextNode() de Document :
//let b = document.body;
/*let newP= document.createElement('p');
let newTexte = document.createTextNode('Texte écrit en Javascript');
newP.textContent = 'Paragraphe crée et inséré grâce au Javascript';
b.prepend(newP); //Ajoutes le paragraphe crée comme premier enfant de l'élément body

b.append(newTexte); // Ajoutes le texte crée comme dernier enfant de l'élément body */





/*
// utilisation de la methode ' appendChild()' de l'interface Node qui permet d'ajouter un noeud en tant que dernier enfant d'un noeud parent.
let b = document.body;
let newP= document.createElement('p');
let newTexte = document.createTextNode('Texte inseré avec appendChild()');
newP.textContent = 'Paragraphe crée et inséré grâce au Javascript';

// ceci fonctionne
b.prepend(newP, 'Texte inséré avec append()'); 

// ceci fonctionne 
b.appendChild(newTexte);

//Ceci ne fonctionne pas : b.appendChild('Texte écrit en JavaScript');
//Ceci ne fonctionne pas non plus : b.appendChild(newP, newTexte);
*/



/*
//on peut également utiliser la méthode 'appendChild()' de l'interface 'Node' qui permet d'ajouter un noeud en tant que dernier enfant d'un noeud parent.
let b = document.body;
let newP= document.createElement('p');
let newTexte = document.createTextNode('Texte inseré avec appendChild()');

newP.textContent = 'Paragraphe crée et inséré grâce au Javascript';

// ceci fonctionne
b.append(newP, 'Texte inséré avec append()');


// ceci fonctionne 
b.appendChild(newTexte);

//Ceci ne fonctionne pas : b.appendChild('Texte écrit en JavaScript');
//Ceci ne fonctionne pas non plus : b.appendChild(newP, newTexte);
*/



// On peut utiliser la methode 'inserBefore()' de l'interface 'Node' qui permet pour sa part d'insérer un noeud en tant que enfant d'un autre noeud juste avant certain noeud enfant donné de ce parent.

/*
let b = document.body;
let p1= document.getElementById('p1');
let newP = document.createElement('p');

newP.textContent = 'Paragraphe crée et inséré grâce au Javascript en 2024';

// ceci fonctionne
b.insertBefore(newP,p1);
*/

/*
let b = document.body;
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let newP = document.createElement('p');
let htmlContent = 'Paragraphe créé et inséré grâce au javaScript';

//Ajouter un paragraphe après p1
p1.insertAdjacentElement('afterend', newP);

//Ajouter le contenu de htmlContent avant la balise fermante de p1
p1.insertAdjacentHTML('beforeend', htmlContent);

//Ajouter du texte après la balise ouvrante de p2
p2.insertAdjacentText('afterbegin', 'Texte ajouté dans');
*/


//FONCTION 

//Fonction pour lire le DOM

/*
document.getElementById('dom').addEventListener('click', function(){
    console.log(document.getElementById('titre2').innerText); //Affiche le texte de la balise ayant l'id 'titre2'

    // afficher le nombre de balise ayant la classe 'titre'
    const titres=document.getElementsByClassName('titre');
    console.log(titres.length);

    // afficher le texte de toutes les balises ayant la classe 'titre'
    for(let titre of titres){
        console.log(titre.innerText);
    }

    //afficher le texte de toutes les balises 'li'
    const items= document.querySelectorAll('li');
    items.forEach(item =>
        console.log(item.innerText));
});


//Fonction pour modifier le DOM
document.getElementById('dom_modif').addEventListener('click' , function(){

    // changer le contenu du h1 en 'Bienvenue'
    document.getElementById('titre1').innerText = 'Bienvenue';

    // changer le contenu du h2 en 'Exo JS' 
    document.getElementById('titre2').innerText = 'Exo JS';

    // changer le contenu du paragraphe 
    document.getElementById('paragraphe1').innerText = 'Voici quelques fonctions exécutées en Javascript.';

    // changer le contenu de chaque point (li) de la liste 
    const newitems = ['liste1', 'liste2', 'liste3' , 'liste4' , 'liste5'];
    items.forEach((item, index) => {
        item.innerText = newitems[index];
    });
});

//Fonction pour modifier le style 
document.getElementById('style').addEventListener('click', function(){


    //aligner le titre 1 au centre de la page 
    document.getElementById('titre1').style.textAlign = 'center';

    //mettre en rouge tous les éléments ayant la classe 'titre'
    const titres = document.getElementsByClassName('titre');
    for (let titre of titres){
        titre.style.color = 'red';
    }

    //Mettre une bourdure et un padding au paragraphe 
    const paragraphe = document.getElementById('paragraphe1');
    paragraphe.style.border = 'solid 1px black';
    paragraphe.style.padding = '10px';

    //faire diparaître la liste 
    document.getElementById('liste').style.display = 'none' 
});
*/


document.querySelector('#lien').onclick = function()
{
    alert ('Vous avez cliqué !');
}