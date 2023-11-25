const membersElement = document.getElementById("members");
const membersUrl = "https://taggmcd.github.io/wdd230/chamber/data/members.json";

membersElement.classList.add("member-grid");

async function getMembers() {
  const response = await fetch(membersUrl);
  const data = await response.json();
  displayMembers(data.members);
}

const displayMembers = (members) => {
  members.forEach((member) => {
    let sectionElement = document.createElement("section");
    let h2Element = document.createElement("h2");
    let addressElement = document.createElement("p");
    let phoneElement = document.createElement("p");
    let websiteElement = document.createElement("a");
    let logoElement = document.createElement("img");

    sectionElement.classList.add("section");
    sectionElement.classList.add("member-section");
    logoElement.classList.add("member-img");

    h2Element.textContent = `${member.name}: ${member.level}`;
    phoneElement.textContent = `${member.phone}`;
    addressElement.innerHTML = `${member.address.street} <br> ${member.address.city}, ${member.address.state} ${member.address.zip}`;
    websiteElement.setAttribute("href", member.website);
    websiteElement.innerHTML = "<br>Visit Website";
    logoElement.setAttribute("src", member.image.src);
    logoElement.setAttribute("alt", member.image.alt);
    logoElement.setAttribute("height", member.image.height);
    logoElement.setAttribute("width", member.image.width);

    sectionElement.appendChild(h2Element);
    sectionElement.appendChild(logoElement);
    sectionElement.appendChild(websiteElement);
    sectionElement.appendChild(phoneElement);
    sectionElement.appendChild(addressElement);

    membersElement.appendChild(sectionElement);
  });
};

getMembers();
