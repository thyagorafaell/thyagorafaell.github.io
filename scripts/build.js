var cssInliner = require('css-inliner');
var fs = require('fs');
var htmlMinifier = require('html-minifier').minify;
var ncp = require('ncp').ncp;

var inliner = new cssInliner({
    directory: '.'
});

var originalHTML = fs.readFileSync('./src/index.html', 'utf8');

if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist')
}

inliner.on('warning', function(warning) {
    console.log('So this happened:', warning);
});

ncp('./src/assets', './dist', function (err) {
    inliner
        .inlineCSSAsync(originalHTML)
        .then(function(inlineCSSinHTML) {
            var minifiedHTML = htmlMinifier(inlineCSSinHTML, {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
                minifyCSS: true,
                removeAttributeQuotes: true
            });

            try {
                fs.writeFileSync('./dist/index.html', minifiedHTML);
            } catch (err) {
                console.error(err);
            }
        });
});