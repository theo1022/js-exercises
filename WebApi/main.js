//----------------------------------------------------------------------//
//                               ÖVNING 1                               //
//----------------------------------------------------------------------//
const url = new URL("https://localhost");
url.hostname = "api.openweathermap.org";
url.pathname = "/data/2.5/weather";
url.searchParams.append("lat", 57.7087);
url.searchParams.append("lon", 11.9751);
url.searchParams.append("appid", "008dac0672b16a044bdf290e5d301da9");
url.searchParams.append("units", "metric");
console.log(url.href);

function PrintExercise1() {
  let answer1Elem = document.getElementById("ex-1-out");
  answer1Elem.innerHTML = url;
}

PrintExercise1();

//----------------------------------------------------------------------//
//                               ÖVNING 2                               //
//----------------------------------------------------------------------//
const printBtnElem = document.getElementById("ex-2-btn");
const answer2Elem = document.getElementById("ex-2-out");
printBtnElem.onclick = function () {
  fetch(url)
    .then((response) => response.text())
    .then((text) => (answer2Elem.innerHTML = JSON.stringify(text)));
};
