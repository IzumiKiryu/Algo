
/*
// Algo Blocs : Niveau A-1 Tutoriel
// Initialisation
setPos(300,300);
changeColor(color.red)
setLineWidth(10);
// Réalisation
forward(200);
faceRight();
forward(100);


// Niveau A-2 : Spirale
//Initalisation 
setPos(300,300);
changeColor(color.yellow);
setLineWidth(10);
// Réalisation
faceLeft();
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);


//Niveau A-3 : Croix
//Initialisation
setPos(300,300);
changeColor(color.red);
setLineWidth(10);
// Réalisation
faceLeft();
forward(200);
faceRight();
forward(100);
faceUp();
forward(100);
faceDown();
forward(200);


//Niveau A-4 : S
//Initialisation
setPos(200,500);
changeColor(color.green);
setLineWidth(10);
// Réalisation
faceRight();
forward(150);
arcLeft(50,90);
arcLeft(50,90);
forward(100);
arcRight(50,90);
arcRight(50,90);
forward(150);


//Niveau A-5 : Ying et Yang
//Initalisation
setPos(300,200);
changeColor(color.fuchsia);
setLineWidth(10);
//Réalisation
faceRight();
arcRight(100,500);
arcRight(50,200);
arcLeft(50,200);


//Niveau B-1 : Escaliers
//Initialisation
setPos(100,100);
faceRight();
changeColor(color.green);
setLineWidth(10);
//Réalisation
// Boucle à apprendre par coeur = (i<4 = le nombre de répétition)
for(let i=0 ; i<4 ; i++) {
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}


//Niveau B-2 : Créneaux
//Initialisation
setPos(100,300);
changeColor(color.red);
setLineWidth(10);
//Réalisation
for(let i=0 ; i<4 ; i++) {
    faceUp();
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
}


//Niveau B-3 : Carré
//Initialisation
setPos(300,300);
changeColor(color.fuchsia);
faceRight();
setLineWidth(10);
//Réalisation
for(let i=0 ; i<4 ; i++) {
    right(90);
    forward(100);
}


//Niveau B-4 : Triangle
//Initialisation
setPos(300,300);
changeColor(color.aqua);
faceRight();
setLineWidth(10);
//Réalisation
for(let i=0 ; i<3 ; i++) {
    left(120);
    forward(100);
}


//Niveau B-5 : Drapeau
//Initialisation
setPos(300,300);
changeColor(color.yellow);
faceUp();
setLineWidth(10);
//Réalisation
forward(200);
changeColor(color.red);
for(let i=0 ; i<3 ; i++) {
    right(120);
    forward(50);
}


//Niveau B-6 : Escalier bicolore
//Initialisation
setPos(100,400);
changeColor(color.red);
setLineWidth(10);
//Réalisation
for(let i=0 ; i<2 ; i++){
    faceRight();
    forward(50);
    faceUp();
    forward(50);
}
changeColor(color.green);
for(let i=0 ; i<3 ; i++){
    faceRight();
    forward(50);
    faceDown();
    forward(50);
}


//Niveau B-7 : Maison
//Initialisation
setPos(300,300);
changeColor(color.yellow);
setLineWidth(10);
//Réalisation
for(let i=0; i<4; i++){
    forward(100);
    right(90);
}
faceRight();
for(let i=0; i<3; i++){
    left(120);
    forward(100);
}

//Double boucle (une boucle dans une boucle)
for(let i=0 ; i<2 ; i++);{
    for(let j=0 ; j<2 ; j++);{

    }
}


//Niveau C-1 : Dents
//Initialisation
setPos(200,300);
changeColor(color.blue);
setLineWidth(10);
faceRight();
//Réalisation
for(let i=0 ; i<4 ; i++){
    for(let j=0 ; j<3 ; j++){
        forward(50);
        right(180-60);
    }
    forward(50);
}


//Niveau C-2 : Fenêtres 
//Initialisation
setPos(250,500);
changeColor(color.fuchsia);
setLineWidth(10);
faceUp();
//Réalisation
for(let i=0 ; i<5 ; i++){
    for(let j=0 ; j<4 ; j++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}


//Niveau C-3 : Couleurs décalées
//Initialisation
setPos(50,300);
shiftColor(1/3); 
setLineWidth(10);
faceRight();
//Réalisation
for(let i=0 ; i<3 ; i++){
    for(let j=0 ; j<8 ; j++){
        forward(100);
        right(180-45);
    }
    up();
    forward(200);
    down();
    shiftColor(0.10); 
}


//Niveau C-4 : Pâté de maison
//Initialisation
setPos(100,300);
changeColor(color.red);
setLineWidth(10);
faceRight();
//Réalisation
for(let i=0 ; i<5 ; i++){
    for(let j=0 ; j<3 ; j++){
        forward(50);
        left(180-60);
    }
    for(let k=0 ; k<4 ; k++){
        changeColor(color.yellow);
        forward(50);
        right(90);
    }
    up();
    changeColor(color.red);
    forward(100);
    down();
}


//Niveau C-5 : Quadriétoile
//Initialisation
setPos(300,300);
shiftColor(0.15);
setLineWidth(10);
faceRight();
//Réalisation
for(let i=0 ; i<4 ; i++){
    for(let j=0 ; j<8 ; j++){
        forward(200);
        right(180-45);
    }
    right(90);
    shiftColor(0.25);
}


//Niveau C-6 : Triangle doré
//Initialisation
setPos(300,300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
//Réalisation
for(let i=0 ; i<3 ; i++){
    for(let j=0 ; j<5 ; j++){
        forward(100);
        left(180-60);
    }
    right(180-60);
}


//Niveau C-7 : Soleil
//Initialisation
setPos(250,400);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
//Réalisation
for(let i=0 ; i<10 ; i++){
    for(let j=0 ; j<3 ; j++){
        forward(100);
        right(180-60);
    }
    forward(100);
    left(180-135);
}


//Niveau D-1 : Stop
//Initialisation
setPos(200,200);
changeColor(color.red);
setLineWidth(10);
faceRight();
//Réalisation
for(let i=0 ; i<8 ; i++){
    forward(100);
    right(180-135);
}

//Niveau D-2 : Serpentin
//Initialisation
setPos(200,200);
changeColor(color.green);
setLineWidth(10);
faceRight();
//Réalisation

--------------------------COURS-------------------
// Création d'une variable
// Déclaration d'une variable
let longueur;

// Affecter une valeur à une variable
// On regarde ce qu'il y a à droite du symbole "=" et on le met dans la variable à gauche.
longueur = 42;

// Lire le contenu d'une variable
// alert(longueur);
console.log(longueur);

// Deux variables ne peuvent pas avoir le même nom (...)
// let longueur;

let price;
price = 147;
console.log(price);

let price2; // Déclaration
price2 = 22; // Affectation

// Initialiser une variable (les deux en même temps)
let price3 = 123;
-------------------------------------------------

//Niveau D-9 : Spirale triangulaire
//Initialisation
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.blue);
//Réalisation
let length = 50;
for(let i=0 ; i<6 ; i++){
    forward(length);
    right(120);
    // lenght = length+50;
    length += 50;
}


//Niveau D-10 : Grande spirale
//Initialisation
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.yellow);
let length=100;
//Réalisation
for(let i=0 ; i<10 ; i++){
    forward(length);
    right(90);
    length += 50;
}


//Niveau D-11 : Décrémentation
//Initialisation
setPos(50,300);
faceRight();
setLineWidth(10);
changeColor(color.white);
let length=250;
//Réalisation
for(let i=0 ; i<5 ; i++){
    for(let j=0 ; j<3 ; j++){
        forward(length);
        left(180-60);
    }
    forward(length);
    length += -50;
}

*/

//Niveau D-12 : Escargot triangulaire
//initialisation
setPos(400,400);
changeColor(color.blue);
faceRight();
setLineWidth(10);
//Réalisation
let length = 100;
for(let i = 0  ; i < 6 ; i++){
    for(let j = 0 ; j < 4 ; j++){
        forward(length);
        left(180-60);
    }
    right(180-120);
    length += 50;
}