'use stirct'




const MEME_KEY = 'meme';

var gImgs = defaultImgs();
var gMeme = loadMemeFromStorage(MEME_KEY);





function defaultMeme(imgIdx) {
    console.log('!!!');
    var meme = {
        imgUrl: gImgs[imgIdx],
        txtIdx: 0,
        txts: [
            {
                line: 'I never eat Falafel',
                size: 20,
                align: { start: 'left', x: 20 },
                color: 'red',
                width: 20 * 20,
            }
        ]
    }
    console.log(meme);

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
    gMeme.imgUrl = gImgs[imgIdx];
    saveMemeToStorage(MEME_KEY, gMeme);
}

function getMemeImg() {
    return gMeme.imgUrl;
}

function getMemeText() {    
    return gMeme.txts[0].line;
}

function changeTxt(txt) {
    gMeme.txts[0].line = txt;
    gMeme.txts[0].width = (gMeme.txts[0].size*txt.length) *(5/6);
    saveMemeToStorage(MEME_KEY, gMeme);
}

function getTxtSize() {
    return gMeme.txts[0].size;
}

function getTxtAlign() {
    return gMeme.txts[0].align.x;
}

function getTxtWidth(){
    return gMeme.txts[0].width;
}


function saveMemeToStorage(MEME_KEY, gMeme) {
    localStorage.setItem(MEME_KEY, JSON.stringify(gMeme));
}

function loadMemeFromStorage(MEME_KEY) {
    var str = localStorage.getItem(MEME_KEY);
    var value = JSON.parse(str);
    return (value) ? value : defaultMeme(0);
}


