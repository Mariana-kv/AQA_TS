const building = {
    type: 'house',
    room: 4,
    size: [10, 20, 30],
    details: {
        typeOfHouse: 'Cottage',
        price: 100000
    },
    showDetails: function() {
        console.log(`We have a ${this.type} with ${this.room} rooms`);
        console.log('Size:');
        this.size.forEach(size => {
            console.log(size);
        });
        console.log(`Type of house: ${this.details.typeOfHouse} and price: ${this.details.price}`);
    }
};
building.showDetails();

