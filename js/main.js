(function(window, document) {
    var softersDebut = window.moment('2013-09-23');
    var now = window.moment();

    document.querySelector('[data-role="softers-time"]').innerHTML = 'Há mais ou menos ' + moment.duration(now.diff(softersDebut)).humanize();
}(window, document));
