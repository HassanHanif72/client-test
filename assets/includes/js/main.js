// Counter
let count = 1;
const interval = setInterval(() => {
    count = count >= 3 ? 1 : count + 1;
    document.getElementById('counter').innerText = count;
}, 1000);
// end 