const variables = {
    theme: process.env.THEME,
}

// https://github.com/webpack-contrib/mini-css-extract-plugin
// https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/701

module.exports = {
    plugins: [
        require('postcss-simple-vars')({ variables }),
        require('postcss-conditionals')({}),
        require('postcss-cssnext'),
    ]
}
