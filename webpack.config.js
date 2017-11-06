const path = require('path');

module.exports = {
    mode: "development", // "production" | "development" | "none"
    entry: "./src/App.js", // string | object | array
    output: {
        filename: "bundle.js", // string
        publicPath: "/dist/", // string
        libraryTarget: "umd", // universal module definition
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    presets: ["react"]
                },
            }
        ]
    },
    devtool: "source-map", // enum
    target: "web", // enum
    stats: "errors-only",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 9000
    },
    plugins: [
    ]
};
