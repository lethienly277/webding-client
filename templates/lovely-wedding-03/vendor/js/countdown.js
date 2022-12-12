//[countdown Javascript]

//Project:	Global - Multipage Html Responsive Template
//Version:
//Primary use:	Global - Multipage Html Responsive Template 

//add your script here

//counter
(function ($) {
    'use strict';
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
})(jQuery);// End of use strict



// countdown timer
(function ($) {
    /**
    * Set your date here  (YEAR, MONTH (0 for January/11 for December), DAY, HOUR, MINUTE, SECOND)
    * according to the GMT+0 Timezone
    **/
    var launch = new Date(2023, 12, 14, 09, 00);
    /**
    * The script
    **/

    var days = $('.days');
    var hours = $('.hours');
    var minutes = $('.minutes');
    var seconds = $('.seconds');

    setDate();
    function setDate() {
        var now = new Date();
        if (launch < now) {
            days.html('<h1>0</H1><p>Ngày</p>');
            hours.html('<h1>0</h1><p>Giờ</p>');
            minutes.html('<h1>0</h1><p>Phút</p>');
            seconds.html('<h1>0</h1><p>Giây</p>');
        }
        else {
            var s = -now.getTimezoneOffset() * 60 + (launch.getTime() - now.getTime()) / 1000;
            var d = Math.floor(s / 86400);
            days.html('<h1>' + d + '</h1><p>Ngày' + (d > 1 ? '' : ''), '</p>');
            s -= d * 86400;

            var h = Math.floor(s / 3600);
            hours.html('<h1>' + h + '</h1><p>Giờ' + (h > 1 ? '' : ''), '</p>');
            s -= h * 3600;

            var m = Math.floor(s / 60);
            minutes.html('<h1>' + m + '</h1><p>Phút' + (m > 1 ? '' : ''), '</p>');

            s = Math.floor(s - m * 60);
            seconds.html('<h1>' + s + '</h1><p>Giây' + (s > 1 ? '' : ''), '</p>');
            setTimeout(setDate, 1000);
        }
    }
})(jQuery);