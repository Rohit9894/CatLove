async function getData() {
  let res = await fetch("https://api.thecatapi.com/v1/breeds?limit=10");
  let data = await res.json();
  console.log(data);
  displayData(data);
}
let Temperament = "Temperament";
Temperament = Temperament.bold();

getData();
function displayData(data) {
  let container = document.querySelector(".container");
  data.map((item) => {
    let img = document.createElement("img");
    img.src = item.image.url;
    img.setAttribute("id", "img");
    img.addEventListener("click", () => {
      myfunction(item);
    });

    let name = document.createElement("h3");
    name.innerText = `Name : ${item.name}`;
    name.style.color = "black";

    let tempermant = document.createElement("p");

    tempermant.innerHTML = Temperament + " : " + item.temperament;
    let wikipedia = document.createElement("a");
    wikipedia.href = item.wikipedia_url;
    wikipedia.innerText = "wikipedia";
    let card = document.createElement("div");
    card.setAttribute("id", "card");
    card.append(img, name, tempermant, wikipedia);
    container.append(card);
  });
  function myfunction(data) {
    localStorage.setItem("details", JSON.stringify(data));
    window.location.href = "/Cat/cat.html";
  }
}
