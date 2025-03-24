let usd = Number(prompt("Nhập số $: "));
let vnd = usd * Number(25000);
document.getElementById("input_number").innerHTML = usd.toLocaleString() +"$";
document.getElementById("ketqua").innerHTML = vnd.toLocaleString() +"đ";
console.log(vnd);
