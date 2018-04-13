const variables = {
    theme: process.env.THEME,
}

module.exports = {
    plugins: [
        require('postcss-inject-css-variables')(variables),
        require('postcss-cssnext'),
        require('postcss-simple-vars'),
        require('postcss-conditionals')({}),
    ]
}