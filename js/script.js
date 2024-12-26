
const lateral = document.getElementById("lateral");
var bold = 1;


function atcie(){
    if(bold % 2 === 1){
        lateral.classList.remove("berlateral");
        lateral.classList.remove("berlateraloff");
        lateral.classList.add("berlateralon");
    }
    else{
        lateral.classList.remove("berlateralon");
        lateral.classList.add("berlateraloff");
    }
    bold++;
}

function aler(){
    aler("ola amor");
}