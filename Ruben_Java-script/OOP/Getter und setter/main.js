"use strict";

let konto = {
    iban: "DE6206752564419854",
    inhaber: ["Max Mustermann"],
    saldo: 3500,
    aktiv: true,
    einzahlen(einzahlung) {
        this.saldo += einzahlung;
    },
    abheben(auszahlung) {
        this.saldo -= auszahlung;
    },
    kontostand_abfragen() {
        return this.saldo;
    }
};

let k = new Konto("DE170150234815", "Sebastian Felsberg", 3500)
k.einzahlen = 1000;
k.abheben = 350;
console.log(k.kontostand_abfragen);
console.log(k);