// Écrire une fonction f1 qui ne prend rien en entrée (pas d'argument dans les parenthèses), et qui affiche 17 dans la console.
function f1(){
    console.log(17);
}
//Correction (point de vue interne)
// function f1(){
//     console.log(17);
// }

// Utiliser la fonction f1 pour afficher 17 dans la console. (Appuyer sur le bouton GO)
f1();
//Correction (point de vue externe)
//f1();

// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 18.
function f2(){
    return 18;
}
//Correction (point de vue interne)
//function f2(){
//     return 18;
// }

// Utiliser la fonction f2 pour afficher 17 dans la console.
console.log(f2()); //Afficher dans la console le résultat de l'opération "appel de la fonction f2" f2 vaux quelque chose.
//exemple : console.log(16+3); //Afficher dans la console le résultat de l'opération "16+3"
//Correction
// console.log(f2());  --> j'appelle la fonction et je l'éxécute

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
//Correction
// La fonction f1 est spécialisée pour afficher 17 dans la console. Si c'est ce que l'on souhaite faire, elle est plus pratique
// que f2. En revanche, on ne peut pas faire autre chose du 17 avec la fonction f1. La fonction f2 permet plus de liberté.
// On peut faire ce que l'on veut du résultat (le mettre das une variable, l'écrire dans la console, l'afficher dans un titre
// dans l'html)

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(n){
    console.log("On m'a donné la valeur", n);
    console.log(2*n);
}
//Correction
//function f3(n){
//     console.log(2*n);
// }

// Utiliser la fonction f3 pour écrire dans la console le double de 99 (point de vue externe)
f3(99);
//Correction
// f3(99);

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre. (point de vue interne)
function f4(n){
    return 2*n;
}
//Correction
// function f4(n){
//     return 2*n; --> pas de parenthèse au return
// }

// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(99));
//Correction
// console.log(f4(99));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a = (f4(99));
//Correction
//let a = (f4(99));
// console.log("La variable a contient", a);

// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
//Correction
// function f5(n1, n2){
//     console.log(n1+n2);
// }

// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
//Correction
// f5(42, 77);

// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
//Correction
// function f6(n1,n2){
//     return n1+n2;
// }

// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
//Correction
//console.log(f6(42,77));

//Incrémenter la variable a de 5
//Correction
// a = a+5;

// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
//Correction
// a = a+F6(42,77); --> peut être remplacé pour 119
//console.log("La nouvelle valeur de a est", a);
//Pareil que : 
// a+=f6(10,15);

// => F6 est une machine a addition
// a = f6(a, f6(10,15));
//console.log("La nouvelle valeur de a est",a);

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
//Correction
function f7(n1, n2) {
    if(n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

//Test de la fonction :
console.log("Le plus grand entre 10 et 15 est", f7(10, 15));
console.log("Le plus grand entre 100 et 15 est", f7(100, 15));

//Autre version de la correction
function f8Bis(n1, n2, n3){
    if(n1 >=n2 && n1 >= n3){
        return n1;
    }else if(n2 >= n3){
        return n2;
    }else {
        return n3;
    }
}

//Autre version de la correction, (max_1_2 = vert, n2 = rouge, n3 = bleu)
// function f8ter(n1, n2, n3){
//     let max_1_2 = f7(n1, n2);
//     return f7(max_1_2, n3);
// }

//Dernière version de la correction :
// function f8Quater(n1, n2, n3){
//     return f7(f7(n1, n2) , n3);
// }

// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
//Correction 
// function f8(n1, n2, n3){
//     if(n1 > n2){
//         return n1;
//         } else {
//         return n3;
//     }
//     }else {
//         if(n2 > n3){
//         }else {
//             return 
//         }
//         }


// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).

// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function f9(number, word){
    for(let i=0; i<number; i++){
            console.log(word);
        }  
}

//Essayer la fonction (elle repète le mort un certain nombre de fois)
f9(14, "gerg");
f9(2, "zefagag");


//-------- PyDéfis

//1) SW IV
let x=997;
let y=312;
let z=663;

while(10*x = y){
    x= (y*z) % 10000;
    y= (3*z) % 10000;
    z= (7*z) % 10000;
}
console.log(x,y,z);
//Réponse = 501, 9461, 5409

//2)Désamorçage à la tony stark
let total =0;
for(let i=1; i<1435; i++){
    if(i%3==0||i%5==0){
        total=total+1;
    }
}
console.log(total);