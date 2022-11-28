async function getData(query = "beng") {
  let res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${query}&api_key=REPLACE_ME`
  );
  let data = await res.json();
  displayData(data);
}
getData();

document.querySelector(".search").addEventListener("keydown", search);
function search(e) {
  let query = document.querySelector(".search");
  query = query.value;

  if (e.key === "Enter") {
    getData(query);
  }
}
function displayData(data) {
  let container = document.querySelector(".container");
  container.innerHTML = null;
  data.map((item) => {
    let img = document.createElement("img");
    img.src = item.url;
    img.setAttribute("id", "img");

    let card = document.createElement("div");
    card.setAttribute("id", "card");
    card.append(img);
    container.append(card);
  });
}


