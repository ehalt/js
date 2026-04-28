const fruits = ["Banana", "Orange", "Apple", "Mango"];

const numbers = [4, 9, 16, 25, 29];
const nums = [3, 7, 10, 15];
const ans = nums.find(num => num > 10);
console.log(ans);



const users = [
  {id: 1, name: "kus"},
  {id: 2, name: "Rahim"},
  {id: 3, name: "Karim"}
];

const user = users.find(usr => usr.id === 2);
console.log(user);




const products = [
  { name: "Phone", price: 500 },
  { name: "Laptop", price: 1500 },
  { name: "Tablet", price: 800 }
];

const result = products.find(product => product.price > 700);
console.log(result);





const orders = [
  { id: 1, status: "pending", amount: 200 },
  { id: 2, status: "delivered", amount: 500 },
  { id: 3, status: "pending", amount: 150 },
  { id: 4, status: "cancelled", amount: 300 }
];

const ans = orders.find(order => order.status === "pending" && order.amount > 250);
console.log(ans);





const users = [
  { id: 1, name: "Kus", isActive: false, role: "user" },
  { id: 2, name: "Rahim", isActive: true, role: "admin" },
  { id: 3, name: "Karim", isActive: true, role: "user" },
  { id: 4, name: "Jamal", isActive: false, role: "admin" }
];

// const ans = users.find(usr => usr.isActive === true && usr.role === "user");
// const ans = users.find(usr => {
//   if (usr.isActive === true && usr.role === "user") {
//     return usr;
//   }
// })

const result = users.find(u => u.isActive && u.role === "admin");
console.log(result);




// and this is what i was experimenting on 

const btn = document.getElementById("btn");

// const url = "https://jsonplaceholder.typicode.com/users";




function fetchdata() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const ul = document.getElementById("display");
  const li = document.createElement('li');
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.find((usr) => {
      if (usr.id === 3) {
            li.innerHTML = `
              User name : ${usr.name};
            `;
            ul.appendChild(li);
      }
    });
    // console.log(ans);
  })
}
// fetchdata();

btn.addEventListener('click', function() {
  fetchdata();
});








