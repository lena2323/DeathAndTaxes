const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist' ),
    filename: 'bundle.js'
  },

  module: {
    rules: [
    {
      test: /\.css$/,
      use: ['style-loader',
      { loader: 'css-loader', options: {importLoaders: 1}
        },
        'postcss-loader'
      ]
    },
    {
      test:  /\.js$|jsx/,
      exclude:
        /node_modules/,
      use: {
        loader:
          'babel-loader',
        options: {
          presets: [
            '@babel/preset-react',
            '@babel/preset-env',
          ],
          plugins: [
            '@babel/plugin-transform-runtime',
          ],
        },
        
      },
    },  
    ],
  },
  
};


