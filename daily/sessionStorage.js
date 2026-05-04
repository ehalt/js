// session storage 

sessionStorage.setItem("user", "Anis");
const data = sessionStorage.getItem("user");
console.log(data);



sessionStorage.removeItem("user");



const user = {id: 1, name: "Anis"};
sessionStorage.setItem("user", JSON.stringify(user));
sessionStorage.getItem("user");
const usrInfo = JSON.parse(sessionStorage.getItem("user"));
console.log(usrInfo);


