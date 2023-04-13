const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require ('path')
module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        port: 3000,
    },
    devtool: 'inline-source-map',
    entry: {
        bundle: './src/scripts/index.js',
        // assetModuleFileName: '[name][ext]'
    },
    mode: 'development',
    module: {
        rules: [
            {
            test: /\.css$/,
            use:['style-loader', 'css-loader']
        },
        {
            test: /\.(svg|png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }
        ]
        
    },
    output: { 
        clean: true,
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/templates/index.html',
            title: 'Friendly Tours | Home',
        })
    ]
}