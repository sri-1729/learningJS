import fetch from 'isomorphic-fetch';



let img = document.getElementById('image');
let name = document.querySelector('.name');
let link = document.querySelector('#link');
let nameFrm = document.getElementById('name-frm'); 
let btn = document.getElementById('btn');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    let urlGitHub = 'https://api.github.com/users/';
    urlGitHub += nameFrm.value;
    fetch(urlGitHub)
    .then((resp) => resp.json())
    .then((data) => 
    {
        img.setAttribute('src', data['avatar_url']);
        name.textContent = data['login'];
        link.setAttribute('href', data['html_url']);
    })
    .catch((err) => name.textContent = err);
})

