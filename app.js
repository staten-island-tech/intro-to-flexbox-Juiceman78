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
    name: "Blobfish",
    price: 4141.99,
    instock: true,
    class: "Fish",
    img: "images/blob.jpg",
    alt: "myat",
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
    name: "Imposter",
    price: 6392.02,
    instock: true,
    class: "Exotic",
    img: "images/imposter.jpg",
    alt: "sus",
  },
  {
    name: "Johnpork",
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
    name: "Polarbear",
    price: 56999.99,
    instock: true,
    class: "Mammal",
    img: "images/polarbear.jpg",
    alt: "bear",
  },
  {
    name: "Pufffish",
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
    name: "Rainbow",
    price: 3939.39,
    instock: true,
    class: "Aves",
    img: "images/Rainbowbird.jpg",
    alt: "bird",
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
    name: "Eagle",
    price: 9999.99,
    instock: true,
    class: "Aves",
    img: "images/eagle.jpg",
    alt: "amurica",
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
let total = 0;
//create inject function
function injectTop() {
  const containertop = document.querySelector(".filter");
  containertop.insertAdjacentHTML(
    "afterbegin",
    `<div class="filter">
    <button class= "Filter" id = "Mammal"> Mammal </button>
    <button class= "Filter" id = "Fish"> Fish </button>
    <button class= "Filter" id ="Aves"> Aves </button>
    <button class= "Filter" id ="Exotic"> Exotic </button>`
  );
}
injectTop();
function inject(item) {
  //query the html where we inject the card
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
        <h2 class="title">${item.name}</h2>
        <img src=${item.img} alt="Dog" class="card-img" />
        <h3 class="price">${item.price}</h3>
        <button class="button" id = ${item.name} data-title = ${item.name} data-price = ${item.price}>Buy Me</button>
      </div> `
  );
}
animalList.forEach((element) => {
  inject(element);
});

function getBtn() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      item = event.target.closest(".button").getAttribute("data-title");
      price = event.target.closest(".button").getAttribute("data-price");
      add = Number(price);
      total += add;
      addCart(item, total);
      /* removeCart(); */
      filterCart(item);
    })
  );
}

getBtn();

function addCart(item) {
  let found = animalList.find((animal) => animal.name === item);
  const container = document.querySelector(".cartd");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="cart">
    <h2 class="name">${found.name}</h2>
    <h2 class="price">${found.price}</h2></div>
    <button class= "remove"> Remove Item</button>
    <h3> "Your total is:" ${total}</h3>`
  );
}
/* function removeCart() {
  const buttons = document.querySelectorAll(".remove");
  buttons.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      event.target.closest(".cart").remove();
    })
  );
} */

function filterCart(item) {
  const buttons = document.querySelectorAll(".filter");
  buttons.forEach((btn) =>
    btn.addEventListener("click", function () {
      console.log(category);
      /* container.insertAdjacentHTML(
        "afterbegin",
        `<div class="card">
        <h2 class="title">${category.name}</h2>
        <img src=${category.img} alt="Dog" class="card-img" />
        <h3 class="price">${category.price}</h3>
        <button class="button" id = ${category.name} data-title = ${category.name}>Buy Me</button>
      </div> `
      ); */
    })
  );
}

//make array
//put cards on screen with JS
//make a cart (HTML, JS)
// add to cart to button
// find item in array
