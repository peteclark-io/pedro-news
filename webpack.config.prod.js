var webpack = require('webpack');

module.exports = {
    entry: "./app/main.js",
    output: {
        path: __dirname + '/dist/js',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
                test: /\.json$/,
                loader: "json-loader"
            }, {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }, {
              test: /\.css$/,
              loader: 'style-loader'
            }, {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'css-loader',
                query: {
                  sourceMap: false,
                  modules: true,
                  localIdentName: '[hash:base64:4]',
                  minimize: true,
                }
            }
        ]
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ]
};
