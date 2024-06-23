/*MENU*/

function toggleMenu(){
  let menu = document.getElementById("menu");
  if(menu.style.display == "block")
 { menu.style.display = "none";
 }


 else{
  menu.style.display = "block";
}
}

/*ICON AJOUTER*/
const iconePlusElements = document.querySelectorAll(".iconePlus");
const quantiteMax = 10;

iconePlusElements.forEach(function(iconePlusElement) {
  iconePlusElement.addEventListener('click', function() {
    const affichageQteEl = iconePlusElement.parentElement.querySelector(".affichageQte");
    let quantiteActuelle = parseInt(affichageQteEl.textContent, 10);

    if (quantiteActuelle < quantiteMax) {
    quantiteActuelle += 1;
    affichageQteEl.textContent = quantiteActuelle;}

    else if (quantiteActuelle === quantiteMax) {
        alert ("Vous avez atteint la quantité maximale par produit");
    }
  });
});


/*ICONE DIMINUER*/
const iconeMoinsElements = document.querySelectorAll(".iconeMoins");
const quantiteMin= 0;

iconeMoinsElements.forEach(function(iconeMoinsElement) {
    iconeMoinsElement.addEventListener('click', function() {
        const affichageQteEl = iconeMoinsElement.parentElement.querySelector(".affichageQte");
        let quantiteActuelle = parseInt(affichageQteEl.textContent, 10);
        
        if (quantiteActuelle > quantiteMin){
        quantiteActuelle -= 1;
        affichageQteEl.textContent = quantiteActuelle;}

        else if (quantiteActuelle === quantiteMin) {
            alert ("Vous ne pouvez pas diminuer la quantité en dessous de " + quantiteMin)
        }
  });
});


/*BOUTON CALCULER LE TOTAL*/
let calculerEl = document.getElementById("calculer");
let prixElements = document.querySelectorAll(".prix");
let affichageTot = document.getElementById("affichageTot");

calculerEl.addEventListener('click', function() {
  let sousTotal = 0;

  prixElements.forEach(function(prixEl) {
    let prixText = prixEl.textContent.trim();
    let prixUnitaire = parseFloat(prixText.replace('$', ''));

    let affichageQteEl = prixEl.parentElement.querySelector(".affichageQte");
    let quantite = parseInt(affichageQteEl.textContent, 10);

    let totalProduit = prixUnitaire * quantite;
    sousTotal += totalProduit;
  });

  affichageTot.textContent = "$" + sousTotal.toFixed(2);
});



