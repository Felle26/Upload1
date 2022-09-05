"use strict";

let maenner_name = [
"Aldwin",
"Aldwyn",
"Anakin",
"Atreju",
"Artemis",
"Bastian",
"Ben",
"Cullen",
"Daario",
"Draco",
"Eddard",
"Emmett",
"Eowyn",
"Falkor",
"Faramir",
"Finden",
"Gandalf",
"Gendry",
"Gregor",
"James",
"Jaqen",
"Jora",
"Kylo",
"Legolas",
"Loras",
"Lukas",
"Oberyn",
"Obi",
"Petyr",
"Pippin",
"Poe",
"Ramsay",
"Ren",
"Lenkrad",
"Roose",
"Samweis",
"Sandor",
"Sirius",
"Shasta",
"Stannis",
"Sulu ",
"Tirian ",
"Tormund",
"Tyrion",
"Tywin",
"Tumun",
"Weide",
"Harry"
];
let frauen_namen = [
"Amidala",
"Aravis",
"Arwen",
"Arya",
"Astoria",
"Bellatrix",
"Brienne",
"Catelyn",
"Cersei",
"Cherlindrea",
"Daenerys",
"Elora",
"Blume",
"Galadriel",
"Gen",
"Gilly" ,
"Hermine",
"Katniss",
"Lavendel" ,
"Mond",
"Margaery" ,
"Melisandre" ,
"Minerva" ,
"Missandei" ,
"Morla",
"Nymphadora",
"Stern",
"Essenz" ,
"Ornela" ,
"Oscha" ,
"Padme" ,
"Stiefmütterchen",
"Raziel" ,
"König",
"Ripley",
"Sansa" ,
"Shae" ,
"Sorscha",
"Sybil",
"Ygritte",
];
let frauen_elfen = [
"Aalya",
"Aerin",
"Elyrion",
"Ammae",
"Apperford",
"Arinalu",
"Arrely",
"Arwynn",
"Ashford",
"Aurora",
"Avilyn",
"Avitihne",
"Bancey",
"Bayle",
"Beatsarda",
"Beesbury",
"Beicaryn",
"Camyla",
"Kran",
"Daedi",
"Donnis",
"Durwell",
"Elgolor",
"Elbereth",
"Elrora",
"Elyana",
"Esalin",
"Estel",
"Esthis",
"Eyva",
"Faenys",
"Gänzira",
"Garner",
"gifmedha",
"Gislila",
"Glynrie",
"Gresnalyn",
"Haleth",
"Halyziar",
"Helehorn",
"Herdan",
"Jaidyn",
"Jelissa",
"Joansevel",
"Johvis",
"Keyvyre",
"kririah",
"Laerra",
"Trikots",
"Lia",
"Liamyar",
"Liayra",
"Maryana",
"Melian",
"Bürgermeister",
"Mirazumin",
"Morwen",
"Norrey",
"Norddunkel",
"olos",
"Oloxin",
"Mischen",
"Parge",
"Reyanna",
"Rina",
"Shaed",
"Siofra",
"Sylvina",
"Tallhart",
"Taner",
"Teflorna",
"Teftrana",
"Umezorwyn",
"Valxina",
"Vicraera",
"Virdan",
"Waker",
"Wynn",
"Yinlee",
"Yvkiasha"
];
let maenner_elfen = [
"Aldon",
"Balin",
"Biwenys",
"Brackwell",
"Bryer",
"Bulwer",
"Byrant",
"Callon",
"Cartwell",
"Charcraes",
"Cherman",
"Crowlin",
"Daewynn",
"Daman",
"Dondarrion",
"Zwischen",
"Elrand",
"Gabthor",
"Fett",
"Haldir",
"Hamell",
"Heleqirelle",
"Hentevar",
"Isemthil",
"Hose",
"jarvoril",
"Jimmer",
"Chort",
"Weihnachten",
"Kyllana",
"Lindir",
"Olaqen",
"Wanderer",
"Presphine",
"Pyne",
"Richenas",
"Richtevar",
"Ridman",
"Roberd",
"Rohan",
"Rud",
"James",
"Syltumil",
"Teague",
"Terlaern",
"Theoden",
"Torgeiros",
"Ulajyre",
"Yelkrana"
];

