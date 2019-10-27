'use strict'

var gCanvas;
var gCtx;
var gEnteringTxt = false;
var gIsTxtSelcted = false;
var gIsTextRemarked = false;



init();

function init() {
    defaultMeme();
    updateImg();
    resizeCanvas();
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
    renderPlaceHolder();


    for (var i = 0; i < gMeme.txts.length; i++) {
        var fontSize = getTxtSize(i);
        var color = getColor(i);
        var font = getFont(i);
        gCtx.font = `${fontSize}pt ${font}`;
        gCtx.fillStyle = color;
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = getTxtBorder(i);
        if (getTxtAlign(i) === 'no-align') {
            gCtx.fillText(getMemeText(i), getTextPosX(i), getTextPosY(i));
            gCtx.strokeText(getMemeText(i), getTextPosX(i), getTextPosY(i));
        }
        else {
            gCtx.textAlign = getTxtAlign(i);
            gCtx.fillText(getMemeText(i), gCanvas.width / 2, getTextPosY(i));
            gCtx.strokeText(getMemeText(i), gCanvas.width / 2, getTextPosY(i));
        }
    }
}


function updateImg() {
    var elImg = document.querySelector('.img-canvas');
    elImg.src = getMemeImg();
}


function renderPlaceHolder() {
    var elTxt = document.querySelector('input[type="text"]');
    var txtIdx = getTxtIdx();
    var txt = getMemeText(txtIdx);
    elTxt.placeholder = txt;
}

function onChangeTxt(ev) {
    if(ev.key.length > 2 && ev.key!=='Backspace') return;
    if (gEnteringTxt) {
            onAddNewTxt(ev.key);
            gEnteringTxt = false;
            return;
    }
    changeTxt(ev.key);
    renderImg();
}


function onSelectTxt() {
    if(gIsTextRemarked) return;
    gIsTxtSelcted = true;
    gEnteringTxt = false;
    var txtIdx = setTxtIdx();
    var elTxt = document.querySelector('input[type="text"]');
    var txt = getMemeText(txtIdx);
    elTxt.value = txt;
    gCtx.beginPath();
    gCtx.fillStyle = '#ffffff1a';
    gCtx.fillRect(0, getTextPosY(txtIdx) - 50, gCanvas.width, 70);
    gCtx.strokeStyle = 'black';
    gCtx.strokeRect(0, getTextPosY(txtIdx) - 50, gCanvas.width, 70);
    gIsTextRemarked = true;
    setTimeout(() => {
        renderImg();
        gIsTextRemarked = false;
    }, 1500);
    
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




function goToHomePage() {
    window.location = "index.html";
}



function onAddNewTxt(txt) {
    addNewText(txt);
    renderImg();
}


function onMoveTxt(elMove) {
    (elMove.classList.contains("moveup")) ? moveTxt(-1) : moveTxt(1);
    renderImg();
}


function openTextBox() {
    
    var elTxt = document.querySelector('input[type="text"]');
    elTxt.value = ' ';
    // elTxt.placeholder = 'Enter new txt';
    gEnteringTxt = true;
    return;
}


function onAlignTxt(elAlign) {
    var position;
    switch (elAlign.title) {
        case 'move text left':
            position = 'left';
            break;
        case 'move text to center':
            position = 'center';
            break;
        case 'move text right':
            position = 'right';
            break;
    }
    alignTxt(position);
    renderImg();
}


function onChangeColor(elColor) {
    var color = elColor.value;
    changeColor(color);
    renderImg();
}


function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}


function onChangeFont(elFont) {
    var font = elFont.value;
    changeFont(font);
    renderImg();
}


function onChangeTxtBorder(elTxtBorder) {
    var borderColor = elTxtBorder.value;
    setTxtBorder(borderColor);
    renderImg();
}


















