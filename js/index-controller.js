'use strict'


renderImgs();

function renderImgs() {
    var imgs = getAllImgs();
    var strHTML = ``;
    for (var i = 0; i < imgs.length; i++) {
        strHTML += `<div><img class="img-gallery" src="${imgs[i]}" onclick="onMemeImg(${i})"></div>`;
    }
    var elImgContainer = document.querySelector('.img-container');
    elImgContainer.innerHTML = strHTML;
}



function onMemeImg(imgIdx) {
    setMemeImg(imgIdx);
    window.location = "memeCreator.html";
}