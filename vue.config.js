module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: ' @import "@/assets/variable.sass"; '
            }
        }
    },
    configureWebpack: {
        devtool: 'source-map'
    }
}