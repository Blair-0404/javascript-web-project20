const test1 = document.getElementById("test1");

// const apiUrl = "api.openweathermap.org/data/2.5/weather?lat=35&lon=139";

fetch(
  `http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=e42051ef5aee08c010ea927108dca2b7`
)
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch(
  `http://api.openweathermap.org/data/2.5/weather?q=Busan&appid=e42051ef5aee08c010ea927108dca2b7`
)
  .then((res) => res.json())
  .then((data) => console.log(data));
