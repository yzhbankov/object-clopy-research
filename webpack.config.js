var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "client"),
    entry: './main.js',
    output: {
        path: __dirname + '/public/',
        filename: "main.bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.sass$/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                },
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
};