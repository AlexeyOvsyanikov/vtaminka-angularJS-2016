const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
// const uglifyJS = require('ug');

const path = require('path');

module.exports = {

    mode: "development",
    devtool: "source-map",
    entry: "./application/app.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname , "public/vendor")
    },
    devServer: {
        contentBase: path.join(__dirname, './public'),
        liveReload: true,
        compress: true,
        port: 9000
    },
    plugins: [
        new MergeIntoSingleFilePlugin({
            files: {
                "vendor.js": [
                    'public/libs/js/jquery.min.js',
                    'public/libs/js/script.js',
                    'public/libs/js/bootstrap.js',
                    'public/libs/js/hover.js',
                    'public/libs/js/snap.js',
                    'public/libs/js/selectFx.js',
                    'public/libs/js/modernizr.custom.animate.js',
                    'public/libs/js/jquery.mCustomScrollbar.js',
                    'public/libs/js/ripple-config.js',
                    'public/libs/js/TweenMax.min.js',
                    'public/libs/js/toucheffects.js',
                    'public/libs/js/masonry.pkgd.min.js',
                    'public/libs/js/imagesloaded.js',
                    'public/libs/js/classie.js',
                    'public/libs/js/AnimOnScroll.js',
                ],
                "vendor.css": [
                    'public/libs/css/normalize.css',
                    'public/libs/css/bootstrap.css',
                    'public/libs/css/component.css',
                    'public/libs/css/style.css',
                    'public/libs/css/cs-select.css',
                    'public/libs/css/cs-skin-rotate.css',
                    'public/libs/css/snap.css',
                    'public/libs/css/jquery.mCustomScrollbar.css',
                    'public/libs/css/app.css',
                    'node_modules/angular-loading-bar/src/loading-bar.css',
                ]
            }
        })
    ],
};