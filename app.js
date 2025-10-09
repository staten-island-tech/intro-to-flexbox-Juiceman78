const animalList = [
  {
    name: "Beaver",
    price: 1200.0,
    instock: true,
    class: "Mammal",
    img: "images/beaver.jpg",
    alt: "Me",
  },
  {
    name: "Cat",
    price: 3.5,
    instock: true,
    class: "Mammal",
    img: "images/cat.jpg",
    alt: "Cat",
  },
  {
    name: "Clanker",
    price: 310270.25,
    instock: true,
    class: "Exotic",
    img: "images/clanker.jpg",
    alt: "Robot",
  },
  {
    name: "Flamingo",
    price: 53999.99,
    instock: true,
    class: "Aves",
    img: "images/flamingo.jpg",
    alt: "bird",
  },
  {
    name: "Giraffe",
    price: 79999.99,
    instock: true,
    class: "Mammal",
    img: "images/giraffe.jpg",
    alt: "giraffe",
  },
  {
    name: "Ox",
    price: 19999.99,
    instock: true,
    class: "Mammal",
    img: "images/ox.jpg",
    alt: "ox",
  },
  {
    name: "Panda",
    price: 44444.99,
    instock: true,
    class: "Mammal",
    img: "images/panda.jpg",
    alt: "panda",
  },
  {
    name: "Polar-Bear",
    price: 56999.99,
    instock: true,
    class: "Mammal",
    img: "images/polarbear.jpg",
    alt: "bear",
  },
  {
    name: "Puffer-Fish",
    price: 334.99,
    instock: true,
    class: "Fish",
    img: "images/pufferfish.jpg",
    alt: "fish",
  },
  {
    name: "Rabbit",
    price: 67.41,
    instock: true,
    class: "Mammal",
    img: "images/rabbit.jpg",
    alt: "wabbit",
  },
  {
    name: "Rainbow-Bird",
    price: 3939.39,
    instock: true,
    class: "Aves",
    img: "images/Rainbowbird.jpg",
    alt: "bird",
  },
  {
    name: "Imposter",
    price: 6392.02,
    instock: true,
    class: "Exotic",
    img: "images/imposter.jpg",
    alt: "sus",
  },
  {
    name: "John-Pork",
    price: 100000.0,
    instock: true,
    class: "Exotic",
    img: "images/Johnpork.jpg",
    alt: "pork",
  },
  {
    name: "Hairline",
    price: 122.99,
    instock: true,
    class: "Exotic",
    img: "images/Hairline.jpg",
    alt: "Holy-hair",
  },
  {
    name: "Grinch",
    price: 399339.39,
    instock: true,
    class: "Exotic",
    img: "images/Grinch.webp",
    alt: "knee",
  },
  {
    name: "Lion",
    price: 7299.99,
    instock: true,
    class: "Mammal",
    img: "images/lion.jpg",
    alt: "the lion",
  },
  {
    name: "Monster",
    price: 57777.77,
    instock: true,
    class: "Exotic",
    img: "images/kid.jpg",
    alt: "mason",
  },
  {
    name: "Eagle",
    price: 9999.99,
    instock: true,
    class: "Aves",
    img: "images/eagle.jpg",
    alt: "amurica",
  },
  {
    name: "Blobfish",
    price: 4141.99,
    instock: true,
    class: "Fish",
    img: "images/blob.jpg",
    alt: "myat",
  },
  {
    name: "Dog",
    price: 933.99,
    instock: true,
    class: "Mammal",
    img: "images/dog.jpg",
    alt: "man's best friend",
  },
];

//create inject function

function inject(item) {
  //query the html where we inject the card
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<h1>${item.name}</h1>, <h2>${item.price}</h2>,<img src="${item.img}" alt="${item.alt}">`
  );
}
item.forEach((animal) => {});
inject(animalList[0]);
inject(animalList[1]);
inject(animalList[2]);
inject(animalList[3]);
inject(animalList[4]);
inject(animalList[5]);
inject(animalList[6]);
inject(animalList[7]);
inject(animalList[8]);
inject(animalList[9]);
inject(animalList[10]);
