import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose-enhanced';

describe('Validate Backstage Passes to concert tests', function () {

    it('Concert backstage passes quality should increase by 1 if concert is more than 10 days away', function () {
        const itemType   = "concertPass";
        const item       = new Item("Backstage passes to a TAFKAL80ETC concert", 13, 30, itemType);
        const gildedRose = new GildedRose([item]);
        const items = gildedRose.updateQualityOfItem(item, itemType);
        expect(items[0].sellIn).to.equal(12);
        expect(items[0].quality).to.equal(31);
    });

    it('Concert backstage passes quality should increase by 2 if concert is less than/equal to 10 days away', function () {
        const itemType   = "concertPass";
        const item       = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30, itemType);
        const gildedRose = new GildedRose([item]);
        const items = gildedRose.updateQualityOfItem(item, itemType);
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(32);
    });

    it('Concert backstage passes quality should increase by 3 if concert is less than/equal to 5 days away', function () {
        const itemType   = "concertPass";
        const item       = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30, itemType);
        const gildedRose = new GildedRose([item]);
        const items = gildedRose.updateQualityOfItem(item, itemType);
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(33);
    });

    it('Concert backstage passes quality should not increase more than 50', function () {
        const itemType   = "concertPass";
        const item       = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49, itemType);
        const gildedRose = new GildedRose([item]);
        const items = gildedRose.updateQualityOfItem(item, itemType);
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(50);
    });

    it('Concert backstage passes quality should be 0 once concert date has passed', function () {
        const itemType   = "concertPass";
        const item       = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49, itemType);
        const gildedRose = new GildedRose([item]);
        const items = gildedRose.updateQualityOfItem(item, itemType);
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });
});

describe('Validate Aged Brie tests', function () {

    it('Aged Brie quality should increase by 1 after each day', function () {
        const itemType   = "cheese";
        const item       = new Item("Aged Brie", 1, 1, itemType);
        const gildedRose = new GildedRose([item]);
        const items = gildedRose.updateQualityOfItem(item, itemType);
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(2);
    });

    it('Aged Brie quality should increase by 1 after each day', function () {
        const itemType   = "cheese";
        const item       = new Item("Aged Brie", 1, 0, itemType);
        const gildedRose = new GildedRose([item]);
        const items = gildedRose.updateQualityOfItem(item, itemType);
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(1);
    });

    it('Aged Brie quality should not increase by 50', function () {
        const itemType   = "cheese";
        const item       = new Item("Aged Brie", 1, 50, itemType);
        const gildedRose = new GildedRose([item]);
        const items = gildedRose.updateQualityOfItem(item, itemType);
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(50);
    });
});

describe('Validate Legendary Sulfuras tests', function () {
    it('Sulfuras, Hand of Ragnaros quality should be always 80', function () {
        const itemType   = "legendary";
        const item       = new Item("Sulfuras, Hand of Ragnaros", 1, 50, itemType);
        const gildedRose = new GildedRose([item]);
        const items = gildedRose.updateQualityOfItem(item, itemType);
        expect(items[0].sellIn).to.equal(1);
        expect(items[0].quality).to.equal(80);
    });

    it('Sulfuras, Hand of Ragnaros quality should be always 80', function () {
        const itemType   = "legendary";
        const item       = new Item("Sulfuras, Hand of Ragnaros", 0, 0, itemType);
        const gildedRose = new GildedRose([item]);
        const items = gildedRose.updateQualityOfItem(item, itemType);
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(80);
    });
});

describe('Validate all other Normal items tests', function () {

    it('Fist of Cenarius quality should decrease by 1 after each day', function () {
        const itemType   = "normal";
        const item       = new Item("Fist of Cenarius", 1, 1, itemType);
        const gildedRose = new GildedRose([item]);
        const items = gildedRose.updateQualityOfItem(item, itemType);
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(0);
    });

    it('Fist of Cenarius quality should decrease by 2 after SellIn date has passed', function () {
        const itemType   = "normal";
        const item       = new Item("Fist of Cenarius", 0, 3, itemType);
        const gildedRose = new GildedRose([item]);
        const items = gildedRose.updateQualityOfItem(item, itemType);
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(1);
    });

    it('Fist of Cenarius quality should not be less than 0 after SellIn date has passed', function () {
        const itemType   = "normal";
        const item       = new Item("Fist of Cenarius", 0, 0, itemType);
        const gildedRose = new GildedRose([item]);
        const items = gildedRose.updateQualityOfItem(item, itemType);
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });
});

describe('Validate Conjured items tests', function () {
    it('Conjured item quality should decrease by 2 after each day', function () {
        const itemType   = "conjured";
        const item       = new Item("Conjured Mana Cake", 2, 2, itemType);
        const gildedRose = new GildedRose([item]);
        const items = gildedRose.updateQualityOfItem(item, itemType);
        expect(items[0].sellIn).to.equal(1);
        expect(items[0].quality).to.equal(0);
    });

    it('Conjured item quality should decrease by 4 after SellIn date has passed', function () {
        const itemType   = "conjured";
        const item       = new Item("Conjured Muffins", 0, 4, itemType);
        const gildedRose = new GildedRose([item]);
        const items = gildedRose.updateQualityOfItem(item, itemType);
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });

    it('Conjured item quality should not be less than 0 after SellIn date has passed', function () {
        const itemType   = "conjured";
        const item       = new Item("Conjured Water", 0, 0, itemType);
        const gildedRose = new GildedRose([item]);
        const items = gildedRose.updateQualityOfItem(item, itemType);
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });

});

