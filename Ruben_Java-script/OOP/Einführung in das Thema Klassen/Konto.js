class Konto {

    constructor(iban, inhaber, einzahlung) {
        this.iban = iban;
        this.inhaber = [inhaber];
        this.saldo = einzahlung;
        this.aktiv = true;
    }

    einzahlen(einzahlung) {
        this.saldo += einzahlung;
    }

    abheben(auszahlung) {
        this.saldo -= auszahlung;
    }

    kontostand_abfragen() {
        return this.saldo;
    }

}

let k_1 = new Konto("DE6206752564419745", "Peter Pseudocode", 3000);
let k_2 = new Konto("DE6206752564411123", "Franzi Forschleifler", 2500);
let k_3 = new Konto("DE6206752564411123", "Steffi Switchinger", 1450);
