module.exports={
    runtimeCompiler: true,
    publicPath: '/dist',
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
            }
        }
    },
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:3009',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':'/api'
                }
            }
        }
    }
}