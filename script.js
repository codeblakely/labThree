// from image sequence example in class 4 slides Syed, N. (2026) CCT 360 - class 4 - variables & functions. [Powerpoint slides]. University of Toronto at Mississauga. https://docs.google.com/presentation/d/1YNVvHMi1vigdVMd37y6GAtDpffc8-odEMOec0571jMA/edit?slide=id.g3fa95716c2b_1_30#slide=id.g3fa95716c2b_1_30
// Syed, N. (2026) img_seq_on_img [Google Drive Folder, Files]. https://drive.google.com/drive/folders/1MIF1YmOPMR9YNAE9-leb-FajSw6upeMH
//variables fulfillment
let man = document.getElementById("man");
let moon = document.getElementById("moon");
let werewolf = document.getElementById("werewolf");


//changes image of man into the moon. 
function transform() {
    man.src = "images/fullMoon.png";
    moon.src = "images/man.png";
}

//event listeners fulfillment
man.addEventListener("click", transform)

//this took me several hours to figure out how to do but it was actually a lot simpler than I thought
moon.addEventListener("click", back)

function back() {
    man.src = "images/man.png";
    moon.src = "images/fullMoon.png";
}

let explainButton = document.getElementById("explainButton")

//nestled function code structure & style from Ayebola, J. (2023, November 23). Dom manipulation in JavaScript – a comprehensive guide for beginners. freeCodeCamp.org. https://www.freecodecamp.org/news/dom-manipulation-in-javascript/ 
explainButton.addEventListener("click", 
function explain() {
    alert("A man afraid of the moon??? the werewolf?? or the monster he becomes!!!");
})

//attempted DOM manipulation fulfillment. I am not fully sure what constitutes as a proper DOM manipulation
explainButton.addEventListener("mouseover", 
function color() {
    explainButton.style.color = "red";
}
)

explainButton.addEventListener("mouseout", 
function color() {
    explainButton.style.color = "black";
}
)

