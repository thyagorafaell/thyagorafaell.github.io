var cssInliner = require('css-inliner');
var fs = require('fs');
var htmlMinifier = require('html-minifier').minify;
var ncp = require('ncp').ncp;

function extractCSS(html) {
    var inliner = new cssInliner({
        directory: '.'
    });

    inliner.on('warning', function(warning) {
        console.log('So this happened:', warning);
    });

    return inliner.inlineCSSAsync(html);
}

function minifyHTML(html) {
    return htmlMinifier(html, {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyCSS: true,
        removeAttributeQuotes: true
    });
}

function makeHTMLFile(html) {
    try {
        fs.writeFileSync('./dist/index.html', html);
    } catch (err) {
        console.error(err);
    }
}

function build() {
    var originalHTML = fs.readFileSync('./src/index.html', 'utf8');

    if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist')
    }

    ncp('./src/assets', './dist', function() {
        extractCSS(originalHTML)
            .then(function(html) {
                makeHTMLFile(minifyHTML(html));            
            });
    });
}

module.exports = {
    build: build,
    extractCSS: extractCSS,
    makeHTMLFile: makeHTMLFile,
    minifyHTML: minifyHTML
};