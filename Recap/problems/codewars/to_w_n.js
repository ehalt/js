// to word name 

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3 


function sol (name) {
    const words = name.split(' ');
    const init = words.map(word => word.charAt(0).toUpperCase()).join('.');
    return init;
}
console.log(sol("Sam Harris"));



// best practice 

function abbrevName(name){
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}


