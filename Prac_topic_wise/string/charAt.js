function getmid(str) {
    let len = str.length;
    let mid = Math.floor(len / 2)

    if (len % 2 === 0) {
        return str.charAt(mid - 1) + str.charAt(mid);
    }
    else {
        return str.charAt(mid);
    }
}

let ans = getmid("abbaa")
console.log(ans)
