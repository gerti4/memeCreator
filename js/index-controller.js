'use strict'

var gImgIdx;
var gKeySearch = '';


function renderImgs() {
    var imgs;

    imgs = getImgs(gKeySearch);
    var strHTML = ``;
    for (var i = 0; i < imgs.length; i++) {
        strHTML += `<div><img class="img-gallery" src="${imgs[i].url}" onclick="onMemeImg(${imgs[i].id})"></div>`;
    }
    if(imgs.length === 0) strHTML= `Not found ${gKeySearch}`;
    var elImgContainer = document.querySelector('.img-container');
    elImgContainer.innerHTML = strHTML;
}



function onMemeImg(imgId) {
    setMemeImg(imgId);

    window.location = "memeCreator.html";
}

function getKeyWord(elSearch) {
    gKeySearch = elSearch.value;
    renderImgs();
}

function foo(){
    console.log('!!!');
    
}
