export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            switch (item.name) {
                case 'Backstage passes to a TAFKAL80ETC concert': {
                    var qual;
                    if ((item.sellIn > 11 && item.quality <= 50)) {
                        qual = item.quality + 1;
                    } else if ((item.sellIn <= 11 && item.sellIn > 6 && item.quality <= 50)) {
                        qual = item.quality + 2;
                    } else if ((item.sellIn <= 6 && item.sellIn >= 1 && item.quality <= 50)) {
                        qual = item.quality + 3;
                    }

                    if (item.sellIn == 0) {
                        item.quality = 0;
                    } else {
                        item.quality = qual >= 50 ? 50 : qual;
                    }
                    break;
                }
                case 'Aged Brie': {
                    const qual = item.quality + 1;
                    item.quality = qual >= 50 ? 50 : qual;
                    break;
                }
                case 'Sulfuras, Hand of Ragnaros': {
                    item.quality = 80;
                    break;
                }
                default: {
                    var qual;
                    if (item.name.includes("Conjured") && item.sellIn <= 0) {
                        qual = item.quality - 4;
                    } else if ((item.name.includes("Conjured") && item.sellIn >= 0) || (!item.name.includes("Conjured") && item.sellIn <= 0)) {
                        qual = item.quality - 2;
                    } else if (!item.name.includes("Conjured") && item.sellIn >= 0) {
                        qual = item.quality - 1;
                    }
                    item.quality = qual <= 0 ? 0 : qual;
                    break;
                }
            }

            item.sellIn = item.name.includes("Sulfuras, Hand of Ragnaros") ? item.sellIn : item.sellIn - 1;
        }
        return this.items;
    }
}
