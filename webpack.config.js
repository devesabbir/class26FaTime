const path = require('path')
const Htmlwebpack = require('html-webpack-plugin')

module.exports = {
  
    mode : 'development',
    entry : path.resolve(__dirname, './src/index.js'),
    output : {
        path : path.resolve(__dirname, 'bundle'),
        filename : 'bundle.js',
        assetModuleFilename : '[name][ext]',
        clean : true,

    },
    devServer :{
             static : {
                 directory : path.resolve(__dirname, 'bundle')
             },
             port : 3000,
             open : true,
             hot : true,
            
             
     },
     module : {
          rules : [
              {
                  test : /\.js$/i,
                  exclude : /(node_modules)/,
                  use :{
                      loader : 'babel-loader',
                      options : {
                          presets: ['@babel/preset-env']
                      }
                  }

              },
            {
                test : /\.(css|scss)$/i,
                use :['style-loader','css-loader','sass-loader']

            },
            {
                test : /\.(jpg|jpeg|png|gif|svg|webp)$/i,
                type : 'asset/resource'

            }
          ]
     },
    plugins :[
        new Htmlwebpack({
            title : 'htmlTemplate',
            filename : 'index.html',
            template : path.resolve(__dirname , './public/index.html')
        })
    ],

}