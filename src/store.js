const Queue = require("./queue");

const catsArr = [
  {
    id: 1,
    name: "Helena",
    image: "http://dummyimage.com/215x249.png/dddddd/000000",
    breed: "Fox, blue",
    sex: "F",
    age: 1
  },
  {
    id: 2,
    name: "Leopold",
    image: "http://dummyimage.com/182x161.png/ff4444/ffffff",
    breed: "Fairy penguin",
    sex: "M",
    age: 2
  },
  {
    id: 3,
    name: "Ag",
    image: "http://dummyimage.com/225x198.png/5fa2dd/ffffff",
    breed: "Macaque, bonnet",
    sex: "F",
    age: 3
  },
  {
    id: 4,
    name: "Vincents",
    image: "http://dummyimage.com/227x206.png/5fa2dd/ffffff",
    breed: "Four-spotted skimmer",
    sex: "M",
    age: 4
  },
  {
    id: 5,
    name: "Field",
    image: "http://dummyimage.com/157x230.png/dddddd/000000",
    breed: "Wild water buffalo",
    sex: "M",
    age: 5
  },
  {
    id: 6,
    name: "Gillie",
    image: "http://dummyimage.com/175x110.bmp/dddddd/000000",
    breed: "Golden jackal",
    sex: "F",
    age: 6
  },
  {
    id: 7,
    name: "Bertrando",
    image: "http://dummyimage.com/132x183.png/cc0000/ffffff",
    breed: "Sloth, two-toed tree",
    sex: "M",
    age: 7
  },
  {
    id: 8,
    name: "Giffy",
    image: "http://dummyimage.com/199x214.bmp/cc0000/ffffff",
    breed: "Red-breasted cockatoo",
    sex: "M",
    age: 8
  },
  {
    id: 9,
    name: "Peirce",
    image: "http://dummyimage.com/222x122.bmp/ff4444/ffffff",
    breed: "Bat, little brown",
    sex: "M",
    age: 9
  },
  {
    id: 10,
    name: "Bryanty",
    image: "http://dummyimage.com/191x192.jpg/dddddd/000000",
    breed: "Cobra (unidentified)",
    sex: "M",
    age: 10
  }
];

const dogsArr = [
  {
    id: 1,
    name: "Helena",
    image: "http://dummyimage.com/215x249.png/dddddd/000000",
    breed: "Fox, blue",
    sex: "F",
    age: 1
  },
  {
    id: 2,
    name: "Leopold",
    image: "http://dummyimage.com/182x161.png/ff4444/ffffff",
    breed: "Fairy penguin",
    sex: "M",
    age: 2
  },
  {
    id: 3,
    name: "Ag",
    image: "http://dummyimage.com/225x198.png/5fa2dd/ffffff",
    breed: "Macaque, bonnet",
    sex: "F",
    age: 3
  },
  {
    id: 4,
    name: "Vincents",
    image: "http://dummyimage.com/227x206.png/5fa2dd/ffffff",
    breed: "Four-spotted skimmer",
    sex: "M",
    age: 4
  },
  {
    id: 5,
    name: "Field",
    image: "http://dummyimage.com/157x230.png/dddddd/000000",
    breed: "Wild water buffalo",
    sex: "M",
    age: 5
  },
  {
    id: 6,
    name: "Gillie",
    image: "http://dummyimage.com/175x110.bmp/dddddd/000000",
    breed: "Golden jackal",
    sex: "F",
    age: 6
  },
  {
    id: 7,
    name: "Bertrando",
    image: "http://dummyimage.com/132x183.png/cc0000/ffffff",
    breed: "Sloth, two-toed tree",
    sex: "M",
    age: 7
  },
  {
    id: 8,
    name: "Giffy",
    image: "http://dummyimage.com/199x214.bmp/cc0000/ffffff",
    breed: "Red-breasted cockatoo",
    sex: "M",
    age: 8
  },
  {
    id: 9,
    name: "Peirce",
    image: "http://dummyimage.com/222x122.bmp/ff4444/ffffff",
    breed: "Bat, little brown",
    sex: "M",
    age: 9
  },
  {
    id: 10,
    name: "Bryanty",
    image: "http://dummyimage.com/191x192.jpg/dddddd/000000",
    breed: "Cobra (unidentified)",
    sex: "M",
    age: 10
  }
];
const usersArr = [
  {
    id: 1,
    name: "Alicia",
    image: "http://dummyimage.com/115x182.png/5fa2dd/ffffff"
  },
  {
    id: 2,
    name: "Pieter",
    image: "http://dummyimage.com/237x177.png/dddddd/000000"
  },
  {
    id: 3,
    name: "Hestia",
    image: "http://dummyimage.com/155x148.png/5fa2dd/ffffff"
  },
  {
    id: 4,
    name: "Randa",
    image: "http://dummyimage.com/109x152.bmp/cc0000/ffffff"
  },
  {
    id: 5,
    name: "Roderich",
    image: "http://dummyimage.com/147x145.bmp/dddddd/000000"
  },
  {
    id: 6,
    name: "Gabie",
    image: "http://dummyimage.com/114x222.png/cc0000/ffffff"
  },
  {
    id: 7,
    name: "Bobina",
    image: "http://dummyimage.com/250x120.jpg/5fa2dd/ffffff"
  },
  {
    id: 8,
    name: "Davin",
    image: "http://dummyimage.com/140x172.png/5fa2dd/ffffff"
  },
  {
    id: 9,
    name: "Jaquelin",
    image: "http://dummyimage.com/171x203.png/cc0000/ffffff"
  },
  {
    id: 10,
    name: "Jacob",
    image: "http://dummyimage.com/120x180.png/5fa2dd/ffffff"
  }
];

const cats = new Queue();
catsArr.map(i => cats.enqueue(i));
const dogs = new Queue();
dogsArr.map(i => dogs.enqueue(i));
const users = new Queue();
usersArr.map(i => users.enqueue(i));

module.exports = {
  cats,
  dogs,
  users
};
