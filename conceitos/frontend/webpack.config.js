const path = require('path');

/* Aqui tem a instalação de alguns loaders

    yarn add babel-loader
    yarn add styled-loader css-loader
    yarn add file-loader
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
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader',
                }
            }
        ]
    },
};


// yarn add webpack-dev-server -D

// E pra rodar o servidor de Desenvolvimento
// yarn webpack-dev-server --mode development