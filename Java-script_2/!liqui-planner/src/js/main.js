"use strict";

let Haushaltsbuch = {
    gesamt_bilanz:{
        bilanz: null,
        einnahmen: null,
        ausgaben: null
    },
    eintraege: [],
     
    eintrag_erfassen() {
        this.eintraege.push({
            titel: prompt("was war es?"),
            typ: prompt("e oder a"),
            betrag: parseInt(prompt("Der Betrag in cent:")),
            datum: prompt("Wann war es , JJJJ-MM-TT")
            }
        );
    },
        
    eintraege_ausgeben() {
        console.clear();
        this.eintraege.forEach(function(eintrag) {
            console.log(`Titel: ${eintrag.titel}\n`
            + `Typ: ${eintrag.typ}\n`
            + `Betrag: ${eintrag.betrag} €\n`
            + `Datum ${eintrag.datum}`
        );
    });
    
},
//     eintrag_mit_gesamtbilanz_verrechnen() {
//         switch (this.neuer_eintrag.typ){
//             case "e":
//                 this.gesamt_bilanz.einnahmen += this.neuer_eintrag.betrag;
//                 this.gesamt_bilanz.bilanz += this.neuer_eintrag.betrag;
//                 break;
//             case "a":
//                 this.gesamt_bilanz.ausgaben += this.neuer_eintrag.betrag;
//                 this.gesamt_bilanz.bilanz -= this.neuer_eintrag.betrag;
//                 break;
//             default:
//             console.log(`${this.neuer_eintrag.typ} ist nicht definiert`);
//         };
//     },
//     gesamt_bilanz_ausgeben() {
//         console.log(`Einnahmen: ${this.gesamt_bilanz.einnahmen / this.euro}€
// Ausgaben: ${this.gesamt_bilanz.ausgaben / this.euro}€
// Bilanz: ${this.gesamt_bilanz.bilanz / this.euro}€
// Deine Bilanz ist positiv: ${this.gesamt_bilanz.bilanz >= 0}`
//         );
//    },
    eintrag_hinzufuegen() {
        this.eintrag_erfassen();
        this.eintraege_ausgeben();
        this.gesamtbilanz_erstellen();
        this.gesamt_bilanz_ausgeben();
    }
};

Haushaltsbuch.eintrag_hinzufuegen()
Haushaltsbuch.eintrag_hinzufuegen()
Haushaltsbuch.eintrag_hinzufuegen()
console.log(Haushaltsbuch);