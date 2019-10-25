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
        var fontSize = getTxtSize(i);
        var color = getColor(i);
        var font = getFont(i);
        gCtx.font = `${fontSize}pt ${font}`;
        gCtx.fillStyle = color;
        gCtx.lineWidth = 2;
        gCtx.fillText(getMemeText(i), getTextPosX(i), getTextPosY(i));
        gCtx.strokeStyle = getTxtBorder(i);
        gCtx.strokeText(getMemeText(i), getTextPosX(i), getTextPosY(i));
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
            gEnteringTxt = false;
            return;
        }
    }
    var txt = elTxt.value;
    elTxt.value = '';
    changeTxt(txt);
    renderImg();
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


function goToHomePage() {
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
    elTxt.value = '';
    elTxt.placeholder = 'Enter new txt';
    gEnteringTxt = true;
    return;
}

function onAlignLeft() {
    alignLeft();
    renderImg();
}

function onAlignRight() {
    alignRight();
    renderImg();
}

function onAlignMiddle() {
    alignMiddle();
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


function onChangeTxtBorder(elTxtBorder){
    var borderColor = elTxtBorder.value;
    setTxtBorder(borderColor);
    renderImg();
}

















// on submit call to this function
function uploadImg(elForm, ev) {
    ev.preventDefault();

    document.getElementById('imgCanvas').value = gCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share').innerHTML = `
        <a href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }

    doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {
    var formData = new FormData(elForm);

    fetch('http://ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(function (response) {
            return response.text()
        })

        .then(onSuccess)
        .catch(function (error) {
            console.error(error)
        })
}




// facebook api
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/he_IL/sdk.js#xfbml=1&version=v3.0&appId=807866106076694&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));






