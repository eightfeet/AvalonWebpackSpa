var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin'); //html模板插入代码
var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //全局样式
var LessPath = path.join(__dirname, 'app/less/');

var plugins = [
    //清空目录
    new Clean(['dist']),
    //重复模块合并
    new webpack.optimize.DedupePlugin(),
    //合并第三方库
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        //filename: 'vendor.bundle.[chunkhash].js'
        filename: 'vendor.bundle.js'
    }),
    //定义html页面
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "app/index.html"),
        filename: "index.html",
        //hash: true
    }),
    //压缩
    new webpack.optimize.UglifyJsPlugin({ 
        compress: {
            warnings: false
        }
    }),
    //版本注释
    new webpack.BannerPlugin('v0.1 ' + new Date + ' auth by eightfeet', { 
        raw: false,
        entryOnly: false
    }),
    //将样式统一发布到style.css中
    new ExtractTextPlugin("style.css", {
        allChunks: true,
        disable: false
    }),
]

module.exports = {
    entry: {
        index: path.join(__dirname, "app/module/index.js"),
        vendor: ['domReady', 'avalon', 'mmState', 'zepto']
    }, //开发入口文件
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    }, //页面引用的文件
    module: {
        loaders: [{
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=2000&name=images/[name].[ext]'
        }],
        preLoaders: [
            { test: /\.js$/, loader: "amdcss-loader" }
        ]
    },
    resolve: {
        extensions: ['.js', "", ".css", ".less"],
        alias: {
            domReady: path.join(__dirname, 'app/library/domReady/domReady.js'),
            avalon: path.join(__dirname, 'app/library/avalon/avalon.mobile.shim'),
            mmState: path.join(__dirname, 'app/library/mmRouter/mmState.js'),
            mmPromise: path.join(__dirname, 'app/library/mmRouter/mmPromise'),
            mmRouter: path.join(__dirname, 'app/library/mmRouter/mmRouter'),
            mmHistory: path.join(__dirname, 'app/library/mmRouter/mmHistory'),
            zepto: path.join(__dirname, 'app/library/zepto/zepto.min'),
            appless: LessPath + 'index',
        }
    },
    plugins: plugins
}
