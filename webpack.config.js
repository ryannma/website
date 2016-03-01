module.exports = {
  entry: {
    javascript: "./src/app.js",
    html: "./src/index.html"
  },

  output: {
    filename: 'bundle.js',
    path: __dirname+"/dist"
  },

  module: {
    loaders: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loaders: ['react-hot',
                  'babel-loader?presets[]=es2015&presets[]=react']
      },
      { test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  }
}