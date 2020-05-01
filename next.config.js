const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
const path = require("path");

const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')


module.exports = withCSS(withSass({
   webpack (config, options) {
       config.module.rules.push({
           test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
           use: {
               loader: 'url-loader',
               options: {
                   limit: 100000
               }
           }
       });

       config.plugins.push(
        new FilterWarningsPlugin({
            exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
        }),
    )

       config.resolve.modules.push(path.resolve("./"));
       return config;
   }
}));


