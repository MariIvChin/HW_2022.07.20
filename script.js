// Exercise #1
const evenNumbersList = document.getElementById("even-numbers-list");

function getEvenNumbers() {
  let html =
    "<ul class='list-group list-group-horizontal overflow-auto mt-3 mb-3 ms-5 me-5'>";
  for (let i = 10; i <= 200; i += 2) {
    html += `<li class="list-group-item"> ${i} </li>`;
  }
  html += "</ul>";
  evenNumbersList.innerHTML = html;
}

// Exercise #2
const userInfoInList = document.getElementById("user-info-list");

const userInfo = {
  name: "daniel",
  age: 23,
  email: "d@notmyrealmail.com",
  phone: "058666666❣",
  address: {
    city: "tlv",
    street: "not found",
    number: 666,
  },
};

function renderUserInfo(obj) {
  let htmlUserInfoList = "<ul>";
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      htmlUserInfoList += `<li> ${key} => ${renderUserInfo(obj[key])} </li>`;
    } else {
      htmlUserInfoList += `<li> ${key} => ${obj[key]} </li>`;
    }
  }
  htmlUserInfoList += "</ul>";
  return htmlUserInfoList;
}
userInfoInList.innerHTML = renderUserInfo(userInfo);

// Exercise #3
const productsInfoInList = document.getElementById("products-info-list");

const productsList = [
  {
    title: "shampoo",
    price: 23.4,
    category: "shower",
    barcode: "4043945",
  },
  {
    title: "cornflakes",
    price: 60,
    category: "food",
    barcode: "A-5455",
  },
  {
    title: "Cola",
    price: 80.5,
    category: "drinks",
    barcode: "B-986453",
  },
  {
    title: "Bamba red",
    price: 90.3,
    category: "food",
    barcode: "C-68645",
  },
];

html = `<div class="card bg-success bg-gradient" style="width: 18rem">
        <div class="card-header">Product Title</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-success bg-gradient">Price</li>
          <li class="list-group-item bg-success bg-gradient">Category</li>
          <li class="list-group-item bg-success bg-gradient">Barcode</li>
        </ul>
      </div>`;
