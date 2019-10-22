const resolve = str => path.resolve(__dirname, str);
const path = require('path');
var Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')

    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    .addEntry('app', './assets/app.ts')

    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()

    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())
    // enables @babel/preset-env polyfills
    .configureBabel(() => {
    }, {
        useBuiltIns: 'usage',
        corejs: 3
    })

    .enableVueLoader()

    .enableTypeScriptLoader()

    .addLoader({
        test: /\.html$/,
        loader: 'vue-template-loader',
        // exclude: /index.html/,
        options: {
            transformToRequire: {
                img: 'src'
            }
        }
    })
    .enableIntegrityHashes(Encore.isProduction())
;

const config = Encore.getWebpackConfig();

config.stats = 'verbose';
// config.stats = 'minimal';

config.resolve.alias['@src'] = resolve('./assets');
module.exports = config;
