// JavaScript Document
 function g(o) {
        return document.getElementById(o);
    }
    function coverChange() {
        var order = parseInt(g("count").value);
        if (order < 4) {
            orderNext = order + 1;
        } else {
            orderNext = 1;
        };
        for (var i = 1; i <= 4; i++) {
            g("cover" + i).style.display = "none";
            g("cover" + orderNext).style.display = "block";
            g("num" + i).className = "num_other";
            g("num" + orderNext).className = "num_now";
        }
        g("count").value = orderNext;
    }
    var t = setInterval(coverChange, 3000);
    function coverHover(e) {
        //clearInterval(t);
        for (var i = 1; i <= 4; i++) {
            g("cover" + i).style.display = "none";
            g("cover" + e).style.display = "block";
            g("num" + i).className = "num_other";
            g("num" + e).className = "num_now";
        }
    };