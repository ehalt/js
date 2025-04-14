// string length 

var str = "some string";
var len = 0

while(true) {
    if (str.charAt(len) == '') {
        break;
    }
    else {
        len++;
    }
}
console.log(len)
