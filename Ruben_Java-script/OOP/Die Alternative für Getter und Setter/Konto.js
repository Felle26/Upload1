class Konto {

    constructor(iban, inhaber, einzahlung) {
        this._iban = iban;
        this._inhaber = [inhaber];
        this._saldo = einzahlung;
        this._aktiv = true;
    }

    set einzahlen(einzahlung) {
        this._saldo += einzahlung;
    }

    set abheben(auszahlung) {
        this._saldo -= auszahlung;
    }

    get kontostand_abfragen() {
        return this._saldo;
    }

}