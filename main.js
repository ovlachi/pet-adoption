async function start() {
  const weatherPromise = await fetch("https://api.weatherapi.com/v1/current.json?key=ed82da91afb54a018cf131037243003&q=Melbourne&aqi=no");
  const weatherData = await weatherPromise.json();

  const ourTemperature = weatherData.current.temp_c;
  document.querySelector("#temperature-output").textContent = ourTemperature;
}
start();
