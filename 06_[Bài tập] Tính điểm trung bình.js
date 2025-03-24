let mathInput = Number(prompt("Nhập điểm Math: "));
let physicsInput = Number(prompt("Nhập điểm Physics: "));
let chemistryInput = Number(prompt("Nhập điểm Chemistry: "));
let gpa = (mathInput + physicsInput + chemistryInput) / 3;
document.getElementById("math_output").innerHTML = mathInput + " điểm";
document.getElementById("physics_output").innerHTML = physicsInput + " điểm";
document.getElementById("chemistry_output").innerHTML = chemistryInput + " điểm";
document.getElementById("gpa_output").innerHTML = gpa.toFixed(2) + " điểm";
console.log(gpa);
