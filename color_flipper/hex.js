function decToHex(decimal){
    if(decimal < 10)
        return decimal;
    decimal = decimal - 10;
    return String.fromCharCode(('a'.charCodeAt(0) + decimal));
}


function generateHexString(){
    let s ="#";
    for(let i = 0; i < 6; i++){
        let rand = Math.floor(Math.random() * 16);
        s += decToHex(rand);
    }
    return s;
}

//nodes
button = document.getElementById('btn');
whatColor = document.querySelector('.color');

button.addEventListener('click', changeColor);

function changeColor(event){
    let hexValue = generateHexString();
    document.body.style.backgroundColor = hexValue;
    whatColor.textContent = hexValue;
}