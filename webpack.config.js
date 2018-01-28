const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJs = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require('webpack-plugin-manifest');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const isDev = process.env.NODE_ENV === "dev";

let cssLoad = [
  { loader: "css-loader", options: { importLoaders: 1, minimize: !isDev }}
];

if (!isDev) {
  cssLoad.push({
    loader: "postcss-loader",
    options: {
      plugins: (loader) => [
        require("autoprefixer")({
          browsers: ["last 2 versions", "ie > 9"]
        })
      ]
    }
  });
}

let config = {
  entry: {
   app: ["./src/css/index.sass", "./src/index.js"],
  },
  watch: isDev,
  output: {
    path: path.resolve("./public/assets"),
    filename: isDev ? "js/bundle.js" : "js/bundle.[hash:4].js"
  },
  devtool: isDev ? "cheap-module-eval-source-map" : 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
      {
        test: /\.pug$/,
        use: "pug-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: cssLoad
        })
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [...cssLoad, 'sass-loader']
        })
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|jpg|svg|gif|wav)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000,
              name: '/img/[name].[ext]'
            }
          },
          {
            loader: 'img-loader',
            options: {
              enabled: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ferring',
      filetype: 'pug',
      template: './src/templates/index.pug',
      filename: './index.html'
    }),
    new ExtractTextPlugin({
      filename: isDev ? 'css/index.css' : 'css/index.[contenthash:4].css',
      // filename: 'css/ptaStyle.[contenthash:4].css',
      // filename: 'css/ptaStyle.css',
      disable: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['public/assets'] }
    })
  ]
};
if (!isDev) {
  config.plugins.push(
    new UglifyJs({
      sourceMap: true
    })
  );
  config.plugins.push(new ManifestPlugin()),
  config.plugins.push(new CleanWebpackPlugin(['./public/assets'], {
    root: path.resolve('./'),
    verbose: true,
    dry: false
  }));

}

module.exports = config;
