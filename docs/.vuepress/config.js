
module.exports = {
    home : true,
    title : "컨텐츠쿠폰 기술블로그",
    description : 'dev study blog',
    base : '/devstudy/',
    themeConfig: {
        repo: 'swchoi0329/devstudy',
        editLinks: true,
        docsDir: 'docs',
        lastUpdated: 'Last Updated',
        search: true,
        sidebarDepth: 3,
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: '최승원',
                items: [
                    {
                        text: 'JAVASCRIPT',
                        link: '/swchoi/javascript/'
                    },
                    {
                        text: 'JAVA',
                        link: '/swchoi/java/'
                    }
                ]
            }
        ],
        sidebar: {
            '/swchoi/javascript/': [
                {
                    'title': 'DesignPattern',
                    'children': [
                        '/swchoi/javascript/designPattern/',
                        '/swchoi/javascript/designPattern/module',
                        '/swchoi/javascript/designPattern/singleton',
                        '/swchoi/javascript/designPattern/observer'
                    ]
                }
            ],
            '/swchoi/java/': [
                {
                    'title': 'DesignPattern',
                    'children': [
                        '/swchoi/java/designPattern/',
                        '/swchoi/java/designPattern/singleton',
                        '/swchoi/java/designPattern/strategy'
                    ]
                }
            ]
        }
    },
}