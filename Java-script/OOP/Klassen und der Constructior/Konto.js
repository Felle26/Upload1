"use strict";

class Konto{

    constructor(iban, inhaber,einzahlung) {
        this.iban = iban;
        this.inhaber = [inhaber];
        this.saldo = einzahlung;
        this.aktiv = true;
    }
}