const colors = ['green', 'orange', 'blue'];
//nodes
button = document.getElementById('btn');
whatColor = document.querySelector('.color');

button.addEventListener('click', changeColor);

function changeColor(event){
    random = getRandomNumber(colors.length);
    document.body.style.backgroundColor = colors[random];
    whatColor.textContent = colors[random];
}

function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}