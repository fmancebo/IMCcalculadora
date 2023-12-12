const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    const imc = (weight / (height * height)).toFixed(2);

    const value = document.getElementById("value");
    let description = "";

    document.getElementById("infos").classList.remove("hidden");

    value.classList.add("atention");

    if (imc < 18.5) {
        description = "Você está abaixo do peso.";
    } else if (imc < 24.9) {
        description = "Você está com peso normal.";
        value.classList.remove('atention');
        value.classList.add('normal');
    } else if (imc < 29.9) {
        description = "Você está com sobrepeso.";
    } else {
        description = "Você está com obesidade.";
    }

    value.textContent = imc.replace('.',',');
    document.getElementById("description").textContent = description;

});