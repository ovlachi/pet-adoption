const template = document.querySelector("#pet-card-template");
const wrapper = document.createDocumentFragment();

//Dynamic data fetch from weather.api
//To fetch current Temperature needs an API key from above URL
async function start() {
  const weatherPromise = await fetch("https://api.weatherapi.com/v1/current.json?key=ed82da91afb54a018cf131037243003&q=Melbourne&aqi=no");
  const weatherData = await weatherPromise.json();

  const ourTemperature = weatherData.current.temp_c;
  document.querySelector("#temperature-output").textContent = ourTemperature;
}
start();

//Dynamic pets fetch from external JSON file
async function petsArea() {
  const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json");
  const petsData = await petsPromise.json();

  petsData.forEach((pet) => {
    //clone the cart template
    const clone = template.content.cloneNode(true);

    //fetch all pet names from JSON and inject to the cloned template
    clone.querySelector("h3").textContent = pet.name;

    //fetch all pets description from JSON and inject to the cloned template
    clone.querySelector(".pet-card--text__body").textContent = pet.description;

    //fetch all pets birthYear from JSON and inject into the cloned template
    clone.querySelector(".pet-card--text__age").textContent = createAgeText(pet.birthYear);

    //fecth all pets photo and ALT text from JSON and inject to the template
    clone.querySelector(".pet-card--photo img").src = pet.photo;
    clone.querySelector(".pet-card--photo img").alt = `A ${pet.species} named ${pet.name}`;

    //add all cloned items to the wrapper
    wrapper.appendChild(clone);
  });

  //append the wrapper to the html DOM
  document.querySelector(".list-of-pets").appendChild(wrapper);
}

petsArea();

function createAgeText(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  if (age == 1) return "1 year old";
  if (age == 0) return "Less than a year old";

  return `${age} years old`;
}
