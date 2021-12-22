number = document.getElementById('number')
num = 0;
nam = document.querySelector('#name')
namd = document.querySelector('#named')
let listOfNames = [];
divForList = document.getElementById('display');
function increase(){
    num = num + 1;
    number.textContent = num;
}

function decrease(){
    num = num - 1;
    number.textContent = num;
}

function getInfo(nam){
    nameValue = nam.value;
    nam.value = ''
    return nameValue;
}

function putInDiv(){
    list = divForList.childNodes[0];
    row = document.createElement('li');
    row.textContent = getInfo(nam);
    list.appendChild(row)
}

function getOutDiv(){
    let strDel = getInfo(namd);
    list = divForList.childNodes[0];
    for(let elem of list.childNodes){
        let text = elem.textContent;
        if(text == strDel){
            elem.remove();
            break;
        }
    }
    
}