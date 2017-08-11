/**
 * @道心 by 2017
 * [name].[hash]=> app.aca93235457402deecffd04acae25ce4
 * [name].[hash:8]=> app.3dr4yg6u
 * [name].[ext]=>  app.png
 * [sha512:hash:base64:7]=> gdyb21L.png
 * [path]=>  根目录
 */

const config = {
    pathName: 'page',
    pageTitle: 'page 初始化页面',
}

const distPath = 'dist/' + config.pathName;
const srcPath = 'src/' + config.pathName;

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './' + srcPath + '/app.js',
    output: {
        path: path.join(__dirname, distPath), // 指定打包之后的文件夹
        filename: 'js/[name].[hash:8].js', // 可以打包为多个文件
        library: "jsgu",
        publicPath: '',
        libraryTarget: "umd"
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, distPath),
        compress: true,
        port: 9000 //设置默认监听端口，如果省略，默认为"8080"
    },
    module: {
        rules: [{
                test: /\.css$/,
                exclude: /^node_modules$/, //需要排除的目录
                use: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!autoprefixer-loader", publicPath: "../" }),
            },
            {
                test: /\.less$/,
                exclude: /^node_modules$/,
                use: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!autoprefixer-loader!less-loader", publicPath: "../" })
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                exclude: /^node_modules$/,
                use: 'file-loader?name=[sha512:hash:base64:7].[ext]&outputPath=font/'
            }, {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                exclude: /^node_modules$/,
                use: 'url-loader?limit=1000&name=[sha512:hash:base64:7].[ext]&outputPath=img/', //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            },
            {
                test: /\.(js|es6)$/,
                exclude: /^node_modules$/,
                loader: 'babel-loader?presets[]=es2015&compact=true', //此处不能用use
            },
            {
                test: /.jsx?$/,
                exclude: /^node_modules$/,
                loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
            },
            {
                test: /\.vue$/,
                exclude: /^node_modules$/,
                loader: 'vue-loader?extractCSS=true', //此处不能用use
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!autoprefixer-loader", publicPath: "../" }),
                        js: 'babel-loader?presets[]=es2015',
                        less: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!autoprefixer-loader!less-loader", publicPath: "../" })
                    }
                }
            },
            { test: /\.hbs$/, loader: "handlebars-loader" }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([distPath]),
        new HtmlWebpackPlugin({ title: config.pageTitle, template: './src/index.html', minify: { removeComments: true, collapseWhitespace: true } }),
        new webpack.optimize.CommonsChunkPlugin('common'), //提取公共代码
        new webpack.HotModuleReplacementPlugin(), // 热加载插件
        new webpack.LoaderOptionsPlugin({ minimize: true }), //压缩css等
        new webpack.BannerPlugin('© 2017 道心. @mail=>liuhangbiaoo@gmail.com,@url=>www.jsgu.net'),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }), //压缩
        new ExtractTextPlugin("css/[name].[hash:8].css"), //输出css目录名称
        // new ExtractTextPlugin({filename:(getPath) => {return getPath('css/[name].css').replace('css','cxs');},allChunks:true,disable: false})//输出css目录名称正则替换
    ],
    resolve: { extensions: ['.js', '.jsx', '.vue', '.json'], alias: { 'vue$': 'vue/dist/vue.esm.js' } },
}