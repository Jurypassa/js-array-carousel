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
    anteprime.innerHTML +=  `
    <div class="box opacity">
        <img src="${items[i]}" alt="">
    </div>`
}

const containerJumbo = document.querySelector(".container-jumbo");


for (let i = 0; i < items.length; i++){
    // console.log(items[i]);
    containerJumbo.innerHTML +=  `
        <div class="box-jumbo">
            <img src="${items[i]}" alt="">
        </div>
    `
}

const boxJumbo = document.getElementsByClassName("box-jumbo");
console.log(boxJumbo);
let activebox = 0;
boxJumbo[activebox].classList.add("active");

const su = document.querySelector(".top");
const giu = document.querySelector(".bottom");



su.addEventListener("click", function(){

    if (activebox < items.length - 1){

        boxJumbo[activebox].classList.remove("active");

        activebox++;
    
        boxJumbo[activebox].classList.add("active");
    }else{

        boxJumbo[activebox].classList.remove("active");

        activebox -= 4;

        boxJumbo[activebox].classList.add("active");

    }   
})

giu.addEventListener("click", function(){

    if (activebox > 0){

        boxJumbo[activebox].classList.remove("active");

        activebox--;
    
        boxJumbo[activebox].classList.add("active");

    }else{

        boxJumbo[activebox].classList.remove("active");

        activebox += 4;

        boxJumbo[activebox].classList.add("active");

    } 
})