var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "client"),
    entry: './main.js',
    output: {
        path: __dirname + '/public/',
        filename: "main.bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/]
            }
        ]
    }
};