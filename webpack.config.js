const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: ["./src/index.tsx"],
    output: {
        filename: "bundle.js",
        publicPath: "/",
        path: __dirname + "/dist"
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: "style-loader"
                  },
                  {
                    loader: "css-loader"
                  },
                  {
                    loader: "sass-loader"
                  }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: "babel-loader"
                  },
                  {
                    loader: "react-svg-loader",
                    options: {
                      tsx: true
                    }
                  }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          inject: "body"
        }),
        
    ]
};