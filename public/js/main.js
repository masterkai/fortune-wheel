(($) => {

    var wheel = $('#wheel');
    var arrow = $('#pointer');
    var info = $("#info");

    var numItems = 8;
    var arc = 360 / numItems;

    TweenLite.set(wheel, { rotation: 360 ,transformOrigin: '50% 50%'});

    var prizes = [
        '68元',
        '58元',
        '38元',
        '28元',
        '18元',
        '8.8元',
        '谢谢参与',
        '88元'
    ];

    arrow.on('click', () => {

        // var random = Math.floor(Math.random() * 8000) + 6000;
        var random = Math.floor(Math.random() * 800) + 600;
        var tl = new TimelineMax();
        tl
          .to(wheel, 7, { rotation: "+=" + random, ease: Back.easeOut.config(1) })

        TweenLite.to(tl, 4, {timeScale:0, ease: Power1.easeOut, delay: 3 })
    })

    TweenLite.ticker.addEventListener("tick", update);

    function update() {

        var rotation = wheel[0]._gsTransform.rotation;
        var angle = rotation - 360 * Math.floor(rotation / 360);
        var index = Math.floor((360 - angle) / arc) % prizes.length;
        var prize = prizes[index];

        info.html("Current Prize = " + prize);
    }

})(jQuery)