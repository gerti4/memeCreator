'use strict'


var gTxtIdx;
var gIsTxtMoving = false;




function selectText(ev) {
    ev.preventDefault();
    var coordX = ev.offsetX;
    var coordY = ev.offsetY;        
    var txts = getMemeTxts();    
    for (var i = 0; i < txts.length; i++) {
        if (compareTxtCoords(coordX, coordY, txts[i])) {
            showSelectedText(i);
            removeAlignTxt(i);
            gIsTxtMoving = true;
        }
    }
}


function compareTxtCoords(coordX, coordY, txt) {
    var pos = txt.pos;
    return (coordX >= pos.x - 300 && coordX <= pos.x + 300 && coordY >= pos.y - 20 && coordY <= pos.y + 20);
}



function showSelectedText(txtIdx) {
    gTxtIdx = txtIdx
    gMeme.txtIdx = gTxtIdx ;
    document.querySelector('#imgCanvas').style.cursor='grabbing'
    document.querySelector('input[type="text"]').placeholder = gMeme.txts[gMeme.txtIdx].line;
}


function moveText(ev) {
    ev.preventDefault();
    if (!gIsTxtMoving) return;

    var txtPos = getTxtPos(gTxtIdx);
    var diffX = ev.offsetX - txtPos.x;
    var diffY = ev.offsetY - txtPos.y;

    updateTextPos(gTxtIdx, diffX, diffY);
    renderImg();
}

function setTextPos() {
    gIsTxtMoving = false;
    document.querySelector('input[type="text"]').placeholder = ' ';
    document.querySelector('#imgCanvas').style.cursor='grab'
}
