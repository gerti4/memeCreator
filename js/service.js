'use stirct'




const MEME_KEY = 'meme';

var gImgs = defaultImgs();
var gMeme = loadMemeFromStorage(MEME_KEY);





function defaultMeme(imgIdx) {
    var meme = {
        imgUrl: gImgs[imgIdx],
        txtIdx: 0,
        txts: [
            {
                line: '',
                size: 20,
                align: 'left',
                coordX: 0.1,
                color: 'red',
                coordY: 20
            }
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

function getTxtWidth(){
    return gMeme.txts[gMeme.txtIdx].width;
}


function increaseFont(){
    gMeme.txts[gMeme.txtIdx].size++;
}
function decreaseFont(){
    gMeme.txts[gMeme.txtIdx].size--;

}
function deleteText(){    
    gMeme.txts.splice(gMeme.txtIdx,1);
    gMeme.txtIdx--;
    if(gMeme.txtIdx<0) gMeme.txtIdx = 0;
    saveMemeToStorage(MEME_KEY,gMeme);
}

function setTxtIdx(){
    (gMeme.txtIdx<gMeme.txts.length-1)? gMeme.txtIdx++:gMeme.txtIdx=0;
    saveMemeToStorage(MEME_KEY,gMeme);
    return gMeme.txtIdx;

}


function addNewText(txt){
    gMeme.txtIdx++;
    gMeme.txts[gMeme.txtIdx] =  {
        line: txt,
        size: 20,
        coordX: 0.1,
        color: 'red',
        coordY: 20
        
    }
    saveMemeToStorage(MEME_KEY,gMeme)
}

function moveTxt(diff){    
    gMeme.txts[gMeme.txtIdx].coordY += diff;
    saveMemeToStorage(MEME_KEY,gMeme)

}




function getMemeCoordY(idx){    
    return gMeme.txts[idx].coordY;
}


function alignLeft(){
    gMeme.txts[gMeme.txtIdx].align = 'left'
    gMeme.txts[gMeme.txtIdx].coordX = 0.05;
}
function alignRight(){
    gMeme.txts[gMeme.txtIdx].align = 'right'
    gMeme.txts[gMeme.txtIdx].coordX = 0.7;    
}
function alignMiddle(){
    gMeme.txts[gMeme.txtIdx].align = 'middle'
    gMeme.txts[gMeme.txtIdx].coordX = 0.35;    
}


function saveMemeToStorage(MEME_KEY, gMeme) {
    localStorage.setItem(MEME_KEY, JSON.stringify(gMeme));
}

function loadMemeFromStorage(MEME_KEY) {
    var str = localStorage.getItem(MEME_KEY);
    var value = JSON.parse(str);
    return (value) ? value : defaultMeme(0);
}

