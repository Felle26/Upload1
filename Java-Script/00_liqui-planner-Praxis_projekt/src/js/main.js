"use strict";

const haushaltsbuch = {
    gesamtbilanz: 
    {
        einnahmen: 0,
        ausgaben: 0,
        bilanz: 0,
    },
    

    eintraege: [],

    eintrag_erfassen() {
            this.eintraege.push(
                {
                    titel:  prompt("Deine Ausgabe oder Einnahmen", "z.B. Einkauf"),
                    typ:    prompt("TYP:", "einnahme oder ausgabe"),
                    betrag: parseInt(prompt("Der Betrag in cent")),
                    datum:  prompt("Datum (jjjj-mm-tt)"),
                }
            );
            
    },

   

    eintraege_ausgeben()
    {
        console.clear();
        this.eintraege.forEach(function(eintrag)
        {
            console.log(`${eintrag.titel}\n`
            + `typ: ${eintrag.typ}\n`
            + `betrag: ${eintrag.betrag}ct\n`
            + `datum: ${eintrag.datum}`);
        });
    },

    eintraege_sortieren(){
        this.eintraege.sort(function(eintrag_a, eintrag_b){
            if( eintrag_a.datum > eintrag_b.datum)
                {
                    return -1;
                }
            else if (eintrag_a.datum < eintrag_b.datum)
                {
                    return 1;
                } 
            else
                {
                    return 0;
                };
            
        });
        console.log(this.eintraege);
    },

    gesamtbilanz_erstellen()
        {
            let neue_gesamtbilanz = {
                einnahmen: 0,
                ausgaben: 0,
                bilanz: 0,
            }
           
            this.eintraege.forEach(function(eintrag)
            {
            switch(eintrag.typ){
                case "einnahme":
                    neue_gesamtbilanz.einnahmen = eintrag.betrag;
                    neue_gesamtbilanz.bilanz += eintrag.betrag;
                    console.log("Einnahme 1 wurde geloggt");
                    
                    break;
                case "ausgabe":
                    neue_gesamtbilanz.ausgaben = eintrag.betrag;
                    neue_gesamtbilanz.bilanz -= eintrag.betrag;
                    console.log("Ausgabe 1 wurde geloggt");
                    
                    break;
                default:
                    console.log(`Typ: ${eintrag.typ} ist nicht deklariert`);
            }
        });
        this.gesamtbilanz = neue_gesamtbilanz;
       
    },

    gesamtbillanz_ausgeben()
        {
            console.log(`Dein Einkommen ist: ${this.gesamtbilanz.einnahmen / 100}€
        Deine Ausgaben sind: ${this.gesamtbilanz.ausgaben / 100}€
        Deine Billanz ist: ${this.gesamtbilanz.bilanz / 100}€`)
            
            
        if(this.gesamtbilanz.bilanz >0)
            {
                console.log("Dein Konto ist Ausgeglichen!");
            } 
        else if(this.gesamtbilanz.bilanz == 0)
            {
                console.log("Dein Konto ist leer!");
            } 
        else if(this.gesamtbilanz.bilanz< 0)
            {
            console.log("Du hast schulden!!!");
            }
        },

      
        
    eintrag_hinzufügen(){
        let eintrag_add = true;
        while(eintrag_add)
        {
            this.eintrag_erfassen(),
            this.eintraege_sortieren(),
            this.eintraege_ausgeben(),
            this.gesamtbilanz_erstellen(),
            this.gesamtbillanz_ausgeben(),
            eintrag_add = confirm("weiteren Eintrag hinzufügen?");
        };
}};

haushaltsbuch.eintrag_hinzufügen();
console.log(haushaltsbuch);