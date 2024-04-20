import HtmlWebpackPlugin from "html-webpack-plugin";
import { URL } from "url";

const __dirname = new URL('.', import.meta.url).pathname;

export default {
    mode: 'development',
    entry: `${__dirname}/src/index.js`,
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html' // Alterando o caminho do template para relativo
        })
    ],
    devServer: {
        static: {
            directory: `${__dirname}/dist`
        },
        hot: true,
        open: true
    }
};
