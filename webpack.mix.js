const mix = require('laravel-mix');
    
    mix.setResourceRoot('');
    mix.js('js/index.js', './js/')
    .autoload({
        "jquery": ['$', 'window.jQuery'],
        "vue": ['Vue', 'window.Vue']
    })

    .sass('sass/style.scss', './css/')
    .options({
        processCssUrls: false
    })

    // .browserSync({
    //     files: './**/*',
    //     server: './html/top.html',
    //     proxy: false
    // });