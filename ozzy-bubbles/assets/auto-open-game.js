(function () {
    if (location.search !== '?game=ozzy-bubbles') {
        location.replace(location.pathname + '?game=ozzy-bubbles' + location.hash);
    }
})();
