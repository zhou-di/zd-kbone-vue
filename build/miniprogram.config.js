/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */
const path = require('path')

module.exports = {
    origin: 'https://test.miniprogram.com',
    entry: '/',
    router: {
        page1: [
            '/#/page1',
        ],
        // index: [
        //     '/(home|index)?',
        //     '/index.html',
        //     '/test/(home|index)',
        // ],
        // me: [
        //     '/test/list/:id',
        //     '/test/detail/:id',
        // ],
    },
    redirect: {
        notFound: 'home',
        accessDenied: 'home',
    },
    generate: {
        autoBuildNpm: 'npm',
        tabBar: {
            color: '#000000',
            selectedColor: '#07c160',
            backgroundColor: '#ffffff',
            list: [{
                pageName: 'index',
                text: '首页',
                iconPath: path.resolve(__dirname, '../src/images/page1.png'),
                selectedIconPath: path.resolve(__dirname, '../src/images/page1-sel.png'),
            }, {
                pageName: 'me',
                text: '个人中心',
                iconPath: path.resolve(__dirname, '../src/images/page2.png'),
                selectedIconPath: path.resolve(__dirname, '../src/images/page2-sel.png'),
            }],
            // 使用自定义 tabBar
            // custom: path.join(__dirname, '../src/custom-tab-bar'),
        },
        // 分包
        subpackages: {
            index: [
                'page1',
                'page2'
            ],
            me: [
                'page3',
                'page4'
            ],
        },
    },
    app: {
        backgroundTextStyle: 'dark',
        navigationBarTextStyle: 'white',
        navigationBarTitleText: 'kbone',
    },
    appExtraConfig: {
        sitemapLocation: 'sitemap.json',
    },
    global: {
        share: true,
        windowScroll: false,
        backgroundColor: '#F7F7F7',
    },
    pages: {},
    optimization: {
        domSubTreeLevel: 10,

        elementMultiplexing: true,
        textMultiplexing: true,
        commentMultiplexing: true,
        domExtendMultiplexing: true,

        styleValueReduce: 5000,
        attrValueReduce: 5000,
    },
    projectConfig: {
        projectname: 'kbone-template-vue',
        appid: 'wxa4ef66f9e1a4046e',
    },
}
