const webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill','./react/src/index.js'],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                    },
                ]
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', 'css']
    },
    output: {
        path: __dirname + '/static/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './static/dist',
        hot: true
    }
};