const path = require('path')

// variable used for css options below
const postCSSPlugins = [
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
]

module.exports = { // exports this object to webpack with below properties listed
  entry: './app/assets/scripts/App.js', // grab this file
  output: { // bundle it and rename bundled.js and stick in the app folder
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  devServer: { //property from webpack-dev-server package
    before: function(app, server) { // watches for any changes in an html file
      server._watch('./app/**/*.html')
    },
    contentBase: path.join(__dirname, 'app'), //folder being served up
    hot: true, //hot module memory replacement something something. Is served up from RAM memory and no the file disk so no need for bundle. js at this point
    port: 3000
  },
  mode: 'development', //???
  watch: true, // watch js file above and if changed rebundle. keep in mind other js file are being imported . DELETE WHEN USING devServer
  module: { //allow all the postcss packages to run with their various configurations. Also bundles CSS files. Lesson 16
    rules: [
      {
        test: /\.css$/i, //if any file ends with .css use below packages. These allow css to actually be used
        use: ['style-loader','css-loader?url=false', {loader: "postcss-loader", options: {postcssOptions: {plugins: postCSSPlugins}}}]
      }
    ]
  }
}