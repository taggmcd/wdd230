const membersElement = document.getElementById("members");
const membersUrl = "https://taggmcd.github.io/wdd230/chamber/data/members.json";

const member1 = document.getElementById("member1");
const member2 = document.getElementById("member2");
const member3 = document.getElementById("member3");

async function getMembers() {
  const response = await fetch(membersUrl);
  const data = await response.json();
  displaySpotlight(data.members);
}

function randoMembers(array) {
  let picked = [];

  while (picked.length < 3) {
    let random = Math.floor(Math.random() * array.length);
    if (!picked.includes(random)) {
      picked.push(random);
    }
  }
  return picked;
}

const displaySpotlight = (members) => {
  const spotlightMembers = members.filter(
    (member) => member.level.includes("Gold") || member.level.includes("Silver")
  );

  pickedIndex = randoMembers(spotlightMembers);
  let pick1 = spotlightMembers[pickedIndex[0]];
  let pick2 = spotlightMembers[pickedIndex[1]];
  let pick3 = spotlightMembers[pickedIndex[2]];

  member1.querySelector("h3").textContent = `${pick1.name}`;
  member1.querySelector(
    "p"
  ).innerHTML = `${pick1.phone} <br> ${pick1.address.street} <br> ${pick1.address.city}, ${pick1.address.state}<br> <a href="${pick1.website}">Website</a>`;

  member2.querySelector("h3").textContent = `${pick2.name}`;
  member2.querySelector(
    "p"
  ).innerHTML = `${pick2.phone} <br> ${pick2.address.street} <br> ${pick2.address.city}, ${pick2.address.state}<br> <a href="${pick2.website}">Website</a>`;

  member3.querySelector("h3").textContent = `${pick3.name}`;
  member3.querySelector(
    "p"
  ).innerHTML = `${pick2.phone} <br> ${pick3.address.street} <br> ${pick3.address.city}, ${pick3.address.state}<br> <a href="${pick3.website}">Website</a>`;
};

getMembers();
