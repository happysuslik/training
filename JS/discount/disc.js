/**
 * Created by hio on 02.10.2015.
 */
(function() {
    if (window.addEventListener) {
        window.addEventListener("load", init, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", init);
    }

    function init() {
        var btn = document.getElementById("discount");
        btn.addEventListener("mousemove", function (e) {
            move(this, e);
        } , false);
    }

    function move(btn, e) {
        var maxClientWidth = (document.body.clientWidth) - 190;
        var maxClientHeight = (document.documentElement.clientHeight) - 50;

        function X() {
            var x = Math.floor(Math.random() * (maxClientWidth - 1)) - 1;
            return x;
        }

        function Y() {
            var y = Math.floor(Math.random() * (maxClientHeight - 1)) - 1;
            return y;
        }

        if (X() > maxClientWidth) {
            X;
        } else {
            x = X();
            btn.style.left = x + "px";
        }

        if (Y() > maxClientHeight) {
            Y;
        } else {
            y = Y();
            btn.style.top = y + "px";
        }
    }

}) ();
