var cssInliner = require('css-inliner');
var fs = require('fs');
var htmlMinifier = require('html-minifier').minify;

var inliner = new cssInliner({
    directory: '.'
});

var originalHTML = fs.readFileSync('./src/index.html', 'utf8');

inliner.on('warning', function(warning) {
    console.log('So this happened:', warning);
});

inliner
    .inlineCSSAsync(originalHTML)
    .then(function(inlineCSSinHTML) {
        var minifiedHTML = htmlMinifier(inlineCSSinHTML, {
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            minifyCSS: true,
            removeAttributeQuotes: true
        });

        try {
            fs.writeFileSync('./index.html', minifiedHTML);
        } catch (err) {
            console.error(err);
        }
    });