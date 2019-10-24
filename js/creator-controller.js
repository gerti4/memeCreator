'use strict'

var gCanvas;
var gCtx;
var gEnteringTxt = false;;




init();

function init() {
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

function renderImg() {
    var img = document.querySelector('.img-canvas');
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);

    for (var i = 0; i < gMeme.txts.length; i++) {
        var font = getTxtSize(i);
        gCtx.font = `${font}pt IMPACT`;
        gCtx.fillText(getMemeText(i),(gCanvas.width* getTxtCoordX(i)), getMemeCoordY(i));
    }
}

function updateImg() {
    var elImg = document.querySelector('.img-canvas');
    elImg.src = getMemeImg();
}

function onChangeTxt(elTxt) {
    if (gEnteringTxt) {
        if (elTxt.value === '') return;
        else {
            onAddNewTxt(elTxt.value);
            return;
        }
    }
    var txt = elTxt.value;
    elTxt.value = '';
    changeTxt(txt);
    renderImg();
}



function selectBox() {
    gCtx.beginPath();
    gCtx.rect(getTxtAlign() - 5, getTxtSize(), getTxtWidth(), getTxtSize() + 20);
    gCtx.stroke();
    var elTxtInput = document.querySelector('[name="text"]');
    elTxtInput.value = getMemeText();
}


function onIncreaseFont() {
    increaseFont();
    renderImg();
}

function onDecreaseFont() {
    decreaseFont();
    renderImg();
}

function onDeleteTxt() {
    deleteText();
    var elTxt = document.querySelector('input[type="text"]');
    var txtIdx = getTxtIdx();
    elTxt.value = getMemeText(txtIdx);
    renderImg();
}

function onSelectTxt() {
    gEnteringTxt = false;
    var txtIdx = setTxtIdx();
    var elTxt = document.querySelector('input[type="text"]');
    var txt = getMemeText(txtIdx);
    elTxt.value = txt;
}


function goToHomePage(){
    window.location = "index.html";
}



function onAddNewTxt(txt) {
    addNewText(txt);
    renderImg();
}


function onMoveTxt(elMove) {
    (elMove.classList.contains("moveup")) ? moveTxt(1) : moveTxt(-1);
    renderImg();
}


function openTextBox() {
    var elTxt = document.querySelector('input[type="text"]');
    elTxt.value='';
    elTxt.placeholder = 'Enter new txt';
    gEnteringTxt = true;
    return;
}

function onAlignLeft(){
    alignLeft();
    renderImg();
}

function onAlignRight(){
    alignRight();
    renderImg();
}

function onAlignMiddle(){
    alignMiddle();
    renderImg();
}








