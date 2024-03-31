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
    console.log(pet.species);
  });
}

petsArea();
