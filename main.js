
const messWithMe = documents.querySelector('.mess-with-me');
messWithMe.style.fontSize = '40px';
messWithMe.style.backgroundColor = 'green';
messWithMe.addEventListener("click",spanClicked);

const hideImg = documents.querySelector("#hide-me");
hideImg.style.display = 'none';

const Img = documents.querySelector("#triceratops");
Img.style.height = '324px';
Img.addEventListener("click",ImgeClicked);

const feathers = documents.querySelector("#feathers");
feathers.addEventListener("click",feathersTransparent);

const button = documents.querySelector("#toggle");
button.addEventListener("click",buttonPressed);

const bigImge = documents.querySelector("#biggify");
bigImge.addEventListener("mouseOver",bigImage);


function spanClicked(){
    messWithMe.style.color = 'orange';
}
function ImgeClicked(){
    Img.style.border = '1px solid red';
}
function feathersTransparent(){
    feathers.style.opacity ="0.5"
}
function buttonPressed(){
    const rowDino = documents.querySelector("#row");
    rowDino.style.backgroundColor = 'yellow';
}
function bigImage(){
    bigImge.style.width = '200px'
}


