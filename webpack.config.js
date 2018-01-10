const path = require('path');

module.exports = {
    entry: './javascript/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets/js'),
        filename: 'gabui.js'
    }
};
