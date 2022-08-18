"use strict";

let Haushaltsbuch = {
    gesamt_bilanz: new Map(),
    eintraege: [],
     
    eintrag_erfassen() {
        let    neuer_eintrag = new Map();
        neuer_eintrag.set("Titel", prompt("Titel:"))
        neuer_eintrag.set("Typ", prompt("was war es --e oder a--"))
        neuer_eintrag.set("Betrag", parseInt(prompt("Der Betrag in cent:")))
        neuer_eintrag.set("Datum", prompt("Datum JJJJ-MM-TT"))
        this.eintraege.push(neuer_eintrag);
    },
        
    eintraege_ausgeben() {
        console.clear();
        this.eintraege.forEach(function(eintrag) {
            console.log(`Titel: ${eintrag.get("Titel")}\n`
            + `Typ: ${eintrag.get("Typ")}\n`
            + `Betrag: ${eintrag.get("Betrag") / 100} €\n`
            + `Datum: ${eintrag.get("Datum").toLocaleDateString("de-DE", {
                year: "numeric",
                month:"2-digit",
                day: "2-digit"})}`
        );
    });
    
},
    gesamtbilanz_erstellen(){
        let neue_gesamtbilanz = new Map();
            neue_gesamtbilanz.set("einnahmen", 0);
            neue_gesamtbilanz.set("ausgaben", 0);
            neue_gesamtbilanz.set("gesamt", 0);
           
        this.eintraege.forEach(function (eintrag){
            switch (eintrag.get("Typ")) {
                case "e":
                    neue_gesamtbilanz.set("einnahmen", neue_gesamtbilanz.get("einnahmen") + eintrag.get("Betrag"));
                    neue_gesamtbilanz.set("gesamt", neue_gesamtbilanz.get("gesamt") + eintrag.get("Betrag"));
                    break;
                case "a":
                    neue_gesamtbilanz.set("ausgaben", neue_gesamtbilanz.get("ausgaben") + eintrag.get("Betrag"));
                    neue_gesamtbilanz.set("gesamt", neue_gesamtbilanz.get("gesamt") - eintrag.get("Betrag"));
                    break;
                default:
                console.log(`${eintrag.get("Typ")} ist nicht definiert`);
            }
        });
        console.log(this.gesamt_bilanz = neue_gesamtbilanz);
        
    },
    gesamt_bilanz_ausgeben() {
        console.log(`Einnahmen: ${this.gesamt_bilanz.get("einnahmen") / 100}€\n`
            + `Ausgaben: ${ this.gesamt_bilanz.get("ausgaben") / 100 }€\n`
            + `Bilanz: ${this.gesamt_bilanz.get("gesamt") / 100}€\n`
            + `Deine Bilanz ist positiv: ${this.gesamt_bilanz.get("gesamt") >= 0}`
        );
   },
   eintraege_sortieren() {
    this.eintraege.sort(function(eintrag_a, eintrag_b) {
        if (eintrag_a.datum > eintrag_b.datum){
            return -1;
        } else if (eintrag_a.datum < eintrag_b.datum) {
            return 1;
        } else {
            return 0;
        }

    });

   },
    eintrag_hinzufuegen() {
        let eintrag_add = true;
        while(eintrag_add)
            {
            this.eintrag_erfassen();
            this.eintraege_sortieren();
            this.eintraege_ausgeben();
            this.gesamtbilanz_erstellen();
            this.gesamt_bilanz_ausgeben();
            eintrag_add = confirm("Weiteren Eintrag hinzufügen?");
            };
    }
};

Haushaltsbuch.eintrag_hinzufuegen()
// console.log(Haushaltsbuch);
console.log(Haushaltsbuch.eintraege);