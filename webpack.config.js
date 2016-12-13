var webpack = require("webpack");
module.exports = {
    // configuration
    devtool: false,
    context: __dirname+'\\resources\\assets\\js',
    entry:{
        app:'./app',
        vendor:['./vendor']
    },
    output: {
        path: __dirname + "\\public\\js",
        filename: "[name].js"
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",//和上面配置的入口对应
            filename: "vendor.js"//导出的文件的名称
        })
    ]
};
