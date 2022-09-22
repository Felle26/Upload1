"use strict";

const eingabeformular = {
    formulardaten_holen(e){
        return{
            titel: e.target.elements.titel.value,
            betrag: e.target.elements.betrag.value,
            einnahme: e.target.elements.einnahme.checked,
            datum: e.target.elements.datum.valueAsDate
        }
  
    },

    formulardaten_verarbeiten(formulardaten){
        return {
          titel: formulardaten.titel.trim(),
          typ: formulardaten.einnahme === false ? "ausgabe" : "einnahme",
          betrag: formulardaten.betrag * 100,
          datum: formulardaten.datum
        };
    },

    formulardaten_validieren(formulardaten){
        let formularfehler = [];
        if(formulardaten.titel ===""){
            formularfehler.push("Titel!")
        }
        if(formulardaten.datum === null){
            formularfehler.push("Datum");
        }
        if(isNaN(formulardaten.betrag)){
            formularfehler.push("Betrag!")
        }
        return formularfehler;
    },

  absenden_event_hinzufuegen(eingabeformular) {
    eingabeformular
      .querySelector("#eingabeformular")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        let formulardaten = this.formulardaten_verarbeiten(this.formulardaten_holen(e));
        let formularfehler = this.formulardaten_validieren(formulardaten);
    
        if( formularfehler.length === 0 ){
            Haushaltsbuch.eintrag_hinzufuegen(formulardaten);
            this.fehlerbox_entfernen();
            e.target.reset();           
            this.datum_aktualisieren();
        }
        else{
            this.fehlerbox_entfernen();
            this.fehlerbox_anzeigen(formularfehler);
        };            
      });
  },
  
  datum_aktualisieren(){
    let datum_input = document.querySelector("#datum")
    //Datum auf den heutigen Tag setzen
    if( datum_input !== null){
        document.querySelector("#datum").valueAsDate = new Date();
    }
    
  },

  html_fehlerbox_generieren(formularfehler){
    let fehlerbox = document.createElement("div");
    fehlerbox.setAttribute("class", "fehlerbox");

    let fehlertext = document.createElement("span");
    fehlertext.textContent = "Es gibt Fehler in Folgenden Eingabefeldern:";
    fehlerbox.insertAdjacentElement("afterbegin", fehlertext);

    let fehlerliste = document.createElement("ul");
    formularfehler.forEach(e => {
        let fehlerlistenpunkt = document.createElement("li");
        fehlerlistenpunkt.textContent = e;
        fehlerliste.insertAdjacentElement("beforeend", fehlerlistenpunkt);
        });
        
    fehlerbox.insertAdjacentElement("beforeend", fehlerliste);
    return fehlerbox;
    },

    fehlerbox_anzeigen(formularfehler){
        let eingabeformular_container = document.querySelector("#eingabeformular-container")
        if( eingabeformular_container !== null){
            eingabeformular_container.insertAdjacentElement("afterbegin", this.html_fehlerbox_generieren(formularfehler))
        }
    },

    fehlerbox_entfernen(){
        let bestehende_fehlerbox = document.querySelector(".fehlerbox");
        if(bestehende_fehlerbox !== null){
            bestehende_fehlerbox.remove();
        }
    },


  html_generieren() {
    let eingabeformular = document.createElement("section");
    eingabeformular.setAttribute("id", "eingabeformular-container");
    eingabeformular.innerHTML = `
        <form id="eingabeformular" action="#" method="get"></form>
        <!-- Titel -->
        <div class="eingabeformular-zeile">
            <h1>Neue Einnahme / Ausgabe hinzufügen</h1>
        </div>
        <!-- Titel-Typ-Eingabezeile -->
        <div class="eingabeformular-zeile">
            <div class="titel-typ-eingabe-gruppe">
                <label for="titel">Titel</label>
                <input type="text" id="titel" form="eingabeformular" name="titel" placeholder="z.B. Einkaufen" size="10" title="Titel des Eintrags" required>
                <input type="radio" id="einnahme" name="typ" value="einnahme" form="eingabeformular" title="Typ des Eintrags">
                <label for="einnahme" title="Typ des Eintrags">Einnahme</label>
                <input type="radio" id="ausgabe" name="typ" value="ausgabe" form="eingabeformular" title="Typ des Eintrags" checked>
                <label for="ausgabe" title="Typ des Eintrags">Ausgabe</label>
            </div>
        </div>
        <!-- Betrag-Datum-Eingabezeile -->
        <div class="eingabeformular-zeile">
            <div class="betrag-datum-eingabe-gruppe">
                <label for="betrag">Betrag</label>
                <input type="number" id="betrag" name="betrag" form="eingabeformular" placeholder="z.B. 10,42" size="10" step="0.01" title="Betrag des Eintrags (max. zwei Nachkommastellen, kein €-Zeichen) " required>
                <label for="datum">Datum</label>
                <input type="date" id="datum" name="datum" form="eingabeformular" placeholder="jjjj-mm-tt" size="10" title="Datum des Eintrags (Format: jjjj-mm-tt) "required>
            </div>
        </div>
        <!-- Absenden-Button -->
        <div class="eingabeformular-zeile">
            <button class="standard" type="submit" form="eingabeformular">Hinzufügen</button>
        </div>`;
        this.absenden_event_hinzufuegen(eingabeformular);
    return eingabeformular;
  },

  anzeigen() {
    let navigationsleiste = document.querySelector("#navigationsleiste");
    if(navigationsleiste !== null){
        navigationsleiste.insertAdjacentElement(
          "afterend",
          this.html_generieren());
        this.datum_aktualisieren();
    }
  },
};