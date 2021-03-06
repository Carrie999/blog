// module.exports = {
//     title: '个人主页', 
//     description: '姜帅杰的博客',
//     head: [
//         ['link', { rel: 'icon', href: '/img/logo.ico' }],
//         ['link', { rel: 'manifest', href: '/manifest.json' }],
//     ]
// }

// module.exports = {
// 	  title: '网站标题',
// 	  description: '网站描述',
// 	  // 注入到当前页面的 HTML <head> 中的标签
// 	  head: [
// 	    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
// 	  ],
// 	  base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
// 	  markdown: {
// 	    lineNumbers: true // 代码块显示行号
// 	  },
// 	  themeConfig: {
// 	    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
// 	    lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
// 	  }
// }

module.exports = {
	   title: '个人主页', 
	   description: '一个互联网全才妹子，会设计，会前端，会后端，还会视频动效，好像并没有什么卵用。。。。。。。',
	   // head: [
	   //  	['link', { rel: 'icon', href: '/img/logo.ico' }],
	   //      ['link', { rel: 'manifest', href: '/manifest.json' }],
	   //  ],
       themeConfig: {
        search: false,
        // searchMaxSuggestions: 10,
        nav: [
            { text: '主页', link: '/' },
            { text: 'vue源码解读', link: '/home/' },
            { text: 'JS基础', link: '/base/' }, 
            { text: '面试题', link: '/interview/' },
            // { text: '面试题', link: '/interview/' },

          
	        { text: '博文',
	          items: [
	            { text: '随想', link: '/essay/' },
	            { text: '设计', link: 'https://saintgirl.zcool.com.cn' },
	            // { text: '日语', link: '/Japanese/' },
	            // { text: '演员', link: '/actor/' },
	          ] 
	        },
	        { text: 'Github', link: 'https://github.com/Carrie999' }
        ],
        sidebar: {
            '/home/': [{
			        title: 'Vue源码解析',
			        collapsable: false,
			        children: [
		          		'','/home/vue2','/home/vue3'
		          	]
		          },
		          {
			        title: 'Vuex源码解析',
			        collapsable: false,
			        children: [
		          		'/home/vuex'
		          	]
		          }
		    ],
		    '/base/': [{
			    title: 'JS基础',
			    collapsable: false,
			    children: [
		           '','/base/two','/base/three','/base/four','/base/five'
		        ]
		    }],
		    '/interview/': [{
			    title: '面试题',
			    collapsable: false,
			    children: [
		           '','/interview/two','/interview/three'
		        ]
		    }],
		    '/essay/': [{
			    title: '随想',
			    collapsable: false,
			    children: [
		           '',
		        ]
		    }]
        },
        sidebarDepth: 3,
        lastUpdated: 'Last Updated', 
    }
}


