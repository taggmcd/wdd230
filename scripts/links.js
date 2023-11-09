const baseURL = "https://taggmcd.github.io/wdd230/";
const linksURL = "https://taggmcd.github.io/wdd230/data/links.json";
const sectionElement = document.getElementById("activities");

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons);
  //   console.log(data);
}

const displayLinks = (lessons) => {
  let h3Element = document.createElement("h3");
  h3Element.textContent = "Learning Activities";
  let ulElement = document.createElement("ul");
  sectionElement.appendChild(h3Element);
  sectionElement.appendChild(ulElement);

  lessons.forEach((lesson) => {
    let liElement = document.createElement("li");
    let links = lesson.links;
    liElement.textContent = `${lesson.lesson}: `;

    links.forEach((link) => {
      let aElement = document.createElement("a");
      aElement.setAttribute("href", link.url);
      aElement.textContent = `${link.title} `;

      liElement.appendChild(aElement);
    });
    ulElement.appendChild(liElement);
  });
  sectionElement.appendChild(ulElement);
};

getLinks();
