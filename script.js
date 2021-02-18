const searchBtn = document.querySelector(".black-button");
const inputField = document.querySelector(".number-input");
const imageScreen = document.querySelector(".pokemon-picture");
const nameScreen = document.getElementById("name");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const type1 = document.getElementById("type-1");
const type2 = document.getElementById("type-2");

const resetFields = () => {
  nameScreen.innerHTML = "";
  height.innerHTML = "";
  weight.innerHTML = "";
  type1.innerHTML = "";
  type2.innerHTML = "";
};

const getPokemon = (num) => {
  resetFields();

  fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then((res) => res.json())
    .then((data) => {
      imageScreen.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
      nameScreen.innerHTML = data.name;
      height.innerHTML = `${data.height * 10} cm`;
      weight.innerHTML = `${data.weight / 10} kg`;
      type1.innerHTML = data.types[0].type.name;
      type2.innerHTML = "___";
      type2.innerHTML = data.types[1].type.name;
    });
};
inputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchBtn.click();
  }
});
searchBtn.addEventListener("click", () => getPokemon(inputField.value));
