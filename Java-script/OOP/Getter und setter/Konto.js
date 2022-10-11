class Konto {

    constructor(iban, inhaber, einzahlung) {
        this.iban = iban;
        this.inhaber = [inhaber];
        this.saldo = einzahlung;
        this.aktiv = true;
    }

    set einzahlen(einzahlung) {
        this.saldo += einzahlung;
    }

    set abheben(auszahlung) {
        this.saldo -= auszahlung;
    }

    get kontostand_abfragen() {
        return this.saldo;
    }

}