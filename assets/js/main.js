// ============================
//      API_fetch_Level_1_1
// ============================
console.log("%c=====API_fetch_Level_1_1=====", "color:yellowgreen");

fetch("https://picsum.photos/v2/list")
  .then((response) => response.json())
  .then((data) => console.log(data));

// ============================
//      API_fetch_Level_2_1
// ============================
console.log("%c=====API_fetch_Level_1_1=====", "color:yellowgreen");
let dataArr = [];
const section = document.createElement("section");
document.body.appendChild(section);
fetch("https://picsum.photos/v2/list")
  .then((response) => {
    return response.json();
  })
  .then((datas) => {
    datas.forEach((singelData) => {
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      image.src = singelData.download_url;
      const figcaption = document.createElement("figcaption");
      figcaption.textContent = singelData.author;
      const button = document.createElement("button");
      button.textContent = "See more";
      button.onclick = () => {
        window.open(singelData.url);
      };

      figure.append(image, figcaption, button);
      section.append(figure);
    });
  });
