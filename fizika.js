function KS(){
    document.getElementById("KS").style.display = "block";
    document.getElementById("KE").style.display = "none";
}
function KE(){
    document.getElementById("KS").style.display = "none";
    document.getElementById("KE").style.display = "block";
}
let q1, q2, r, f;
const k = 9e9;
function KSR(){
let q1 = parseFloat(document.getElementById("q1").value); //parseFloat() is used to convert str to int.
let q2 = parseFloat(document.getElementById("q2").value);
let r = parseFloat(document.getElementById("r").value);
f = (k * Math.abs(q1 * q2)) / (r * r);
// Without Math.abs(), the result would be negative for opposite charges, but Coulomb's law is about the magnitude, 
// so the negative sign isn't relevant for calculating the strength of the force.but Coulomb's law is about the magnitude, 
f = f.toFixed(3)
console.log(f)
document.getElementById("rezultat").innerHTML = f + " N";
}
let p, t, e;
function KER(){
p = parseFloat(document.getElementById("p").value);
t = parseFloat(document.getElementById("t").value);
e = p*t;
document.getElementById("rezultat2").innerHTML = e + "Wh " + e/1000 + "kWh ";
}