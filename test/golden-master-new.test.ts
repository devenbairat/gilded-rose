import { Item, GildedRose } from '../app/gilded-rose-enhanced';

var _items = new Array;
const items = [
    ["+5 Dexterity Vest", 10, 20, "normal"],
    ["Aged Brie", 2, 0, "cheese"],
    ["Elixir of the Mongoose", 5, 7, "normal"],
    ["Sulfuras, Hand of Ragnaros", 0, 80, "legendary"],
    ["Sulfuras, Hand of Ragnaros", -1, 80, "legendary"],
    ["Backstage passes to a TAFKAL80ETC concert", 15, 20, "concertPass"],
    ["Backstage passes to a TAFKAL80ETC concert", 10, 20, "concertPass"],
    ["Backstage passes to a TAFKAL80ETC concert", 5, 20, "concertPass"],
    ["Backstage passes to a TAFKAL80ETC concert", 10, 49, "concertPass"],
    ["Backstage passes to a TAFKAL80ETC concert", 5, 49, "concertPass"],
    ["Conjured Mana Cake", 3, 6, "conjured"]
];

items.forEach(element => {
    var x = new Item(element[0], element[1], element[2], element[3]);
    _items.push({ item: x, type: Item.itemType });
});

const gildedRose = new GildedRose(_items.map(function (i) { return i.item }));
var days: number = 2;
console.log("-------Working version------");
for (let i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    _items.forEach(element => {
        console.log(element.item.name + ' ' + element.item.sellIn + ' ' + element.item.quality);
        gildedRose.updateQualityOfItem(element.item, element.type);
    });

}
console.log("------------------------");