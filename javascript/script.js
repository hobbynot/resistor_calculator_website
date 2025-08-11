/*
RESISTOR COLOUR CODE DATA

Black = 0
Brown = 1
Red = 2
Orange = 3
Yellow = 4
Green = 5
Blue = 6
Violet = 7
Gray = 8
White = 9

*/
const _4thband = document.getElementById("select-band-num4");
const _5thband = document.getElementById("select-band-num5");
const _6thband = document.getElementById("select-band-num6");
const colourBand1 = document.getElementsByClassName("band1");
const colourBand2 = document.getElementsByClassName("band2");
const colourBand3 = document.getElementsByClassName("band3");
const colourBand4 = document.getElementsByClassName("band4");
const colourBand5 = document.getElementsByClassName("band5");
const colourBand6 = document.getElementsByClassName("band6");
const valueDisplay = document.querySelectorAll(".select-colour");
const radiocheck = document.querySelectorAll(".new-class");
const colourclick1 = document.querySelectorAll("#colour-value1 li");
const colourclick2 = document.querySelectorAll("#colour-value2 li");
const colourclick3 = document.querySelectorAll("#colour-value3 li");
const colourclick4 = document.querySelectorAll("#colour-value4 li");
const colourclick5 = document.querySelectorAll("#colour-value5 li");
const colourclick6 = document.querySelectorAll("#colour-value6 li");
const result = document.querySelector("#value");
const getResult = document.querySelector(".btn");


const fourthband = () => {

    radiocheck.forEach(() => {


        if (_4thband.checked) {
            colourBand3[0].style.display = "none";
            colourBand4[0].style.display = "none";
            valueDisplay[2].style.display = "none";
            valueDisplay[3].style.display = "none";

        }
        else if (_5thband.checked) {
            colourBand4[0].style.display = "none";
            colourBand3[0].style.display = "block";
            valueDisplay[3].style.display = "none";
            valueDisplay[2].style.display = "block";

        }
        else if (_6thband.checked) {
            colourBand3[0].style.display = "block";
            colourBand4[0].style.display = "block";
            valueDisplay[2].style.display = "block";
            valueDisplay[3].style.display = "block";

        }

    });

}


for (let i = 0; i < colourclick1.length; i++) {
    colourclick1[i].addEventListener('click', () => {
        colourBand1[0].style.background = colourclick1[i].innerHTML;
        valueDisplay[0].innerText = colourclick1[i].value;
    });

}
for (let i = 0; i < colourclick2.length; i++) {
    colourclick2[i].addEventListener('click', () => {
        colourBand2[0].style.background = colourclick2[i].innerHTML;
        valueDisplay[1].innerText = colourclick2[i].value;

    });
}
for (let i = 0; i < colourclick3.length; i++) {
    colourclick3[i].addEventListener('click', () => {
        colourBand3[0].style.background = colourclick3[i].innerHTML;
        valueDisplay[2].innerText = colourclick3[i].value;
    });
}
for (let i = 0; i < colourclick4.length; i++) {
    colourclick4[i].addEventListener('click', () => {
        colourBand4[0].style.background = colourclick4[i].innerHTML;
        valueDisplay[3].innerText = colourclick4[i].value;
    });
}
for (let i = 0; i < colourclick5.length; i++) {
    colourclick5[i].addEventListener('click', () => {
        colourBand5[0].style.background = colourclick5[i].innerHTML;
        valueDisplay[4].innerText = colourclick5[i].value;
    });
}
for (let i = 0; i < colourclick6.length; i++) {
    colourclick6[i].addEventListener('click', () => {
        colourBand6[0].style.background = colourclick6[i].innerHTML;
        valueDisplay[5].innerHTML = '<span> &#8723;'+colourclick6[i].value+'% </span>';
    });
}

getResult.addEventListener('click', () => {
    
     
        var num0 = valueDisplay[0].innerText;
        var num1 = valueDisplay[1].innerText;
        var num2 = valueDisplay[2].innerText;
        var num3 = valueDisplay[3].innerText;
        var multiylier = valueDisplay[4].innerText;
        var tolerance = valueDisplay[5].innerText;
        
        let forFourband = (num0 + num1) * multiylier+' ' +tolerance;
        let forFiveband = (num0 + num1 + num2) * multiylier +tolerance;
        let forSixband = (num0 + num1 + num2 + num3) * multiylier +tolerance;
        
        if(_4thband.checked){
            result.style.display="block"
            result.innerText = forFourband;
        } else if(_5thband.checked){
            result.style.display="block"
            result.innerText=forFiveband;
        } else if(_6thband.checked){
            result.style.display="block"
            result.innerText=forSixband;
        }
       
});