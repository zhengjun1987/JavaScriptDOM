function addLoadEvent(func) {
    var oldLoad = window.onload;
    var message = typeof window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldLoad();
            func();
        }
    }
}

