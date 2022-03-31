const charactersList = document.querySelector("#charactersList");
const searchBar = document.querySelector("#searchBar");
// get the reference every time the list has changed
let list = [];

// get modal element
const modal = document.querySelector("#modal-container");
const closeBtn = document.querySelector("#closeBtn");
const boxContent = document.querySelector(".box-content");

const showModal = (event) => {
  console.log(event.currentTarget);
  const id = event.currentTarget.dataset.id;
  console.log("id:", id);

  let result;
    result = list.find(v=>{
      return v.login.username === id;
    })
  
  console.log("result", result);

  boxContent.innerHTML =
        `<div class="content">
            <h4>${result.name.first} ${result.name.last}, ${result.name.title}</h4>
            <p><i class="fas fa-phone-alt"></i> ${result.phone}</p>
        <p><i class="fas fa-envelope-open"></i> ${result.email}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${result.location.city}, ${result.location.country}</p>
        </div>
        <div class="content-img">
          <img src="${result.picture.large}"></img>
        </div>`;
  modal.style.display = "block";
};
const closeModal = (event) => {
  console.log("hi");
  modal.style.display = "none";
};


// seach bar
searchBar.addEventListener("keyup", (event) => {
  // capital sensitive
  // convert uppercase to lowercase
  // if searchString is H -> h
  // if searchString is h -> H
  const searchString = event.target.value.toLowerCase();
  let filteredData = [...list];
  filteredData = filteredData.filter((element) => {
    console.log(element.name.first.toLowerCase().includes(searchString) )
    return (
      element.name.first.toLowerCase().includes(searchString) ||
      element.location.city.toLowerCase().includes(searchString) ||
      element.location.country.toLowerCase().includes(searchString)
    );
  });
  display(filteredData);
});

// get data
async function getData() {
  // fetch API
  const res = await fetch("https://randomuser.me/api/?results=30");
  const data = await res.json();
  list = data.results;
  display(list);
}

// display data
const display = (list) => {
  let output;
  output = list.map((v, i) => {
    return `<li class="character" data-id=${v.login.username} onClick="showModal(event)">
      <div class="text-area">
        <h5>${v.name.first} ${v.name.last}, ${v.name.title}</h5>
        <p><i class="fas fa-phone-alt"></i> ${v.phone}</p>
        <p><i class="fas fa-envelope-open"></i> ${v.email}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${v.location.city}, ${v.location.country}</p>
      </div>
      <div class="photo">
        <img src="${v.picture.large}"></img>
      </div>
    </li>`;
  }).join('');
  // console.log('output:',output)
  charactersList.innerHTML = output;
};

getData();

// data
// {
//   results:[
// {
//   cell:'',
//   dob:{age:   , date:    },
//   email:'',
//   gender:'',
//   location: { city:'', coordinates:{latitude:'', longtitude:''}, country:'', postcode:   , state:' '},
//   login: {md5:'', password:'', salt:'', sha1:'', sha256:'', username:'', uuid:''},
//   name: {first:'', last:'', title:''},
//   phone:'',
//   picture: {large:'', medium:'', thumbnail:''}
// }
// }
