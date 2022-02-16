const url = new URL("https://localhost");
url.hostname = "api.openweathermap.org";
url.pathname = "/data/2.5/weather";
url.searchParams.append("lat", 57.7087);
url.searchParams.append("lon", 11.9751);
url.searchParams.append("appid", "008dac0672b16a044bdf290e5d301da9");
url.searchParams.append("units", "metric");
console.log(url.href);

function PrintExercise1() {
  let answer = document.getElementById("ex-1-out");
  answer.innerHTML = url;
}

PrintExercise1();
