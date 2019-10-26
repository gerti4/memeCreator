'use stirct'




const MEME_KEY = 'meme';

var gImgs = defaultImgs();
var gMeme = loadMemeFromStorage(MEME_KEY);





function defaultMeme(imgIdx) {
    var meme = {
        imgUrl: gImgs[imgIdx],
        txtIdx: 1,
        txts: [
            {
                line: 'Bye',
                size: 30,
                align: 'center',
                color: 'white',
                font: 'IMPACT',
                border: 'black',
                pos: { x: getWidthCanvas()/2, y: getHeightCanvas()-50 }
            },
            {
                line: 'Hey',
                size: 30,
                align: 'center',
                color: 'white',
                font: 'IMPACT',
                border: 'black',
                pos: { x: getWidthCanvas()/2, y: getTopCanvas() }
            },
        ]
    }
    gMeme = meme;
    saveMemeToStorage(MEME_KEY, gMeme)
}


function defaultImgs() {
    var imgs = [
        'meme-imgs (square)/2.jpg',
        'meme-imgs (square)/003.jpg',
        'meme-imgs (square)/004.jpg',
        'meme-imgs (square)/005.jpg',
        'meme-imgs (square)/006.jpg',
        'meme-imgs (square)/8.jpg',
        'meme-imgs (square)/9.jpg',
        'meme-imgs (square)/12.jpg',
        'meme-imgs (square)/19.jpg',
        'meme-imgs (square)/5.jpg',
        'meme-imgs (square)/img2.jpg',
        'meme-imgs (square)/img4.jpg',
        'meme-imgs (square)/img5.jpg',
        'meme-imgs (square)/img6.jpg',
        'meme-imgs (square)/img11.jpg',
        'meme-imgs (square)/img12.jpg',
        'meme-imgs (square)/putin.jpg',
        'meme-imgs (square)/patrick.jpg',
        'meme-imgs (square)/leo.jpg',
        'meme-imgs (square)/meme1.jpg',
    ]
    return imgs;
}

function getAllImgs() {
    return gImgs;
}

function setMemeImg(imgIdx) {
    gMeme = defaultMeme(imgIdx)
}

function getMemeImg() {
    return gMeme.imgUrl;
}

function getMemeText(idx) {
    return gMeme.txts[idx].line;
}

function changeTxt(txt) {
    gMeme.txts[gMeme.txtIdx].line = txt;
    saveMemeToStorage(MEME_KEY, gMeme);
}

function getTxtSize(idx) {
    return gMeme.txts[idx].size;
}

function getTxtCoordX(idx) {
    return gMeme.txts[idx].coordX;
}

function getTxtIdx() {
    return gMeme.txtIdx;
}


function increaseFont() {
    gMeme.txts[gMeme.txtIdx].size++;
}
function decreaseFont() {
    gMeme.txts[gMeme.txtIdx].size--;

}
function deleteText() {
    if (gMeme.txts.length === 1) {
        gMeme.txts[0].line = ' ';
        saveMemeToStorage(MEME_KEY, gMeme);

    }
    else {
        gMeme.txts.splice(gMeme.txtIdx, 1);
        gMeme.txtIdx--;
        if (gMeme.txtIdx < 0) gMeme.txtIdx = 0;
        saveMemeToStorage(MEME_KEY, gMeme);
    }
}

function setTxtIdx() {
    (gMeme.txtIdx < gMeme.txts.length - 1) ? gMeme.txtIdx++ : gMeme.txtIdx = 0;
    saveMemeToStorage(MEME_KEY, gMeme);
    return gMeme.txtIdx;

}


function addNewText(txt) {
    gMeme.txtIdx++;
    gMeme.txts[gMeme.txtIdx] = {
        line: txt,
        size: 20,
        align: 'center',
        color: 'white',
        font: 'IMPACT',
        border: 'black',
        pos: { x: getWidthCanvas()/2 , y: getHeightCanvas()/2 }
    }
    saveMemeToStorage(MEME_KEY, gMeme)
}

function moveTxt(diff) {
    gMeme.txts[gMeme.txtIdx].pos.y += (diff * 5);
    saveMemeToStorage(MEME_KEY, gMeme)

}


function setTxtBorder(color) {
    gMeme.txts[gMeme.txtIdx].border = color;
    saveMemeToStorage(MEME_KEY, gMeme);
}

function getTxtBorder(idx) {
    return gMeme.txts[idx].border;
}

function getMemeTxts() {
    return gMeme.txts;
}

function getMemeCoordY(idx) {
    return gMeme.txts[idx].coordY;
}


function alignTxt(position) {
    gMeme.txts[gMeme.txtIdx].align = position;
    gMeme.txts[gMeme.txtIdx].pos.x = getWidthCanvas()/2;
    saveMemeToStorage(MEME_KEY, gMeme);
}

function removeAlignTxt(idx){    
    gMeme.txts[idx].align = 'no-align';
    saveMemeToStorage(MEME_KEY, gMeme);
}

function getTxtAlign(idx) {
    return gMeme.txts[idx].align;
}

function getColor(idx) {
    return gMeme.txts[idx].color;

}

function changeColor(color) {
    gMeme.txts[gMeme.txtIdx].color = color;
    saveMemeToStorage(MEME_KEY, gMeme);

}

function getTxtPos(idx) {
    return gMeme.txts[idx].pos;
}


function saveMemeToStorage(MEME_KEY, gMeme) {
    localStorage.setItem(MEME_KEY, JSON.stringify(gMeme));
}

function loadMemeFromStorage(MEME_KEY) {
    var str = localStorage.getItem(MEME_KEY);
    var value = JSON.parse(str);
    return (value) ? value : defaultMeme(0);
}


function changeFont(font) {
    gMeme.txts[gMeme.txtIdx].font = font;
    saveMemeToStorage(MEME_KEY, gMeme);
}

function getFont(idx) {
    return gMeme.txts[idx].font;
}

function updateTextPos(idx, diffX, diffY) {
    var pos = getTxtPos(idx);
    pos.x += diffX;
    pos.y += diffY;
}

function getTextPosX(idx) {
    return gMeme.txts[idx].pos.x;
}

function getTextPosY(idx) {
    return gMeme.txts[idx].pos.y;
}

