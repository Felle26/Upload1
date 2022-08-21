"use strict";

const smartphone = {
    marke: "Xiaomi",
    modell: "Redmi Note 11T Pro+ 5G",
    cpu:"MediaTek Dimensity 920",
    ram: "6Gb + 2Gb",
    speicher: "256Gb",
    kamera: "180mp"
}

smartphone.ladegeraet = "120W";
smartphone.speicher = "Super Amoled+";
console.log(smartphone);
delete smartphone.speicher;
console.log(smartphone);