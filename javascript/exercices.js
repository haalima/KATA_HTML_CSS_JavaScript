//EXERCICE 1
function surface(base, hauteur){
  return base * hauteur / 2;
}
console.log(surface(4,2))

//EXERCICE 2
function factorielle(nbr) {
  let fact = 1;
  let i = 1;
  while (i < nbr + 1) {
    fact = fact * i;
    i++
  }
  return fact;
}

console.log(factorielle(5))

//EXERCICE 3
function max(a, b, c){
  max = 0;
  if (a >= b && a>=c){
    max = a;
  } 
  else if(b>=a && b>=c){
    max = b;
  }
  else{
    max = c;
  }
  return max;
}
console.log(max(71,1,9))

//EXERCICE 4
function dernierElement(tab){
  return tab[tab.length -1]
}
console.log(dernierElement([2,4,6,8]))

//EXERCICE 5
function concatener(str1, str2){
  return (`${str1} | ${str2}`) 
}
console.log(concatener("je","tu"))

//EXERCICE 6
function egaux(str1, str2){
  if (str1.length === str2.length){
    return console.log(`TRUE`);
  }
  else {
    return console.log(`FALSE`);
  }
}
console.log(egaux("je","vous"))

//EXERCICE 7
function pairImpair(n){
  if(n%2 === 0){
    return console.log(`${n} est un nombre PAIR`)
  }else{
    return console.log(`${n} est un nombre IMPAIR`)
  }
}
console.log(pairImpair(3))

//EXERCICE 8
function capital(pays){
  let ville;
  switch(pays){
    case 'France': 
      ville = 'Paris'
      break; 
    case 'Allemagne': 
      ville= 'Berlin'
      break; 
    case 'Italie': 
      ville = 'Rome'
      break; 
    case 'Maroc': 
      ville = 'Rabat'
      break;
    case 'Espagne': 
      ville = 'Madrid'
      break; 
    case 'Portugal': 
      ville = 'Lisbonne'
      break; 
    case 'Angleterre': 
      ville = 'Londres'
      break; 
    default:
      ville = 'Oops je ne sais pas :( '
      break;
  }
  return ville;
}

console.log(capital("Maroc"))

//EXERCICE 9
function calculatrice(){
  let operation = prompt("veillez choisir l'opéaration: addition +, soustraction -, multiplication *, division / ");
  let nbr1 = parseFloat(prompt("Veuillez entrer le premier numéro "));
  let nbr2 = parseFloat(prompt("Veuillez entrer le deuxieme numéro"));

  switch(operation){
    case '+':
      return nbr1 + nbr2; 
      break;
    case '-':
      return nbr1 - nbr2; 
      break;
    case '*':
      return nbr1 * nbr2; 
      break;
    case '/':
      return nbr1 / nbr2; 
      break;
    default:
      console.log('Quelque chose ne va pas ! Vérifiez s\'il vous plaît')
  }
}

console.log(calculatrice())
    
//EXERCICE 10
function Voyelle(mot){
 
}