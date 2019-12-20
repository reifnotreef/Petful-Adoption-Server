const { cats, dogs } = require("../store");

const PetsService = {
  getCats() {
    let array = [];
    let currNode = cats.first;
    console.log(currNode.data);
    while (currNode !== undefined) {
      array.push(currNode.data);
      currNode = currNode.next;
    }
    return array;
  },
  getDogs() {
    let array = [];
    let currNode = dogs.first;
    while (currNode !== undefined) {
      array.push(currNode.data);
      currNode = currNode.next;
    }
    return array;
  },
  insertCat(newCat) {
    cats.enqueue(newCat);
  },
  insertDog(newDog) {
    dogs.enqueue(newDog);
  },
  deleteCat() {
    cats.dequeue();
  },
  deleteDog() {
    dogs.dequeue();
  }
};

module.exports = PetsService;
