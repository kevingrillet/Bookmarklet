javascript: (function() {
    var day = hou = min = sec = 0;
    var reg = /<div class="timestamp"><span aria-label=".*?">(?:(\d*):)??(?:(\d*):)?(\d*)<\/span><\/div>/img;
    var re;
    while (re = reg.exec(document.documentElement.innerHTML)) {
        hou += parseInt(re[1]) | 0;
        min += parseInt(re[2]) | 0;
        sec += parseInt(re[3]) | 0;
    }
    min += Math.floor(sec / 60);
    sec -= Math.floor(sec / 60) * 60;
    hou += Math.floor(min / 60);
    min -= Math.floor(min / 60) * 60;
    day += Math.floor(hou / 24);
    hou -= Math.floor(hou / 24) * 24;
    if (day > 0) {
        alert(day + "d:" + hou + "h:" + min + "m:" + sec + "s");
    } else if (hou > 0) {
        alert(hou + "h:" + min + "m:" + sec + "s");
    } else if (min > 0) {
        alert(min + "m:" + sec + "s");
    } else if (sec > 0) {
        alert(sec + "s");
    } else {
        alert("???");
    }
})();
