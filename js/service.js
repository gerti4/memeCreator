'use stirct'




const MEME_KEY = 'meme';
const IMG_KEY = 'img';

var gImgs = defaultImgs();
var gMeme;
var gImgSrc;




function defaultMeme() {
    var meme = {
        imgUrl: loadImgFromStorage(IMG_KEY),
        txtIdx: 1,
        txts: [
            {
                line: 'Bye',
                size: 35,
                align: 'center',
                color: 'white',
                font: 'IMPACT',
                border: 'black',
                pos: { x: getWidthCanvas() / 2, y: getHeightCanvas() - 50 }
            },
            {
                line: 'Hey',
                size: 35,
                align: 'center',
                color: 'white',
                font: 'IMPACT',
                border: 'black',
                pos: { x: getWidthCanvas() / 2, y: getTopCanvas() }
            },
        ]
    }
    gMeme = meme;
    saveMemeToStorage(MEME_KEY, gMeme)
}


function defaultImgs() {
    var imgs = [
        { id: 1, url: 'meme-imgs (square)/2.jpg', keyWords: ['happy'] },
        { id: 2, url: 'meme-imgs (square)/003.jpg', keyWords: ['presidant', 'funny'] },
        { id: 3, url: 'meme-imgs (square)/004.jpg', keyWords: ['animal', 'cute'] },
        { id: 4, url: 'meme-imgs (square)/005.jpg', keyWords: ['cute'] },
        { id: 5, url: 'meme-imgs (square)/006.jpg', keyWords: ['cute', 'animal'] },
        { id: 6, url: 'meme-imgs (square)/8.jpg', keyWords: ['happy', 'people'] },
        { id: 7, url: 'meme-imgs (square)/9.jpg', keyWords: ['cute', 'happy', 'funny'] },
        { id: 8, url: 'meme-imgs (square)/12.jpg', keyWords: ['funny', 'people'] },
        { id: 9, url: 'meme-imgs (square)/19.jpg', keyWords: ['people'] },
        { id: 10, url: 'meme-imgs (square)/5.jpg', keyWords: ['cute', 'funny'] },
        { id: 11, url: 'meme-imgs (square)/img2.jpg', keyWords: ['funny', 'people'] },
        { id: 12, url: 'meme-imgs (square)/img4.jpg', keyWords: ['funny', 'presidant'] },
        { id: 13, url: 'meme-imgs (square)/img5.jpg', keyWords: ['cute', 'funny'] },
        { id: 14, url: 'meme-imgs (square)/img6.jpg', keyWords: ['animal'] },
        { id: 15, url: 'meme-imgs (square)/img11.jpg', keyWords: ['presidant', 'funny'] },
        { id: 16, url: 'meme-imgs (square)/img12.jpg', keyWords: ['funny', 'akward', 'people'] },
        { id: 17, url: 'meme-imgs (square)/putin.jpg', keyWords: ['people', 'presidant'] },
        { id: 18, url: 'meme-imgs (square)/patrick.jpg', keyWords: ['funny', 'people'] },
        { id: 19, url: 'meme-imgs (square)/leo.jpg', keyWords: ['people'] },
        { id: 20, url: 'meme-imgs (square)/meme1.jpg', keyWords: ['people', 'funny'] },
    ]
    return imgs;
}

function getImgs(keySearch) {
    var imgs = []
    if (!keySearch) return gImgs;
    gImgs.filter(img => {
        return (img.keyWords.forEach(word => {
            if (word === keySearch)
                imgs.push(img);

        }))
    })
    return imgs;
}

function setMemeImg(imgIdx) {
    gImgs.forEach(element => {
        if (element.id === imgIdx)
            gImgSrc = element.url

    })
    saveImgToStorage(IMG_KEY, gImgSrc)
}

function getMemeImg() {
    return loadImgFromStorage(IMG_KEY);
}

function getMemeText(idx) {
    return gMeme.txts[idx].line;
}

function changeTxt(txt , removeLetter) {
    if(removeLetter) gMeme.txts[gMeme.txtIdx].line = txt
    else gMeme.txts[gMeme.txtIdx].line += txt;   
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
        size: 35,
        align: 'center',
        color: 'white',
        font: 'IMPACT',
        border: 'black',
        pos: { x: getWidthCanvas() / 2, y: getHeightCanvas() / 2 }
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
    gMeme.txts[gMeme.txtIdx].pos.x = getWidthCanvas() / 2;
    saveMemeToStorage(MEME_KEY, gMeme);
}

function removeAlignTxt(idx) {
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

function saveImgToStorage(IMG_KEY, gImgSrc) {
    localStorage.setItem(IMG_KEY, JSON.stringify(gImgSrc));
}

function loadImgFromStorage(IMG_KEY) {
    var str = localStorage.getItem(IMG_KEY);
    var value = JSON.parse(str);

    return (value) ? value : 'meme-imgs (square)/meme1.jpg';
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

