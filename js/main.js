const charOne = document.querySelector("#charOne");
const charTwo = document.querySelector("#charTwo");
const charImgOne = document.querySelector("#charImgOne");
const charImgTwo = document.querySelector("#charImgTwo");
const statBtnContainerOne = document.querySelector("#statBtnContainerOne");
const statBtnContainerTwo = document.querySelector("#statBtnContainerTwo");
const infoTextContainerOne = document.querySelector("#infoTextContainerOne");
const infoTextContainerTwo = document.querySelector("#infoTextContainerTwo");
const charHeading = document.querySelector("#charHeading");

class Character {

  constructor(name, gender, height, mass, hairColor, pictureUrl) {
    this.name = name;
    this.gender = gender;
    this.height = +height;
    this.mass = +mass;
    this.hairColor = hairColor;
    this.pictureUrl = pictureUrl;
  }

  massCompare(charCompare, container) {
    if(this.mass > charCompare.mass) {
      container.innerHTML = `<p>${charCompare.name} weighs ${charCompare.mass} kg, which is ${this.mass - charCompare.mass} kg less than ${this.name}.</p>`
    } else if(this.mass < charCompare.mass) {
      container.innerHTML = `<p>${charCompare.name} weighs ${charCompare.mass} kg, which is ${charCompare.mass - this.mass} kg more than ${this.name}.</p>`
    } else {
      container.innerHTML = `<p>${charCompare.name} weighs ${charCompare.mass} kg, which is the same as ${this.name}.</p>`
    }
  }

  heightCompare(charCompare, container) {
    if(this.height > charCompare.height) {
      container.innerHTML = `<p>${charCompare.name} is ${charCompare.height} cm tall, which is ${this.height - charCompare.height} cm shorter than ${this.name}.</p>`
    } else if(this.height < charCompare.height) {
      container.innerHTML = `<p>${charCompare.name} is ${charCompare.height} cm tall, which is ${charCompare.height - this.height} cm taller than ${this.name}.</p>`
    } else {
      container.innerHTML = `<p>${charCompare.name} is ${charCompare.mass} tall, which is the same as ${this.name}.</p>`
    }
  }

  hairCompare(charCompare, container) {
    if(charCompare.hairColor === "n/a" || charCompare.hairColor === "none") {
      container.innerHTML = `<p>${charCompare.name} has no hair!</p>`;
    } else if(this.hairColor === charCompare.hairColor) {
      container.innerHTML = `<p>${charCompare.name} has the same hair color as ${this.name}: ${this.hairColor}!</p>`;
    } else {
      container.innerHTML = `<p>${charCompare.name} has ${charCompare.hairColor} hair!</p>`;
    }
  }

  genderCompare(charCompare, container) {
    if(charCompare.gender === "n/a") {
      container.innerHTML = `<p>${charCompare.name} has no specified gender!</p>`;
    } else if(this.gender === charCompare.gender) {
      container.innerHTML = `<p>${charCompare.name} is the same gender as ${this.name}: ${this.gender}!</p>`;
    } else {
      container.innerHTML = `<p>${charCompare.name} is ${charCompare.gender}!</p>`;
    }
  }
}

let fetchData = async (url) => {
  let response = await fetch(url);
  let json = await response.json();
  return json;
};

let getData = async (url) => {
  let data = await fetchData(url);
  return data;
}

let selectArr = [charOne, charTwo];
selectArr.map((select) => {
  select.addEventListener("change", () => {
    statBtnContainerOne.classList.add("hidden");
    statBtnContainerTwo.classList.add("hidden");
    infoTextContainerOne.innerHTML = "";
    infoTextContainerTwo.innerHTML = "";
  })
})

let createCharFunc = (data, char) => {
  let charName = data.name;
  let charGender = data.gender;
  let charHeight = data.height;
  let charMass = data.mass;
  let charHair = data.hair_color;
  let charImg = `../img/char-${char.value}.png`;
  let charCreator = new Character(
    charName,
    charGender,
    charHeight,
    charMass,
    charHair,
    charImg
    );
  return charCreator
}

let loadBtn = document.querySelector("#loadBtn");
loadBtn.addEventListener("click", async () => {

  if(charOne.value === "" || charTwo.value === "") {
    charHeading.innerHTML = "Pick two characters and click compare!";
  } else {
    let charOneData = await getData(`https://swapi.dev/api/people/${charOne.value}`);
    let charTwoData = await getData(`https://swapi.dev/api/people/${charTwo.value}`);
    let charCreatorOne = createCharFunc(charOneData, charOne);
    let charCreatorTwo = createCharFunc(charTwoData, charTwo);

    charHeading.innerHTML = "Ask one character about the other";

    statBtnContainerOne.classList.remove("hidden");
    statBtnContainerTwo.classList.remove("hidden");
    infoTextContainerOne.classList.remove("hidden");
    infoTextContainerTwo.classList.remove("hidden");

    charImgOne.src=`${charCreatorOne.pictureUrl}`;
    charImgTwo.src=`${charCreatorTwo.pictureUrl}`;

    let massBtnOne = document.querySelector("#massBtnOne");
    let massBtnTwo = document.querySelector("#massBtnTwo");

    massBtnOne.addEventListener("click", () => {
      charCreatorOne.massCompare(charCreatorTwo, infoTextContainerOne);
    })

    massBtnTwo.addEventListener("click", () => {
      charCreatorTwo.massCompare(charCreatorOne, infoTextContainerTwo);
    })

    let heightBtnOne = document.querySelector("#heightBtnOne");
    let heightBtnTwo = document.querySelector("#heightBtnTwo");

    heightBtnOne.addEventListener("click", () => {
      charCreatorOne.heightCompare(charCreatorTwo, infoTextContainerOne);
    })

    heightBtnTwo.addEventListener("click", () => {
      charCreatorTwo.heightCompare(charCreatorOne, infoTextContainerTwo);
    })

    let hairBtnOne = document.querySelector("#hairBtnOne");
    let hairBtnTwo = document.querySelector("#hairBtnTwo");

    hairBtnOne.addEventListener("click", () => {
      charCreatorOne.hairCompare(charCreatorTwo, infoTextContainerOne);
    })

    hairBtnTwo.addEventListener("click", () => {
      charCreatorTwo.hairCompare(charCreatorOne, infoTextContainerTwo);
    })

    let genderBtnOne = document.querySelector("#genderBtnOne");
    let genderBtnTwo = document.querySelector("#genderBtnTwo");

    genderBtnOne.addEventListener("click", () => {
      charCreatorOne.genderCompare(charCreatorTwo, infoTextContainerOne);
    })

    genderBtnTwo.addEventListener("click", () => {
      charCreatorTwo.genderCompare(charCreatorOne, infoTextContainerTwo);
    })
  }
})