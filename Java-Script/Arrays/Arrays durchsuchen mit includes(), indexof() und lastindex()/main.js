"use strict";

let personen = 
    [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Marcel",
    "Mia"
    ];

    // includes(): Durchsucht das Array ab einem bestimmten Startindex nach einem Wert und gibt true zurück,
    // wenn das Element gefunden wurde, bzw. false, wenn es nicht gefunden wurde
    // Syntax: includes(Suchwert, [Startindex])
    // nicht Destruktiv

    console.log(personen.includes("Marcel", 0)); //true
    console.log(personen.includes("Marcel", 2)); //false

    // indexOf(): Durchsucht das Array ab einem Startindex nach einem Wert und gibt den Index
    // der ersten Fundstelle zurück, wenn der Wert gefunden wurde, oder -1 wenn der Wert nicht im Array gefunden wurde
    // Syntax indexOf(Suchwert[,Startindex])
    // nicht Destruktiv

    console.log(personen.indexOf("Hubert"));
    console.log(personen.indexOf("Marcel",0));
    console.log(personen.indexOf("Marcel",2));

    // LastIndexOf(); Durchsucht das Arrayab einem Startindex rückwärts nach einem Wert und gibt den Index der ersten Fundstelle
    // zurück, wenn der Wert gefunden wurde, oder -1, wenn der Wert nicht im Array gefunden wurde
    // Syntax: lastIndexOf(Suchwert, [StartIndex]);
    // nicht Destruktiv
    
    console.log(personen.lastIndexOf("Marcel")); // gibt den letzten Array wert zurück
    console.log(personen.lastIndexOf("Marcel", 3)); // gibt den ersten Array wert zurück