"use strict";
let minimal_km = 5;
let flughafen_Preis = 375;
let nacht_preis = 215;
let tages_preis = 315;
let krankenfahrt_preis = 115;

const euro = 100;

let km_gesamt = 0;
let aktueller_preis;

km_gesamt = 5;

function flughafen_fkt() {
    preis_aendern(flughafen_Preis.toFixed(2));
    preis_ausrechnen(flughafen_Preis);
    aktueller_preis = flughafen_Preis
};

function nacht_fkt() {
    preis_aendern(nacht_preis.toFixed(2));
    preis_ausrechnen(nacht_preis);
    aktueller_preis = nacht_preis;
};


function tag_fkt() {
    preis_aendern(tages_preis.toFixed(2));
    preis_ausrechnen(tages_preis);
    aktueller_preis = tages_preis;
};


function krank_fkt() {
    preis_aendern(krankenfahrt_preis.toFixed(2));
    preis_ausrechnen(krankenfahrt_preis);
    aktueller_preis = krankenfahrt_preis;
};



function preis_aendern(preis) {
    document.getElementById("km_preis").innerHTML = `${preis / euro} €`;   
}

function km_erhoehen(){
    km_gesamt++;
    km_update()
};

function km_verringern(){
    if(km_gesamt >=1){
    km_gesamt--;
        km_update();
    }else{}
    km_update();
};

function km_erhoehen_10() {
    km_gesamt+= 10;
    km_update()
};

function km_verringern_10() {
    if(km_gesamt>=10){
    km_gesamt-= 10;
        km_update()
    } else{
        km_gesamt = 0;
    }
    km_update()
};

function km_update(){
    document.getElementById("km-anzahl").innerHTML = `${km_gesamt} KM`;
    preis_ausrechnen(aktueller_preis);
};

function preis_ausrechnen(preis){
    let kosten;
    let endbetrag;
    if(km_gesamt <= 5){
        endbetrag = 5 * preis;
    } else if (km_gesamt >5 && km_gesamt <= 20){
        endbetrag = km_gesamt * preis;
    } else if (km_gesamt >20 ){
        endbetrag = km_gesamt * (preis *0.9);
    };
    endbetrag = endbetrag / euro;
    document.getElementById("preis_gesamt").innerHTML = `${endbetrag.toFixed(2)} €`;
};