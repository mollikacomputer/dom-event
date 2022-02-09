function clickFunction(){
    document.body.style.backgroundColor= 'green';
}
function getYellow(){
   document.body.style.backgroundColor= 'yellow';
}
function getChartreuse(){
   document.body.style.backgroundColor = 'chartreuse';
}
///// Red btn example : 2
const getRedBtn = document.getElementById('getRedBtn');
getRedBtn.onclick = getRed;

function getRed(){
    document.body.style.backgroundColor = 'red';
}
// getCyan Color
    const cyanBtn = document.getElementById('make-cyan-button');
    cyanBtn.onclick = getCyanColor;
    function getCyanColor(){
        document.body.style.backgroundColor = 'cyan';
    }

// get brown

const brown = document.getElementById('make-brown');
brown.onclick = getBrown;
function getBrown(){
    document.body.style.backgroundColor = 'brown';
}
