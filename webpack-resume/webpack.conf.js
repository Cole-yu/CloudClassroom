const path = require("path");
const webpack = require("webpack");
const HTMLPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractPlugin = require("extract-text-webpack-plugin");

const config={
    target:"web",
    entry:{
        app:path.join(__dirname,"src/index.js"),
        vendor:['vue']
    },
    output:{
        filename:"[name].[hash:8].js",
        path:path.join(__dirname,"dist")
    },
    devtool:"#cheap.module-eval-source-map",
    devServer:{
        port:8000,
        host:'127.0.0.1',
        overlay:{   // 直接在页面上显示错误
            error:true
        },
        open:true,
        hot:true
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
                test:/\.jsx$/,
                loader:"babel-loader"
            },
            // {
            //     test:/\.css/,
            //     use:[
            //         "style-loader",
            //         "css-loader"
            //     ]
            // },
            {
                test:/\.css$/,
                use:ExtractPlugin.extract({
                    fallback:"style-loader",
                    use:[
                        'css-loader'                        
                    ]
                })
            },
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:1024,
                            name:"[name].[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    optimization:{
        splitChunks:{
            cacheGroups:{
                vendor:{
                    test:/node_modules/,
                    chunks:"initial",
                    name:"vendor",
                    priority:10,
                    enforce:true
                }
            }            
        }
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new VueLoaderPlugin(),
        new HTMLPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractPlugin('styles.[chunkHash:8].css')
    ],
    mode:"none"
}
module.exports=config;