
// Sélection des boutons 
const buttonAjouterPanier1 = document.getElementById('btn1')
const buttonAjouterPanier2 = document.getElementById('btn2')
const buttonAjouterPanier3 = document.getElementById('btn3')

// Récupération des noms des bottes 
const nomBotte1 = document.querySelector('.div1 .nomBotte').textContent;
const nomBotte2 = document.querySelector('.div2 .nomBotte').textContent;
const nomBotte3 = document.querySelector('.div3 .nomBotte').textContent;


// Ajout des gestionnaires dévénements
buttonAjouterPanier1.addEventListener("click",() =>{
    alert('Article "${nomBotte1}" ajouté au panier');
});

buttonAjouterPanier2.addEventListener("click",() =>{
    alert('Article "${nomBotte2}" ajouté avec succès');
});

buttonAjouterPanier3.addEventListener("click",() =>{
    alert('Article "${nomBotte3}" ajouté au panier');
});