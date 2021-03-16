
const messWithMe = document.querySelector('.mess-with-me');
messWithMe.style.fontSize = '48px';

const messWithMeP = document.querySelector('p.mess-with-me');
messWithMeP.style.backgroundColor = 'green';
messWithMe.addEventListener("click",spanClicked);

const hideImg = document.querySelector("#hide-me");
hideImg.style.display = 'none';

const Imge = document.querySelector("#triceratops");
Imge.style.width = '324px';
Imge.addEventListener("click",ImgeClicked);

const feathers = document.querySelector("#feathers");
feathers.addEventListener("click",feathersTransparent);

const button = document.querySelector("#toggle");
button.addEventListener("click",buttonPressed);

const bigImge = document.querySelector("#biggify");
bigImge.addEventListener("mouseenter",bigImage);
bigImge.addEventListener("mouseleave",smallImage);



function spanClicked(){
    messWithMe.style.color = 'orange';
}
function ImgeClicked(){
    Imge.style.border = '1px solid red';
}
function feathersTransparent(){
    feathers.style.opacity = "0.5"
}
function buttonPressed(){
    const rowDino = document.querySelector("#row");
    rowDino.style.backgroundColor = 'yellow';
}
function bigImage(){
    bigImge.style.width = '200px'
}
function smallImage(){
    bigImge.style.width = '150px'
}


