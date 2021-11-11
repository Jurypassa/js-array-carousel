const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const anteprime = document.querySelector(".anteprime");

for (let i = 0; i < items.length; i++){
    // console.log(items[i]);
    anteprime.innerHTML +=  `<div class="box"><img src="${items[i]}" alt=""></div>`
}

const jumbo = document.querySelector(".container-jumbo");

for (let i = 0; i < items.length; i++){
    // console.log(items[i]);
    jumbo.innerHTML +=  `<img src="${items[i]}" alt="">`
}