// Generierte Liste
let generierte_liste = [];

// Nachnamen
let nachnamen = [
"Atwater",
"Agassi",
"Apatow",
"Akagawa",
"Averescu",
"Arrington",
"Agrippa",
"Aiken",
"Albertson",
"Alexander",
"Lars",
"Aschenleid",
"Humblecut",
"Ashbluff",
"Marmorschlund",
"Waffen",
"Akka",
"Aoki",
"Aldrich",
"Apache",
"Alinsky",
"Desai",
"Darby",
"Draper",
"Dwyer",
"Dixon",
"Danton",
"DeNesmithals",
"Dominguez",
"Decker",
"Dobermann",
"Dunlop",
"Dumont",
"Dandridge",
"Diamond",
"Dobra",
"Dukas",
"Lamm",
"Alterio",
"Bidbury",
"Botkin",
"Benoit",
"Bietercombe",
"Baldwin",
"Bennett",
"Bourland",
"Bootle",
"Bender",
"beste",
"Bobshaw",
"Bersa",
"Gürtel",
"Bourn",
"Borke",
"Beebe",
"Banu",
"Buzzelli",
"Bogaerts",
"Rohlinge",
"Evert",
"Eastwood",
"Elweg",
"Eslinger",
"Ellerbrock",
"Eno",
"Endo",
"Ebersol",
"Everson",
"Esapa",
"Ekker",
"Escobar",
"Eggleston",
"Hermelin",
"Erickson",
"Keller",
"Kessler",
"Kobayashi",
"Klecko",
"Anzünder",
"Kidder",
"Kershaw",
"Kaminski",
"Kirby",
"Keene",
"Kenny",
"Keogh",
"Kipps",
"Kendrick",
"Kuang",
"Fairchild",
"Oktober",
"Vespertine",
"Fellowes",
"Omen",
"Willow",
"Gannon",
"Presto",
"windwärts",
"Grell",
"Powers",
"Wixx",
"Halliwell",
"Quellen",
"Xanthos",
"Hoher Turm",
"Quill",
"Xenide",
"IdIdlewildast",
"Chamille",
"Bougaitelet",
"Hallowswift",
"Kaltsprinter",
"Winddane",
"Schafgarbe",
"Illfate",
"Rätsel",
"Eibe",
"Palisander",
"Yearwood",
"Yellen",
"Yaeger",
"Jankowitsch",
"Yamaguchi",
"Yarborough",
"Youngblood",
"Yanetta",
"Yadao",
"Winchell",
"Winters",
"Walsh",
"Whalen",
"Watson",
"Wooster",
"Woodson",
"Winthrop",
"Mauer",
"Heiligenpelz",
"Schnellklaue",
"Hazerreiter",
"Schattenhain",
"Wicht",
"Webb",
"Woodard",
"Wixx",
"Wong",
"Schnurrbart",
"Yale",
"Yasumoto",
"Yates",
"Jünger",
"Yoakum",
"York",
"Rigby",
"Zaba",
"Surrett",
"Swiatek",
"Sloane",
"Stapleton",
"Seibert",
"Stroud",
"Schritt",
"Stockton",
"Scardino",
"Spacek",
"Spieth",
"Nähen",
"Stiner",
"Soria",
"Sachse",
"Shields",
"Stelly",
"Steele",
"Chanassard",
"Ronchessac",
"Knochenflamme",
"Monsterbauch",
"Wahrheitsbauch",
"Sacredmore",
"Malfoy",
"Moses",
"Launisch",
"Morozov",
"Maurer",
"Metcalf",
"McGillicutty",
"Montero",
"Molinari",
"Sumpf",
"Moffett",
"McCabe",
"Manus",
"Malenko",
"Mullinax",
"Morrissey",
"Manzahn",
"Minz",
];
let maenner_combine = maenner_name.concat(maenner_elfen);
let frauen_combine = frauen_namen.concat(frauen_elfen);



let maennernamen = false;
let maenner_elfen_namen = false;
let frauennamen = false;
let frauen_elfen_namen = false;

let maenner_auswahl = false;
let frauen_auswahl = false;

let generierter_name = "Leer"

let zufalls_zahl_namen = null




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