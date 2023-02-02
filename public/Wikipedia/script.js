"use strict";

function select(id) {
    return document.getElementById(id);
}

let entryInput;
let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';

function setup() {
    entryInput = select("entryInput");
    select('myForm').addEventListener("submit", function (event) {
        event.preventDefault();
        goWiki();
    });

}

function goWiki() {
    let term = entryInput.value;
    let url = searchUrl + term;
    const fetchPromise1 = fetch(url);
    fetchPromise1.then(response => {
      console.log(response);
    });
    console.log(url);
}

function gotData(data){
   console.log(data);
}

setup();