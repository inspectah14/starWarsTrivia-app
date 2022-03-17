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

let createCharFunc = (data, char) => {
  let charName = data.name;
  let charGender = data.gender;
  let charHeight = data.height;
  let charMass = data.mass;
  let charHair = data.hair_color;
  let charImg = `./img/char-${char.value}.png`;
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