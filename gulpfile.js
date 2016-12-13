const elixir = require('laravel-elixir');
const path = require('path');
var webpack = require("webpack");
require('laravel-elixir-vue-2');
require('laravel-elixir-webpack-official');

Elixir.config.sourcemaps = false;
Elixir.webpack.config.module.loaders = [];

Elixir.webpack.mergeConfig({
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
});

elixir(mix => {
    mix.sass('app.scss')
       .webpack('app.js');
});
