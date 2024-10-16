
function sol(a, b) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
}



// best practice 

function sol(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}


