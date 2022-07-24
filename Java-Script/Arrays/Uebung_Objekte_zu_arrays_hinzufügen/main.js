"use strict";

const inventory = 
{
    inventar_gewicht: 0,
    inventar: [],
    AddItem()
    {
        let item_add = confirm("Ein Item hinzufügen?");
        if( item_add == true){
           
    this.inventar.push // fügt gegenstände mit Namen, Gewicht und Preis als Objekt zu dem Inventar hinzu.
    (
        {
            name: prompt("Name"),
            weight: prompt("Gewicht"),
            price: prompt("Preis"),
        }
    )}},
    total_weight()
    {
        this.inventar.forEach(function(e){
            inventar_gewicht += e.weight;
        })
    },

    add_Item_and_weight(){
        this.AddItem();
        this.total_weight();
    },
    
    
    

};
    
inventory.add_Item_and_weight();


inventory.AddItem();


console.log(inventory);
console.log(inventar_gewicht);