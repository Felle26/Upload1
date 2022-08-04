"use strict";

let Haushaltsbuch = {
    gesamt_bilanz:{
        gesamt: 0,
        einnahmen: 0,
        ausgaben: 0
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
            + `Betrag: ${eintrag.betrag / 100} €\n`
            + `Datum ${eintrag.datum}`
        );
    });
    
},
    gesamtbilanz_erstellen() {
        let neue_gesamtbilanz = {
            einnahmen: 0,
            ausgaben: 0,
            gesamt: 0
        };
        this.eintraege.forEach(function (eintrag){
            switch (eintrag.typ) {
                case "e":
                    neue_gesamtbilanz.einnahmen += eintrag.betrag;
                    neue_gesamtbilanz.gesamt += eintrag.betrag;
                    break;
                case "a":
                    neue_gesamtbilanz.ausgaben += eintrag.betrag;
                    neue_gesamtbilanz.gesamt -= eintrag.betrag;
                    break;
                default:
                console.log(`${eintrag.typ} ist nicht definiert`);
            }
        });
        console.log(this.gesamt_bilanz = neue_gesamtbilanz);
        
    },
    gesamt_bilanz_ausgeben() {
        console.log(this.gesamt_bilanz);
        console.log(`Einnahmen: ${this.gesamt_bilanz.einnahmen / 100}€\n`
            + `Ausgaben: ${ this.gesamt_bilanz.ausgaben / 100 }€\n`
            + `Bilanz: ${this.gesamt_bilanz.gesamt / 100}€\n`
            + `Deine Bilanz ist positiv: ${this.gesamt_bilanz.gesamt >= 05}`
        );
   },
    eintrag_hinzufuegen() {
        let eintrag_add = true;
        while(eintrag_add)
            {
            this.eintrag_erfassen();
            this.eintraege_ausgeben();
            this.gesamtbilanz_erstellen();
            this.gesamt_bilanz_ausgeben();
            eintrag_add = confirm("Weiteren Eintrag hinzufügen?");
            };
    }
};

Haushaltsbuch.eintrag_hinzufuegen()
// console.log(Haushaltsbuch);