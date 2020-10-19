export class Item {
    name: string;
    sellIn: number;
    quality: number;
    static itemType: string;

    constructor(name, sellIn, quality, type) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
        Item.itemType = type;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQualityOfItem(item: Item, itemType: string) {
            switch (itemType) {
                case 'concertPass': {
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
                case 'cheese': {
                    const qual = item.quality + 1;
                    item.quality = qual >= 50 ? 50 : qual;
                    break;
                }
                case 'legendary': {
                    item.quality = 80;
                    break;
                }
                case 'conjured': {
                    var qual;
                    if (item.sellIn <= 0) {
                        qual = item.quality - 4;
                    } else if (item.sellIn >= 0) {
                        qual = item.quality - 2;
                    } 
                    item.quality = qual <= 0 ? 0 : qual;
                    break;
                }
                case 'normal': {
                    var qual;
                    if (item.sellIn <= 0) {
                        qual = item.quality - 2;
                    } else if (item.sellIn >= 0) {
                        qual = item.quality - 1;
                    }
                    item.quality = qual <= 0 ? 0 : qual;
                    break;
                }
            }

            item.sellIn = itemType.includes("legendary") ? item.sellIn : item.sellIn - 1;
        return this.items;
    }
}
