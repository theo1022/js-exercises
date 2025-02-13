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
const printBtnFetchElem = document.getElementById("ex-2-btn");
const answer2Elem = document.getElementById("ex-2-out");
printBtnFetchElem.onclick = function () {
  fetch(url)
    .then((response) => response.text())
    .then((text) => (answer2Elem.innerHTML = JSON.stringify(text)));
};

//----------------------------------------------------------------------//
//                               ÖVNING 3                               //
//----------------------------------------------------------------------//

const printBtnAjaxElem = document.getElementById("ex-3-btn");
const answer3Elem = document.getElementById("ex-3-out");

printBtnAjaxElem.onclick = function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = function () {
    if (xhr.status == 200) answer3Elem.innerHTML = "Response 200 recieved";
    else answer3Elem.innerHTML = "Response other than 200 recieved";
  };
  xhr.onerror = function () {
    debugger;
  };
};

//----------------------------------------------------------------------//
//                               ÖVNING 4                               //
//----------------------------------------------------------------------//
const printBtnCheckElem = document.getElementById("ex-4-btn");
const answer4Elem = document.getElementById("ex-4-out");
printBtnCheckElem.onclick = function () {
  fetch(url)
    .then((response) => response.json())
    .then((object) => {
      console.log(object.weather);
      console.log(object.main);
      const weather = object.weather[0].description;
      const tempMax = object.main.temp_max;
      const tempMin = object.main.temp_min;
      answer4Elem.innerHTML = `Current weather: ${weather} with temperatures 
      ranging between ${tempMax} and ${tempMin} degres cesius`;
    });
};

//----------------------------------------------------------------------//
//                               ÖVNING 5                               //
//----------------------------------------------------------------------//
const postTitleElem = document.getElementById("ex-5-title");
const postContentElem = document.getElementById("ex-5-content");
const postAuthorElem = document.getElementById("ex-5-author");
const commentElem = document.getElementById("ex-5-comments");

const postUrl = new URL("https://jsonplaceholder.typicode.com");
postUrl.pathname = "/posts";
postUrl.searchParams.append("_limit", 1);
postUrl.searchParams.append("userId", 5);
console.log(postUrl.href);

fetch(postUrl)
  .then((response) => response.json())
  .then((object) => {
    postTitleElem.innerHTML = object[0].title;
    postContentElem.innerHTML = object[0].body;
    postAuthorElem.innerHTML = object[0].userId;
  });
