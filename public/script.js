"use strict";

let rslt = document.getElementById("result");
document.getElementById("imc").onsubmit = function (e) {
    e.preventDefault();
    let taille = document.getElementById("taille");
    let poids = document.getElementById("poids");
    let msg = "";
    let imcv = 0.0;

    if (taille.isEmpty || poids.isEmpty) {
        msg = "Vous n'avez pas saisi tous les champs !";
    } else {
        taille = taille.value;
        poids = poids.value;
        imcv = poids / ((taille * taille) / 10000);

        msg = "L'IMC est " + imcv.toFixed(2);
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