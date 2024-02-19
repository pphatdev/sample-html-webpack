import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);


const dist  = path.resolve(__dirname, "dist")
const src   = path.resolve(__dirname, "src")
const nodeModule   = path.resolve(__dirname, "node_modules")

export default {
    devtool: "eval",
    mode: 'production',
    entry: {
        js: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        filename: '[name].[contenthash].js',
        asyncChunks: false,
        chunkFilename: '[name].[contenthash].bundle.js',
        clean: true
    },
    watchOptions: {
        ignored: nodeModule,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                resolve: {
                    fullySpecified: false, // disable the behaviour
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: dist,
            staticOptions: {},
            serveIndex: true,
            watch: true,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Kid Calculate' ,
            style: `${dist}/index.css`,
            filename: 'index.html',
            template: `${src}/index.html`
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: `${src}/assets/`,
                    to: `${dist}/assets`
                }
            ],
        }),
    ]
};

