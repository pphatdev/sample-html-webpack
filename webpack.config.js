import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

export default {
    mode: 'development',
    entry: {
        js: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        filename: '[name].[contenthash].js',
        asyncChunks: true,
        chunkFilename: '[name].[contenthash].bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                resolve: {
                    fullySpecified: false, // disable the behaviour
                },
            },
        ],

    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
            staticOptions: {},
            serveIndex: true,
            watch: true,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            seo: ``,
            title: 'Kid Calculate' ,
            style: `${path.resolve(__dirname, "dist")}/index.css`,
            filename: 'index.html',
            template: `${path.resolve(__dirname, "src")}/index.html`
        })
    ]
};

