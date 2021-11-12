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

// inizio sezione anteprime
const anteprime = document.querySelector(".anteprime");

for (let i = 0; i < items.length; i++){
    // console.log(items[i]);
    anteprime.innerHTML +=  `
    <div class="box opacity">
        <img src="${items[i]}" alt="">
    </div>`
}
// / sezione anteprime


// inizio sezione jumbo
const containerJumbo = document.querySelector(".container-jumbo");


for (let i = 0; i < items.length; i++){
    // console.log(items[i]);
    containerJumbo.innerHTML +=  `
        <div class="box-jumbo">
            <img src="${items[i]}" alt="">
        </div>
    `
}
// / sezione jumbo

// inizio sezione titolo
let titolo = document.querySelector(".titolo");

for (let i = 0; i < title.length; i++){
    // console.log(items[i]);
    titolo.innerHTML += `<h3 class="box-titolo">${title[i]}</h3>`;
}
// / sezione titolo

// inizio sezione testo
let testo = document.querySelector(".testo");

for (let i = 0; i < text.length; i++){
    // console.log(items[i]);
    testo.innerHTML += `<p class="box-testo">${text[i]}</p>`;
}
// / sezione testo


const boxJumbo = document.getElementsByClassName("box-jumbo");
// console.log(boxJumbo);
let activebox = 0;
boxJumbo[activebox].classList.add("active");



const box = document.getElementsByClassName("box");
// console.log(box);
let selectedbox = 0;
box[selectedbox].classList.add("selected");


const boxTitolo = document.getElementsByClassName("box-titolo");
let titolobox = 0;
boxTitolo[titolobox].classList.add("visible");


const boxTesto = document.getElementsByClassName("box-testo");
let testobox = 0;
boxTesto[testobox].classList.add("visible");


const su = document.querySelector(".top");
const giu = document.querySelector(".bottom");



giu.addEventListener("click", function(){

    // iizio sezione jumbo
    if (activebox < items.length - 1){

        boxJumbo[activebox].classList.remove("active");
        activebox++;
        boxJumbo[activebox].classList.add("active");

    }else{

        boxJumbo[activebox].classList.remove("active");
        activebox -= 4;
        boxJumbo[activebox].classList.add("active");
    }  
    // fine sezione jumbo
    
    // inizio sezione anteprime
    if (selectedbox < items.length - 1){

        box[selectedbox].classList.remove("selected");
        selectedbox++;
        box[selectedbox].classList.add("selected");
        
    }else{

        box[selectedbox].classList.remove("selected");
        selectedbox -= 4;
        box[selectedbox].classList.add("selected");
    } 
    // inizio sezione anteprime

    // inizio sezione titolo
    if (titolobox < title.length - 1){

        boxTitolo[titolobox].classList.remove("visible");
        titolobox++;
        boxTitolo[titolobox].classList.add("visible");

    }else{

        boxTitolo[titolobox].classList.remove("visible");
        titolobox -= 4;
        boxTitolo[titolobox].classList.add("visible");
    } 
    // /sezione titolo

    // inizio sezione testo
    if (testobox < title.length - 1){

        boxTesto[testobox].classList.remove("visible");
        testobox++;
        boxTesto[testobox].classList.add("visible");

    }else{

        boxTesto[testobox].classList.remove("visible");
        testobox -= 4;
        boxTesto[testobox].classList.add("visible");
    }
    // / sezione testo
})



su.addEventListener("click", function(){

    // iizio sezione jumbo
    if (activebox > 0){

        boxJumbo[activebox].classList.remove("active");
        activebox--;
        boxJumbo[activebox].classList.add("active");

    }else{

        boxJumbo[activebox].classList.remove("active");
        activebox += 4;
        boxJumbo[activebox].classList.add("active");
    } 
    // fine sezione jumbo
    
    // inizio sezione anteprime
    if (selectedbox > 0){

        box[selectedbox].classList.remove("selected");
        selectedbox--;
        box[selectedbox].classList.add("selected");
        
    }else{

        box[selectedbox].classList.remove("selected");
        selectedbox += 4;
        box[selectedbox].classList.add("selected");
    } 
    // / sezione anteprime

    // inizio sezione titolo
    if (titolobox > 0){

        boxTitolo[titolobox].classList.remove("visible");
        titolobox--;
        boxTitolo[titolobox].classList.add("visible");

    }else{

        boxTitolo[titolobox].classList.remove("visible");
        titolobox += 4;
        boxTitolo[titolobox].classList.add("visible");
    } 
    // /sezione titolo

    // inizio sezione testo
    if (testobox > 0){

        boxTesto[testobox].classList.remove("visible");
        testobox--;
        boxTesto[testobox].classList.add("visible");

    }else{

        boxTesto[testobox].classList.remove("visible");
        testobox += 4;
        boxTesto[testobox].classList.add("visible");
    }
    // / sezione testo
})