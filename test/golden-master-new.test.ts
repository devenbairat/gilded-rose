import { Item, GildedRose } from '../app/gilded-rose-enhanced';

const items = [
    new Item("+5 Dexterity Vest", 10, 20), //
    new Item("Aged Brie", 2, 0), //
    new Item("Elixir of the Mongoose", 5, 7), //
    new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
    new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    // this conjured item does work properly now
    new Item("Conjured Mana Cake", 3, 6)];


const gildedRose = new GildedRose(items);
var days: number = 2;
console.log("-------Working version-------");
for (let i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach(element => {
        console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);

    });
    console.log();
    gildedRose.updateQuality();
}
console.log("------------------------");

// This test is to debug manual validation of individual items
// it('Validate individual items', function() {
//     var days: number      = 12;
//     const quality: number = 30;
//     const name: string    = "Backstage passes to a TAFKAL80ETC concert";

//     const items      = [new Item(name, days, quality)];
//     const gildedRose = new GildedRose(items);

//     for (let i = -1; i <= days; i++) {
//         console.log("-------- day " + (i + 1) + " --------");
//         console.log("name, sellIn, quality");
//         items.forEach(element => {
//             console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
    
//         });
//         console.log();
//         gildedRose.updateQuality();
//     }
// }); 