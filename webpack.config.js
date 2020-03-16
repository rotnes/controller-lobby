const controllerConfig = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader",
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'lobbyBundle.js',
        library: 'Lobby',
        publicPath: 'lobby'
    }
};

module.exports = [
    controllerConfig,
];
