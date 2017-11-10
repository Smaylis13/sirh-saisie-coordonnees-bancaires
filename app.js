var donnees = {};

$.ajax({
    url: "http://localhost:8080/api/collaborateurs/",
    contentType : 'application/json',
    type: 'GET',
    data: JSON.stringify(donnees)
});

$(document).ready(function () {

    $.getJSON({
        type: "GET",
        url: "http://localhost:8080/api/collaborateurs/",
        success: function (data) {
            data.forEach(function(element) {
                ajouterCollaborateur(element.matricule,element.name,"'Prenom'");
            });
            }
         });
});

function ajouterCollaborateur(pMatricule,pNom,pPrenom)
{
    var tableau = document.getElementById("tableCollab");
    
        var ligne = tableau.insertRow(-1);
    
        var prenom = ligne.insertCell(0);
        var nom = ligne.insertCell(0);
        var matricule = ligne.insertCell(0);
        
        
        matricule.innerHTML = pMatricule;
        nom.innerHTML = pNom;
        prenom.innerHTML = pPrenom;
}