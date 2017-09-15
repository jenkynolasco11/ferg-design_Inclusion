(function() {
    var prev = document.getElementsByClassName('prev')[0];
    var next = document.getElementsByClassName('next')[0];

    function slide() {
        var images = document.getElementsByClassName('slider-img');

        for (var i = 0; i < images.length; i++) {
            var img = images[i];
            img.style = `margin-left : ${100 * i}%;background-image: url(${ img.dataset.src });`;
        };
    }

    // next.addEventListener('click', function(e) {
    //   slide(-1);

    //   setTimeout(function(){
    //     // var len = document.getElementsByClassName('slider-img').length;
    //     var imgList = document.getElementsByClassName('img-list')[0];
    //     var imgs = imgList.getElementsByClassName('slider-img');
    //     var len = imgs.length;

    //     var imgSrc = imgs[len-1].dataset.src;

    //     var newDiv = document.createElement('div');

    //     newDiv.style = `margin-left : 300%;background-image: url(${ imgSrc });`

    //     imgList.remove(imgs[len-1]);
    //     imgList.appendChild(newDiv);
    //   }, 1000);
    //   // add child to end after 1s of transition
    // });

    // prev.addEventListener('click', function(e) {
    //   // remove child and add it to the start then start transitioning
    //   slide(1);
    // });

    slide(0);
})();