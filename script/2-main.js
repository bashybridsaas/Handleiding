/// <reference path="jquery.d.ts"/>
var baseHref = "";
function showPopup($tip, header, body, left, top) {
    $tip.find('.header').html(header);
    var $content = $tip.find('.content').html(body);

    handleLabels($('label', $tip), 'tooltip-info');

    var tipWidth = $content.width() + 5;
    $tip.width(tipWidth);

    var docWidth = $(document).width();
    var docHeight = $(document).width();

    if (left + tipWidth > docWidth - 20)
        left = docWidth - tipWidth - 20;

    $tip.css({
        left: left,
        top: top
    });

    $tip.animate({ opacity: '1' });

    $(document).one('click', function () {
        $tip.fadeOut(function () {
            $tip.remove();
        });
    });
}
function handleLabels($label, baseClass) {
    if (typeof baseClass === "undefined") { baseClass = 'tooltip'; }
    $label.attr('title', 'Klik hier om een uitleg over dit onderwerp op te vragen');
    $label.click(function (event) {
        var $this = $(event.target);

        var word = $this.text();
        if ($this.attr('keyword'))
            word = $this.attr('keyword');

        var $tooptip = $('<div class="' + baseClass + '"><div class="header"></div><div class="content"></div></div>');

        $tooptip.find('.header').text(word);

        var left = event.pageX - 10;
        var top = event.pageY + 30;

        $(document.body).append($tooptip);

        var url = baseHref + "definities/" + word + '.html';

        var $ajax = $.ajax({
            url: url,
            cache: false,
            dataType: 'text'
        }).done(function (value, stat, elem) {
            var posHeaderStart = value.indexOf('<h1');
            if (posHeaderStart == -1)
                return;

            posHeaderStart = value.indexOf('>', posHeaderStart);
            if (posHeaderStart == -1)
                return;
            posHeaderStart++;

            var posHeaderEnd = value.indexOf('</h1>', posHeaderStart);
            if (posHeaderEnd == -1)
                return;

            var posPStart = value.indexOf('<p>');
            if (posPStart == -1)
                return;
            posPStart += 3;

            var posPEnd = value.indexOf('</p>', posPStart);
            if (posPEnd == -1)
                return;

            var header = value.substring(posHeaderStart, posHeaderEnd);
            var body = value.substring(posPStart, posPEnd);

            showPopup($tooptip, header, body, left, top);
        }).fail(function (x, y, z) {
            showPopup($tooptip, word, 'Geen extra informatie beschikbaar', left, top);
        }).always(function () {
        });
    });
}

$(function () {
    //zoek base href op basis van css
    var $link = $('head link').eq(0);
    var linkHref = $link.attr('href');
    var linkArray = linkHref.split('/');
    var linkResult = [];
    for (var x = 0; x < linkArray.length; x++) {
        if (linkArray[x].substr(0, 1) == '.') {
            linkResult.push('..');
        } else {
            linkResult.push('');
            break;
        }
    }
    baseHref = linkResult.join('/');

    handleLabels($('label'));
});
