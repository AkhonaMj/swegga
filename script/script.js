let inputWomen = document.querySelector(".inputWomen");
let femaleTotal = document.querySelector(".femaleTotal");
let inputMen = document.querySelector(".inputMale");
let maleTotal = document.querySelector(".maleTotal");
let button = document.querySelector("button");
let allTotal = document.querySelector(".total");

button.addEventListener("click", () => {
    let womenTotal = eval(`${inputWomen.value}* ${150.95}`)
    let menTotal = eval(`${inputMen.value} * ${180.95}`);
    femaleTotal.innerHTML += womenTotal.toFixed(2);
    maleTotal.innerHTML += menTotal.toFixed(2);
    allTotal.innerHTML += (womenTotal + menTotal).toFixed(2);
    event.preventDefault()
});




