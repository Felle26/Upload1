import * as namen from "./modules/names.js";
import * as nachnamen from "./modules/nachnamen.js"
// Generierte Liste
let generierte_liste = [];

// Nachnamen

let maenner_combine = maenner_name.concat(namen.maenner_elfen);
let frauen_combine = frauen_namen.concat(namen.frauen_elfen);



let maennernamen = false;
let maenner_elfen_namen = false;
let frauennamen = false;
let frauen_elfen_namen = false;

let maenner_auswahl = false;
let frauen_auswahl = false;

generierter_name = "Leer";

let zufalls_zahl_namen = 0.5;




function zufalls_erstellen(namen_array){
    return(zufalls_zahl_namen = Math.floor(Math.random() * (namen_array.length + 1)))    
}

// Namen hinzufügen
function add_name(name){
    document.getElementById("nameID").innerHTML = name;
};

//Männer Namen Generate


function update_namelist(){
document
  .querySelector("#nameList").insertAdjacentHTML("afterbegin",`<li class="listitem">${generierte_liste[0]}</li>`);
if (document.querySelectorAll("ul>li").length >= 6) {
    document.querySelector("li:last-of-type").remove();
}    
};



console.log(generierte_liste);

function liste_leeren(){
    generierte_liste = [];
    document.querySelectorAll("ul > li").forEach(function(e){
        e.remove()
    });
};

function updchecked() {
    maenner_auswahl = document.querySelector("#m_select").checked;
    frauen_auswahl = document.querySelector("#w_select").checked;
    maennernamen = document.querySelector("#m_normal").checked;
    maenner_elfen_namen = document.querySelector("#m_elfe").checked;
    frauennamen = document.querySelector("#w_normal").checked;
    frauen_elfen_namen = document.querySelector("#w_elfe").checked; 
};

function name_generate(){
    if (maenner_auswahl && maennernamen && maenner_elfen_namen) {
        console.log("Funktion Männer kombi Elfen");
        namen_generate(maenner_combine, nachnamen);

    }else if (maenner_auswahl && maennernamen) {
        console.log("Funktion Männer");
        namen_generate(maenner_name, nachnamen);

    }else if (maenner_auswahl && maenner_elfen_namen) {
        console.log("Funktion Elfen");
        namen_generate(maenner_elfen, nachnamen);

    }else if (frauen_auswahl && frauennamen && frauen_elfen_namen) {
      console.log("Funktion Frauen Kombi Elfen");
      namen_generate(frauen_combine, nachnamen);

    }else if (frauen_auswahl && frauennamen) {
      console.log("Funktion Frauen");
      namen_generate(frauen_namen, nachnamen);

    }else if (frauen_auswahl && frauen_elfen_namen) {
      console.log("Funktion Frauen Elfen");
      namen_generate(frauen_elfen, nachnamen);
    };
   
};

function namen_generate(namen, nachnamen) {
    updchecked();
    let name = `${namen[zufalls_erstellen(namen)]} ${nachnamen[zufalls_erstellen(nachnamen)]}`;
        
    generierte_liste.unshift(name)
    if(generierte_liste.length >=7){
        generierte_liste.pop();
    };
    add_name(name);
    update_namelist();
};