const injectVariables = require('postcss-inject-css-variables')

const variables = {
    theme: process.env.THEME,
}

module.exports = {
    plugins: [
        // injectVariables(variables),
        // require('postcss-cssnext'),
        require('postcss-simple-vars')({ variables }),
        require('postcss-conditionals')({}),
        require('postcss-cssnext'),
    ]
}