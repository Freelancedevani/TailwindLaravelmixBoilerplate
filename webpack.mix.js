let mix = require('laravel-mix');

// mix
//     .js('src/js/app.js', 'js')
//    .css('src/css/app.css','css')
//    .setPublicPath('public')
//    .option({
//         postCss: [require('tailwindcss')],
//         processCssUrls: false,
//    })
//    .browserSync({
//        server:'./public',
//        files: ['./**/*.html', './public'],
//    });

mix
.js('src/js/app.js', 'js')
.css('src/css/app.css', 'css')
.setPublicPath('public')
.options({
    postCss: [require('tailwindcss')],
    processCssUrls: false
})
.browserSync({
    server:'./public',
    files: ['./**/*.html', './public'],
});
