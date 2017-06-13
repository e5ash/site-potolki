var Popup = {
    block: $('.popup'),
    window: $('.popup .window'),
    container: $('.popup .container'),
    bg: $('.popup .bg'),
    speed: 500,
    calcData: $('.popup .calc-data'),
    clientData: $('.popup .client-data'),
    thanks: $('.popup .thanks'),
    funShow: function () {
        var scrollTop = $(window).scrollTop(),
            height = $(window).height();
        this.block.css('padding-top', scrollTop + 50).fadeIn(this.speed).height(height - scrollTop - 20);
    },
    funHide: function () {
        this.block.fadeOut(this.speed);
        setTimeout(function () {
             Popup.calcData.hide();
        }, 1000)
       
    }
}

var PE = {
    block: $('.portfolio-element'),
    window: $('.portfolio-element .window'),
    body: $('.portfolio-element .body'),
    container: $('.portfolio-element .container'),
    bg: $('.portfolio-element .bg'),
    speed: 500,
    funShow: function () {
        var scrollTop = $(window).scrollTop(),
            height = $(window).height();
        this.block.css('padding-top', scrollTop + 50).fadeIn(this.speed).height(height - scrollTop - 20);
    },
    funHide: function () {
        this.block.fadeOut(this.speed);
        setTimeout(function () {
             PE.body.html('');
        }, 1000)
    }
}



$('.popupShow').click(function() {
    Popup.clientData.show();
    Popup.funShow();
});


$('.popupCalcShow').click(function() {
    Popup.calcData.show();
    Popup.funShow();
});

$('.popupThanksShow').submit(function() {
    Popup.clientData.hide();
    Popup.calcData.hide();
    Popup.thanks.show();
    Popup.funShow();
});

PE.bg.click(function() {
   PE.funHide();
});


Popup.bg.click(function() {
    Popup.funHide();
    setTimeout(function () {
        Popup.thanks.hide();
        Popup.clientData.show();
    }, 1000)
});