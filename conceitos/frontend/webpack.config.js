const path = require('path');

/* Aqui tem a instalação do babel-loader

    yarn add babel-loader

*/

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'), 
        filename: 'bundle.js'
    },
    devServer: {
        static: {
          directory: path.join(__dirname, "public")
        }
    },
    module: {
        rules: [
            {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                loader: 'babel-loader', 
               }     
            }
        ]
    },
};

// yarn webpack --mode development

// yarn add webpack-dev-server -D

// E pra rodar o servidor de Desenvolvimento
// yarn webpack-dev-server --mode development