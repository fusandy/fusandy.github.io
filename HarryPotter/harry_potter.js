const charactersList = document.querySelector("#charactersList");
const searchBar = document.querySelector("#searchBar");
// get the reference every time the dataList has changed
let dataList = [];

// get modal element
const modal = document.querySelector("#modal-container");
const closeBtn = document.querySelector("#closeBtn");
const boxContent = document.querySelector(".box-content");

const showModal = (event) => {
  console.log(event.target.id);
  const listIndex = event.target.id;
  console.log("listIndex:", listIndex);
  const result = dataList[listIndex];
  console.log("result", result);

  boxContent.innerHTML = 
        `<div class="content">
            <h4>${result.name}</h4>
            <p>Gender: ${result.gender}</p>
            <p>House: ${result.house}</p>
            <p>Date of Birth: ${result.dateOfBirth}</p>
            <p>Actor: ${result.actor}</p>
        </div>
        <div class="content-img">
            <img src=${result.image} alt="character" />
        </div>`;
  modal.style.display = "block";
};
const closeModal = (event) => {
  console.log("hi");
  modal.style.display = "none";
};

searchBar.addEventListener("keyup", (event) => {
  // track and grab event target value each time input value has changed
  console.log("e.target.value:", event.target.value);
  // capital sensitive
  // convert uppercase to lowercase
  // if searchString is H -> h
  // if searchString is h -> H
  const searchString = event.target.value.toLowerCase();

  console.log("dataList:", dataList);
  const filteredData = dataList.filter((element) => {
    return (
      element.name.toLowerCase().includes(searchString) ||
      element.house.toLowerCase().includes(searchString)
    );
  });
  displayData(filteredData);
});

async function getData() {
  // fetch API
  const res = await fetch("http://hp-api.herokuapp.com/api/characters");
  dataList = await res.json();
  //   console.log("dataList:", dataList);
  dataList.splice(25);
  //   console.log("slice array:", dataList);
  displayData(dataList);
}

const displayData = (characters) => {
  // console.log('characters:',characters)
  let output = "";
  output = characters
    .map((element, i) => {
      return `<li class="character" id=${i} onClick="showModal(event)">
        <div class="text-area">
            <h4>${element.name}</h4>
            <p>House: ${element.house}</p>
        </div>
        <div class="photo">
            <img src="${element.image}"></img>
        </div>
        </li>`;
    })
    .join("");
  charactersList.innerHTML = output;
};
getData();
