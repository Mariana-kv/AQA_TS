const building = {
    type: 'house',
    room: 4,
    buildingLength: 10,
    buildingWidth: 30,
    characteristics: {
        typeOfHouse: 'Cottage',
        price: 100
    },

    get fullInfo() {
        return `${this.type} type, ${this.room} rooms, ${this.buildingLength} length, ${this.buildingWidth} width, ${this.characteristics.typeOfHouse} typeOfHouse, ${this.characteristics.price} price`;
    },
    set updatePrice(newPrice) {
        if (newPrice > 0 && newPrice != this.characteristics.price) {
            this.characteristics.price = newPrice;
        } else {
            console.error('Incorrect or old price');
        }
    },
    calculateBuildingSize() {
        return this.buildingLength * this.buildingWidth;
    }
};

console.log("Full information:", building.fullInfo);
building.updatePrice = 200;
console.log("Updated price is: ", building.characteristics.price);
console.log("Building size information: ", building.calculateBuildingSize());

