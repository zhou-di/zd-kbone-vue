/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */

module.exports = {
    origin: 'https://test.miniprogram.com',
    entry: '/user-center',
    router: {
        'user-center': [
            '/user-center'
        ],
        'login': [
            '/user-center/login'
        ],
        native: [
            '/native'
        ],
        home: [
            '/(home|index)?',
            '/index.html',
            '/test/(home|index)',
        ],
        other: [
            '/test/list/:id',
            '/test/detail/:id',
        ],
    },
    redirect: {
        notFound: 'home',
        accessDenied: 'home',
    },
    generate: {
        autoBuildNpm: 'npm',
        appEntry: 'miniprogram-app',
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
        rem: true,
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
