const path = require("path");
const nodeExternals = require("webpack-node-externals");

const SRC_DIR = path.resolve(__dirname, "test/src");
const BUILD_DIR = path.resolve(__dirname, "test/dist");

const config = {
    target: "node",
    node: {
        __dirname: true
    },
    devtool: "source-map",
    externals: [nodeExternals()],
    entry: {
        e2etest: ["babel-polyfill", `${SRC_DIR}/e2e/index.js`],
        unittest: ["babel-polyfill", `${SRC_DIR}/unit/index.js`]
    },
    resolve: {
        alias: {
            test: path.resolve(__dirname, "./test/src")
        }
    },
    output: {
        path: BUILD_DIR,
        filename: "[name].js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // babel loader for ES6 tranpilation
                // config for babel-loader is in .babelrc
                use: ["babel-loader"]
            }
        ]
    }
};

module.exports = config;
