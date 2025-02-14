const building = {
    type: 'house',
    _room: 4,
    buildingLength: 10,
    buildingWidth: 30,
    characteristics: {
        typeOfHouse: 'Cottage',
        price: 100
    },

    get room() {
        return this._room;
    },
    set room(newRoomCount) {
        if (newRoomCount > 0 && newRoomCount !== this._room) {
            this._room = newRoomCount;
        } else {
            console.error('Incorrect or same room count');
        }
    },

    get fullInfo() {
        return `${this.type}, ${this._room} rooms, ${this.buildingLength} length, ${this.buildingWidth} width, ${this.characteristics.typeOfHouse}, ${this.characteristics.price}`;
    },
    updatePrice(newPrice) {
        if (newPrice > 0 && newPrice !== this.characteristics.price) {
            this.characteristics.price = newPrice;
        } else {
            console.error('Incorrect or old price');
        }
    },
    calculateRoomsSize() {
        return this.buildingLength * this.buildingWidth;
    }
};

console.log(building.fullInfo);

building.updatePrice(200);
console.log("Updated price: ", building.characteristics.price);
console.log("Room size: ", building.calculateRoomsSize());

console.log("Old room count: ", building.room);
building.room = 5;
console.log("New room count: ", building.room);
