const title = document.getElementById('title')
title.firstElementChild.innerText = "Programming Memes"

let element = document.createElement('p')
title.appendChild(element)

const p = title.querySelector('p')
p.innerText = "This is a page with fun programming memes"