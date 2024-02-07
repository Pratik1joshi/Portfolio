let skills=document.querySelector(".top");
let education=document.querySelector(".bottom");
let tobeskill = document.querySelector(".skills");
tobe_skillclass = tobeskill.classList;
let tobe_edu = document.querySelector(".education");
educlass = education.classList;
skillclass= skills.classList;

tobeskill.addEventListener("click", ()=>{
    skillclass.remove("timer")
    educlass.add("twotimer")
    tobe_skillclass.add("red");
    tobe_edu.classList.remove("red");
})
    
    // this.style.display = "none"

tobe_edu.addEventListener("click", ()=>{
    educlass.remove("twotimer")
    skillclass.add("timer")
    tobe_edu.classList.add("red");
    tobe_skillclass.remove("red");
})

let menus = document.getElementsByClassName("right-nav")[0];

function openmenu(){
    menus.style.right = "0px"
}
function closemenu(){
    menus.style.right = "-110px"
}
