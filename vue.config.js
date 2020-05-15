const path = require('path');
//拼接路径
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@components', resolve('src/components'))
            .set('@assets', resolve('src/assets'))
            .set('@views', resolve('src/views'))
            .set('@request', resolve('src/request'))
            .set('@common', resolve('src/components/common'))
            .set('@content', resolve('src/components/content'))
            .set('@utils', resolve('src/utils'))
    },
}
