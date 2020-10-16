import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose-enhanced';

describe('Gilded Rose', function () {

    it('Concert backstage passes quality should remain same till concert is 10 days away', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 13, 30) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(12);
        expect(items[0].quality).to.equal(30);
    });

    it('Concert backstage passes quality should increase by 2 if concert is less than/equal to 10 days away', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(32);
    });

    it('Concert backstage passes quality should increase by 3 if concert is less than/equal to 5 days away', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(33);
    });

    it('Concert backstage passes quality should not increase more than 50', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(50);
    });

    it('Concert backstage passes quality should be 0 once concert date has passed', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });

    // This test is to validte individual items till the current inventory logic is corrected.
    // it('Validate individual items', function() {
    //     var days: number      = 13;
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
    //         var x = gildedRose.updateQuality();
    //     }
    // });    
});

