'use strict'


renderImgs();

function renderImgs() {
    var imgs = getAllImgs();
    var strHTML = ``;
    for (var i = 0; i < imgs.length; i++) {
        strHTML += `<div><img class="img-gallery" src="${imgs[i]}" onclick="onChangeImg(${i})"></div>`;
    }
    var elImgContainer = document.querySelector('.img-container');
    elImgContainer.innerHTML = strHTML;
}



function onChangeImg(imgIdx) {
    setMemeImg(imgIdx);
    window.location = "memeCreator.html";
}