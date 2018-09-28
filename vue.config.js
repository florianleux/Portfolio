module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:80/toysovore/dist/php',
                ws: true,
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}