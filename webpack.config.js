module.exports = {
    context: __dirname + "/app",

    entry: {
        javascript: "./app.js",
        html: "./index.html"
    },

    output: {
        filename: "app.js",
        sourceMapFilename: "app.js.map",
        path: __dirname + "/dist"
    },

    resolve: {
        modulesDirectories: [
            'node_modules',
            'app'
        ],
        extentions: ['js', 'jsx', 'scss']
    },

    devtool: 'eval-source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel"]
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.scss$/,
                loader: 'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded'
            }
        ],
        noParse: /\.min\.js/,

        preLoaders: [{
            test:    /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
        }]
    }
}