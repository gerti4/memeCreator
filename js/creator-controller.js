'use strict'

var gCanvas;
var gCtx;




init();

function init(){
    resizeCanvas();
    updateImg();
    renderImg();
}


function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    gCanvas = document.querySelector('#imgCanvas');
    gCanvas.width = elContainer.offsetWidth;
    gCanvas.height = elContainer.offsetHeight;
    gCtx = gCanvas.getContext("2d");
}

function renderImg(){
    var img = document.querySelector('.img-canvas');
    gCtx.drawImage(img,0,0,gCanvas.width, gCanvas.height)
    let font = getTxtSize();
    gCtx.font = `${font}pt IMPACT`;
    gCtx.fillText(getMemeText(), getTxtAlign(), 50);
}

function updateImg(){
    var elImg = document.querySelector('.img-canvas');
    elImg.src = getMemeImg();
}

function onChangeTxt(elTxt){
    var txt = elTxt.value;
    elTxt.value = '';
    changeTxt(txt);
    renderImg();
}



function selectBox(){
    gCtx.beginPath();
    gCtx.rect(getTxtAlign()-5, getTxtSize(), getTxtWidth(), getTxtSize()+20);
    gCtx.stroke(); 
    var elTxtInput = document.querySelector('[name="text"]');
    elTxtInput.value = getMemeText();

}


