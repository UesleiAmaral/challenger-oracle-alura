let frase = document.querySelector("#cripto");

let button_Cripto = document.querySelector(".button_Cripto");

let button_Descripto = document.querySelector(".button_Descripto");

let button_Copia = document.querySelector(".button_Copia");

let result = document.querySelector("#resultado");

let button_Result = document.querySelector(".button_Result");

const regex = new RegExp("^[a-z 0-9\b]");


button_Cripto.addEventListener('click', (event) => {

    event.preventDefault();

    result.textContent = caracteres(convert(frase.value));

    frase.value = "";

})

button_Descripto.addEventListener('click', (event) => {

    event.preventDefault();

    result.textContent = caracteres(desconvert(frase.value));

    frase.value = "";

})

button_Copia.addEventListener('click', (event) => {

    event.preventDefault();

    result.select();

    document.execCommand('copy');
    frase.value = "";
    alert("copiado")
})



function convert(frase) {

    let nova_Frase = frase.replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat").toLowerCase();

    return nova_Frase;

}

function desconvert(frase) {

    let nova_Frase_desconvert = frase.replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    return nova_Frase_desconvert;

}

function caracteres(frase_teste) {

    if (!regex.test(frase_teste)) {

        return "CARACTERES ESPECIAIS NÃO SÃO PERIMITIDOS"
    }

    else {
        return  frase_teste;

    }

}
