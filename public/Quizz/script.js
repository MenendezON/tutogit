"use strict";

let correctAnswer = ["Serpentard, Gryffondor, Poufsouffle, Serdaigle", "Une cape dinvisibilité"];

let quizz = '{ "quizzes" : [' +
    '{ "q":"Commençons facile, quelles sont les quatre maisons de l\'école de Poudlard ?" , "r1":"Targaryen, Baratheon, Lannister, Tyrell", "r2":"Samcrow, Grim Bastards, Mayans, One Niners", "r3":"Serpentard, Gryffondor, Poufsouffle, Serdaigle", "r4":"Jaffas, Nox, Tokras, Oris" },' +
    '{ "q":"Dans Harry Potter à l\'école des sorciers quel cadeau de Noël Harry reçoit-il ?" , "r1":"Une cape dinvisibilité", "r2":"Un Nimbus 2000", "r3":"La pierre philosophale", "r4":"Hedwige (la chouette de Harry)"}' +
    ']}';

const obj = JSON.parse(quizz);




let list = "<form name='form' id='form'>";
let nbQuestion = Object.keys(obj.quizzes).length;
for (let i = 0; i < nbQuestion; i++) {
    list += "<strong>Q"+(i+1)+":"+obj.quizzes[i].q+"<br></strong>";
    list += "<input type='radio' id='qst"+i+"1' name='q"+i+"' value='"+obj.quizzes[i].r1+"'>";
    list += "<label for='qst"+i+"1'> "+obj.quizzes[i].r1+"</label></br>";
    list += "<input type='radio' id='qst"+i+"2' name='q"+i+"' value='"+obj.quizzes[i].r2+"'>";
    list += "<label for='qst"+i+"2'> "+obj.quizzes[i].r2+"</label></br>";
    list += "<input type='radio' id='qst"+i+"3' name='q"+i+"' value='"+obj.quizzes[i].r3+"'>";
    list += "<label for='qst"+i+"3'> "+obj.quizzes[i].r3+"</label></br>";
    list += "<input type='radio' id='qst"+i+"4' name='q"+i+"' value='"+obj.quizzes[i].r4+"'>";
    list += "<label for='qst"+i+"4'> "+obj.quizzes[i].r4+"</label></br>";
    list += "</br>";
}
list += "<input class='bg-green-800 p-1 rounded text-white' type='submit' value='Submit'>"; 
list += "</form>";
document.getElementById("quizz").innerHTML = list;

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let msg = "";
    if (document.forms["form"]["q0"].value == "" || document.forms["form"]["q1"].value == "") {
        msg = "<span class='bg-red-500 text-white p-1 rounded'>Veuillez selectionner une réponse de chaque question</span>";
    }else{
        if (document.forms["form"]["q0"].value == correctAnswer[0] && document.forms["form"]["q1"].value == correctAnswer[1]) {
            msg = "<span class='bg-green-500 text-white p-1 rounded'>Bravo !, Vous avez réussi le quizz</span>";
        }else{
            msg = "<span class='bg-red-500 text-white p-1 rounded'>Mince ! Vos réponses n'ont pas été correctes</span>";
        }
    }

    console.log(document.forms["form"]["q0"].value);
    console.log(document.forms["form"]["q1"].value);

    document.getElementById("msg").innerHTML = msg;
    
});
