const charOne = document.querySelector("#charOne");
const charTwo = document.querySelector("#charTwo");
const charImgOne = document.querySelector("#charImgOne");
const charImgTwo = document.querySelector("#charImgTwo");
const statBtnContainerOne = document.querySelector("#statBtnContainerOne");
const statBtnContainerTwo = document.querySelector("#statBtnContainerTwo");
const infoTextContainerOne = document.querySelector("#infoTextContainerOne");
const infoTextContainerTwo = document.querySelector("#infoTextContainerTwo");
const charHeading = document.querySelector("#charHeading");

let selectArr = [charOne, charTwo];
selectArr.map((select) => {
  select.addEventListener("change", () => {
    statBtnContainerOne.classList.add("hidden");
    statBtnContainerTwo.classList.add("hidden");
    infoTextContainerOne.innerHTML = "";
    infoTextContainerTwo.innerHTML = "";
  })
})

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