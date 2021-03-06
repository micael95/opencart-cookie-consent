var cookieConsent = cookieConsent || {};
cookieConsent.cookies = (function () {
    'use_strict';

    document.addEventListener('DOMContentLoaded', function() {
        if (getCookie('CookieConsent') === null) {
            $('.cookie-bar').fadeIn(200);
        }
    }, false);

    function setCookie(key, value, days) {
            var expires = new Date();
            expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
            document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
    }

    function getCookie(key) {
        var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        return keyValue ? keyValue[2] : null;
    }

    return {
        setCookieConsent: function () {
            setCookie('CookieConsent', true, 360);
            $('.cookie-bar').fadeOut(200);
        }
    };

})();