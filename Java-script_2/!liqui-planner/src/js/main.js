"use strict";

let Haushaltsbuch = {
  gesamt_bilanz: new Map(),
  eintraege: [],
  fehler: [],

  eintrag_erfassen() {
    let neuer_eintrag = new Map();
    this.fehler = [];
    neuer_eintrag.set("Titel", this.titel_verarbeiten(prompt("Titel:")));
    neuer_eintrag.set(
      "Typ",
      this.typ_verarbeiten(prompt("was war es einnahme oder ausgabe"))
    );
    neuer_eintrag.set(
      "Betrag",
      this.betrag_verarbeiten(prompt("Der Betrag in Euro (ohne € zeichen):"))
    );
    neuer_eintrag.set(
      "Datum",
      this.datum_verarbeiten(prompt("Datum JJJJ-MM-TT"))
    );
    neuer_eintrag.set("timestamp", Date.now());
    if (!this.fehler.length > 0) {
      this.eintraege.push(neuer_eintrag);
    }
  },
  // BETRAG --- VALIDIEREN
  betrag_verarbeiten(Betrag) {
    {
      Betrag = Betrag.trim();
      if (this.betrag_valid(Betrag)) {
        return parseFloat(Betrag.replace(",", ".")) * 100;
      } else {
        this.fehler.push(`Ungültiger Betrag: ${Betrag} €`);
        return false;
      }
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
    Datum = Datum.trim();
    if (this.datum_valid(Datum)) {
      return new Date(`${Datum} 00:00:00`);
    } else {
      this.fehler.push(`Ungültiges Datumsformat: "${Datum}".`);
      return false;
    }
  },

  datum_valid(Datum) {
    if (Datum.match(/^\d{4}-\d{2}-\d{2}$/) !== null) {
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
      this.fehler.push("Keinen Titel angegeben.");
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
      this.fehler.push(`Typ: ${Typ} ist nicht Definiert`);
    }
  },

  typ_valid(Typ) {
    if (Typ.match(/^(?:einnahme|ausgabe)$/)) {
      return true;
    } else {
      return false;
    }
  },

  html_eintrag_generieren(eintrag) {
    let listenpunkt = document.createElement("li");
    if (eintrag.get("Typ") === "einnahme") {
      listenpunkt.setAttribute("class", "einnahme");
    } else if (eintrag.get("Typ") === "ausgabe") {
      listenpunkt.setAttribute("class", "ausgabe");
    }

    listenpunkt.setAttribute("data-timestamp", eintrag.get("timestamp"));

    let datum = document.createElement("span");
    datum.setAttribute("class", "datum");
    datum.textContent = eintrag.get("Datum").toLocaleDateString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    listenpunkt.insertAdjacentElement("afterbegin", datum);

    let titel = document.createElement("span");
    titel.setAttribute("class", "titel");
    titel.textContent = eintrag.get("Titel");
    datum.insertAdjacentElement("afterend", titel);

    let betrag = document.createElement("span");
    betrag.setAttribute("class", "betrag");
    betrag.textContent = `${(eintrag.get("Betrag") / 100)
      .toFixed(2)
      .replace(/\./, ",")} €`;
    titel.insertAdjacentElement("afterend", betrag);

    let button = document.createElement("button");
    button.setAttribute("class", "entfernen-button");
    betrag.insertAdjacentElement("afterend", button);

    let icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-trash");
    button.insertAdjacentElement("afterbegin", icon);

    return listenpunkt;
  },

  eintraege_anzeigen() {
    document
      .querySelectorAll(".monatsliste ul")
      .forEach(function (eintragsliste) {
        eintragsliste.remove();
      });
    let eintragsliste = document.createElement("ul");
    for (let eintrag of this.eintraege) {
      eintragsliste.insertAdjacentElement(
        "beforeend",
        this.html_eintrag_generieren(eintrag)
      );
    }
    document
      .querySelector(".monatsliste")
      .insertAdjacentElement("afterbegin", eintragsliste);
  },

  gesamtbilanz_anzeigen(){
    document.querySelectorAll("#gesamtbilanz").forEach(function(gesamtbilanz) {
      gesamtbilanz.remove();
    });
    document.querySelector("body").insertAdjacentElement("beforeend", this.html_gesamtbilanz_generieren());
  },




html_gesamtbilanz_generieren(){

  let gesamtbilanz = document.createElement("aside");
  gesamtbilanz.setAttribute("id", "gesamtbilanz");
  let ueberschrift = document.createElement("h1");
  ueberschrift.textContent = "Gesamtbilanz";
  gesamtbilanz.insertAdjacentElement("afterbegin", ueberschrift);

  let einnahmen_zeile = document.createElement("div");
  einnahmen_zeile.setAttribute("class", "gesamtbilanz-zeile einnahmen");
  let einnahmen_titel = document.createElement("span");
  einnahmen_titel.textContent = "Einnahmen:"
  einnahmen_zeile.insertAdjacentElement("afterbegin", einnahmen_titel)
  let einnahmen_betrag = document.createElement("span");
  einnahmen_betrag.textContent = `${(this.gesamt_bilanz.get("einnahmen") /100).toFixed(2).replace(/\./, ",")} €`
  einnahmen_zeile.insertAdjacentElement("beforeend", einnahmen_betrag);
  gesamtbilanz.insertAdjacentElement("beforeend", einnahmen_zeile);

  let ausgaben_zeile = document.createElement("div");
  ausgaben_zeile.setAttribute("class", "gesamtbilanz-zeile ausgaben");
  let ausgaben_titel = document.createElement("span");
  ausgaben_titel.textContent = "Ausgaben:";
  ausgaben_zeile.insertAdjacentElement("afterbegin", ausgaben_titel);
  let ausgaben_betrag = document.createElement("span");
  ausgaben_betrag.textContent = `${(
  this.gesamt_bilanz.get("ausgaben") / 100).toFixed(2).replace(/\./, ",")} €`;
  ausgaben_zeile.insertAdjacentElement("beforeend", ausgaben_betrag);
  gesamtbilanz.insertAdjacentElement("beforeend", ausgaben_zeile);

  let bilanz_zeile = document.createElement("div");
  bilanz_zeile.setAttribute("class","gesamtbilanz-zeile bilanz");
  let bilanz_titel = document.createElement("span");
  bilanz_titel.textContent = "Bilanz:";
  bilanz_zeile.insertAdjacentElement("afterbegin",bilanz_titel);
  let bilanz_betrag = document.createElement("span");
    if (this.gesamt_bilanz.get("gesamt") >= 0) {
      bilanz_betrag.setAttribute("class", "positiv");
    } else if (this.gesamt_bilanz.get("gesamt") < 0) {
      bilanz_betrag.setAttribute("class", "negativ");
    }
  bilanz_betrag.textContent = `${(this.gesamt_bilanz.get("gesamt") / 100).toFixed(2).replace(/\./, ",")} €`;
  bilanz_zeile.insertAdjacentElement("beforeend",bilanz_betrag);
  gesamtbilanz.insertAdjacentElement("beforeend", bilanz_zeile);
        
  return gesamtbilanz;
  },

  gesamtbilanz_erstellen() {
    let neue_gesamtbilanz = new Map();
    neue_gesamtbilanz.set("einnahmen", 0);
    neue_gesamtbilanz.set("ausgaben", 0);
    neue_gesamtbilanz.set("gesamt", 0);

    this.eintraege.forEach(function (eintrag) {
      switch (eintrag.get("Typ")) {
        case "einnahme":
          neue_gesamtbilanz.set(
            "einnahmen",
            neue_gesamtbilanz.get("einnahmen") + eintrag.get("Betrag")
          );
          neue_gesamtbilanz.set(
            "gesamt",
            neue_gesamtbilanz.get("gesamt") + eintrag.get("Betrag")
          );
          break;
        case "ausgabe":
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

  eintraege_sortieren() {
    this.eintraege.sort(function (eintrag_a, eintrag_b) {
      if (eintrag_a.get("Datum") > eintrag_b.get("Datum")) {
        return -1;
      } else if (eintrag_a.get("Datum") < eintrag_b.get("Datum")) {
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
      this.eintraege_anzeigen();
      this.gesamtbilanz_erstellen();
      this.gesamtbilanz_anzeigen();
      eintrag_add = confirm("Weiteren Eintrag hinzufügen?");
    }
  },
};

Haushaltsbuch.eintrag_hinzufuegen()
// console.log(Haushaltsbuch);
console.log(Haushaltsbuch.eintraege);