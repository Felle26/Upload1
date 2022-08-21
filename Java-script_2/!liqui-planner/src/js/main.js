"use strict";

let Haushaltsbuch = {
  gesamt_bilanz: new Map(),
  eintraege: [],

  eintrag_erfassen() {
    let neuer_eintrag = new Map();
    neuer_eintrag.set("Titel", this.titel_verarbeiten(prompt("Titel:")));
    neuer_eintrag.set("Typ", this.typ_verarbeiten(prompt("was war es --e oder a--")));
    neuer_eintrag.set("Betrag", this.betrag_verarbeiten(prompt("Der Betrag in Euro (ohne € zeichen):").trim()));
    neuer_eintrag.set("Datum", this.datum_verarbeiten(prompt("Datum JJJJ-MM-TT").trim()));
    neuer_eintrag.set("timestamp", Date.now());
    this.eintraege.push(neuer_eintrag);
  },

  eintraege_ausgeben() {
    console.clear();
    this.eintraege.forEach(function (eintrag) {
      console.log(
        `Titel: ${eintrag.get("Titel")}\n` +
          `Typ: ${eintrag.get("Typ")}\n` +
          `Betrag: ${(eintrag.get("Betrag") / 100).toFixed(2)} €\n` +
          `Datum: ${eintrag.get("Datum").toLocaleDateString("de-DE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}`
      );
    });
  },
  // BETRAG --- VALIDIEREN
  betrag_verarbeiten(Betrag) {
    if (this.betrag_valid(Betrag)) {
      //Beispiel 23,64 -> "23.64" -> 23.64
      return parseFloat(Betrag.replace(",", ".")) * 100;
    } else {
      console.log(`Ungültiger Betrag: ${Betrag} €`);
      return false;
    }
  },
  betrag_valid(Betrag) {
    if (Betrag.match(/^\d+(?:(?:,|\.)\d\d?)?$/) !== null) {
      return true;
    } else {
      return false;
    }
  },

  // DATUM --- VALIDIEREN
  datum_verarbeiten(Datum) {
    if (this.datum_valid(Datum)) {
      return new Date(`${Datum} 00:00:00`);
    } else {
      return false;
    }
  },

  datum_valid(Datum) {
    if (Datum.match(/^\d{4}-\d{2}-\d{2}|$/) !== null) {
      return true;
    } else {
      return false;
    }
  },

  // TITEL --- VERARBEITEN
  titel_verarbeiten(titel) {
    titel = titel.trim();
    if (this.titel_valid(titel)) {
      return titel;
    } else {
      console.log("Keinen Titel angegeben.");
    }
  },

  titel_valid(titel) {
    if (titel !== "") {
      return true;
    } else {
      return false;
    }
  },

  // TYP --- VERARBEITEN
  typ_verarbeiten(Typ) {
    Typ = Typ.trim().toLowerCase();
    if (this.typ_valid(Typ)) {
      return Typ;
    } else {
      console.log(`Typ: ${Typ} ist nicht Definiert`);
    }
  },

  typ_valid(Typ) {
    if (Typ.match(/^(?:e|a)$/)) {
      return true;
    } else {
      return false;
    }
  },

  gesamtbilanz_erstellen() {
    let neue_gesamtbilanz = new Map();
    neue_gesamtbilanz.set("einnahmen", 0);
    neue_gesamtbilanz.set("ausgaben", 0);
    neue_gesamtbilanz.set("gesamt", 0);

    this.eintraege.forEach(function (eintrag) {
      switch (eintrag.get("Typ")) {
        case "e":
          neue_gesamtbilanz.set(
            "einnahmen",
            neue_gesamtbilanz.get("einnahmen") + eintrag.get("Betrag")
          );
          neue_gesamtbilanz.set(
            "gesamt",
            neue_gesamtbilanz.get("gesamt") + eintrag.get("Betrag")
          );
          break;
        case "a":
          neue_gesamtbilanz.set(
            "ausgaben",
            neue_gesamtbilanz.get("ausgaben") + eintrag.get("Betrag")
          );
          neue_gesamtbilanz.set(
            "gesamt",
            neue_gesamtbilanz.get("gesamt") - eintrag.get("Betrag")
          );
          break;
        default:
          console.log(`${eintrag.get("Typ")} ist nicht definiert`);
      }
    });
    console.log((this.gesamt_bilanz = neue_gesamtbilanz));
  },
  gesamt_bilanz_ausgeben() {
    console.log(
      `Einnahmen: ${(this.gesamt_bilanz.get("einnahmen") / 100).toFixed(
        2
      )}€\n` +
        `Ausgaben: ${(this.gesamt_bilanz.get("ausgaben") / 100).toFixed(
          2
        )}€\n` +
        `Bilanz: ${(this.gesamt_bilanz.get("gesamt") / 100).toFixed(2)}€\n` +
        `Deine Bilanz ist positiv: ${this.gesamt_bilanz.get("gesamt") >= 0}`
    );
  },
  eintraege_sortieren() {
    this.eintraege.sort(function (eintrag_a, eintrag_b) {
      if (eintrag_a.get("timestamp") > eintrag_b.get("timestamp")) {
        return -1;
      } else if (eintrag_a.get("timestamp") < eintrag_b.get("timestamp")) {
        return 1;
      } else {
        return 0;
      }
    });
  },
  eintrag_hinzufuegen() {
    let eintrag_add = true;
    while (eintrag_add) {
      this.eintrag_erfassen();
      this.eintraege_sortieren();
      this.eintraege_ausgeben();
      this.gesamtbilanz_erstellen();
      this.gesamt_bilanz_ausgeben();
      eintrag_add = confirm("Weiteren Eintrag hinzufügen?");
    }
  },
};

Haushaltsbuch.eintrag_hinzufuegen()
// console.log(Haushaltsbuch);
console.log(Haushaltsbuch.eintraege);