const path = require('path');

module.exports = {
 "mode": "none",
 "entry": "./src/index.js",
 "output": {
   "path": __dirname + '/lib',
   "filename": "bundle.js"
 },

devServer: {
   contentBase: path.join(__dirname, 'lib')
 },

"module": {
    "rules": [
        {
            "test": /\.js$/,
            "exclude": /node_modules/,
            "use": {
              "loader": "babel-loader",
              "options": {
                "presets": [
                  "@babel/preset-env",
                ]
              }
            }
          },
    ]

}

}