javascript: (function() {
    if (!window.jQuery) {
        var jq = document.createElement('script');
        jq.src = 'https://code.jquery.com/jquery-3.1.1.min.js';
        document.getElementsByTagName('head')[0].appendChild(jq);
        setTimeout(function() {
            alert('jQuery v' + jQuery.fn.jquery + ' est prêt !');
        }, 100);
    } else {
        alert('Cette page a déjà jQuery v' + jQuery.fn.jquery);
    }
})();
