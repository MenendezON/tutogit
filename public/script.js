"use strict";

let rslt = document.getElementById("result");
rslt.innerHTML = "En attente du résultat...";
document.getElementById("imc").onsubmit = function (e) {
    e.preventDefault();
    let taille = document.getElementById("taille").value;
    let poids = document.getElementById("poids").value;
    let msg = "";
    let imcv = 0.0;

    if (taille.length == 0 || poids.length == 0) {
        msg = "Vous n'avez pas saisi tous les champs !";
    } else {
        imcv = poids / ((taille * taille) / 10000);
        rslt.innerHTML = msg;
        msg = "L'IMC est <span class='font-bold'>" + imcv.toFixed(1) + "</span>";
        if (imc > 25 && imc < 29.9) {
            msg += "kg/m², vous êtes en surpoids";
        } else if (imc > 30 && imc < 34.9) {
            msg += "kg/m², vous êtes en obésité modérée";
        } else if (imc > 35 && imc < 39.9) {
            msg += "kg/m², vous êtes en obésité sévére";
        } else {
            msg += "kg/m², vous êtes en obésité massive";
        }
    }

    msg += ".";
    rslt.innerHTML = msg;
}