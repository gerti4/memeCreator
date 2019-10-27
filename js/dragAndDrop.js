'use strict'


var gTxtIdx;
var gIsTxtMoving = false;
var gEvType;




function selectText(ev) {
    gEvType = ev.type;
    console.log(ev.touches[0].clientX);

    ev.preventDefault();
    var coordX;
    var coordY;
    if (gEvType.indexOf('touch') === 0) {
        coordX = ev.touches[0].clientX;
        coordY = ev.touches[0].clientY;
    }
    else {
        coordX = ev.offsetX;
        coordY = ev.offsetY;
    }

    var txts = getMemeTxts();
    for (var i = 0; i < txts.length; i++) {
        if (compareTxtCoords(coordX, coordY, txts[i], gEvType)) {
            showSelectedText(i);
            removeAlignTxt(i);
            gIsTxtMoving = true;
        }
    }
}


function compareTxtCoords(coordX, coordY, txt, gEvType) {
    var pos = txt.pos;
    if (gEvType.indexOf('touch') === -1)
        return (coordX >= pos.x - 300 && coordX <= pos.x + 300 && coordY >= pos.y - 20 && coordY <= pos.y + 20);
    else
        return (coordX >= pos.x - 50 && coordX <= pos.x + 50 && coordY >= pos.y+10  && coordY <= pos.y + 100);
}




function showSelectedText(txtIdx) {
    gTxtIdx = txtIdx
    gMeme.txtIdx = gTxtIdx;
    document.querySelector('#imgCanvas').style.cursor = 'grabbing'
    document.querySelector('input[type="text"]').placeholder = gMeme.txts[gMeme.txtIdx].line;
}


function moveText(ev) {
    ev.preventDefault();
    if (!gIsTxtMoving) return;
    var txtPos = getTxtPos(gTxtIdx);
    var diffX;
    var diffY;
    if (gEvType.indexOf('touch') === 0) {
        diffX = ev.touches[0].clientX - txtPos.x;
        diffY = ev.touches[0].clientY - txtPos.y;
    }
    else {
        diffX = ev.offsetX - txtPos.x;
        diffY = ev.offsetY - txtPos.y;
    }

    updateTextPos(gTxtIdx, diffX, diffY);
    renderImg();
}

function setTextPos() {
    gIsTxtMoving = false;
    document.querySelector('input[type="text"]').placeholder = ' ';
    document.querySelector('#imgCanvas').style.cursor = 'grab';
    renderPlaceHolder();
}
