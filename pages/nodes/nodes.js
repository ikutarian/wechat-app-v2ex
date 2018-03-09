// pages/nodes/nodes.js
Page({

    onNodeClick: function(event) {
        var node_id = event.currentTarget.dataset.hi;
        wx.navigateTo({
            url: '../topics_of_node/topics?node_id=' + node_id
        })
    },

    /**
     * 页面的初始数据
    */
    data: {
        category_nodes: [
             {
              "category": "分享与探索",
              "nodes": [
               {
                "id": 12,
                "name": "qna",
                "title": "问与答"
               },
               {
                "id": 16,
                "name": "share",
                "title": "分享发现"
               },
               {
                "id": 17,
                "name": "create",
                "title": "分享创造"
               },
               {
                "id": 99,
                "name": "in",
                "title": "分享邀请码"
               },
               {
                "id": 519,
                "name": "ideas",
                "title": "奇思妙想"
               },
               {
                "id": 53,
                "name": "autistic",
                "title": "自言自语"
               },
               {
                "id": 59,
                "name": "random",
                "title": "随想"
               },
               {
                "id": 215,
                "name": "design",
                "title": "设计"
               },
               {
                "id": 373,
                "name": "blog",
                "title": "Blog"
               }
              ]
             },
             {
              "category": "V2EX",
              "nodes": [
               {
                "id": 2,
                "name": "v2ex",
                "title": "V2EX"
               },
               {
                "id": 199,
                "name": "dns",
                "title": "DNS"
               },
               {
                "id": 1,
                "name": "babel",
                "title": "Project Babel"
               },
               {
                "id": 96,
                "name": "feedback",
                "title": "反馈"
               },
               {
                "id": 14,
                "name": "gae",
                "title": "Google App Engine"
               },
               {
                "id": 366,
                "name": "guide",
                "title": "使用指南"
               }
              ]
             },
             {
              "category": "iOS",
              "nodes": [
               {
                "id": 13,
                "name": "idev",
                "title": "iDev"
               },
               {
                "id": 46,
                "name": "icode",
                "title": "iCode"
               },
               {
                "id": 131,
                "name": "imarketing",
                "title": "iMarketing"
               },
               {
                "id": 68,
                "name": "iad",
                "title": "iAd"
               },
               {
                "id": 714,
                "name": "itransfer",
                "title": "iTransfer"
               }
              ]
             },
             {
              "category": "Geek",
              "nodes": [
               {
                "id": 300,
                "name": "programmer",
                "title": "程序员"
               },
               {
                "id": 90,
                "name": "python",
                "title": "Python"
               },
               {
                "id": 39,
                "name": "android",
                "title": "Android"
               },
               {
                "id": 108,
                "name": "bb",
                "title": "宽带症候群"
               },
               {
                "id": 11,
                "name": "linux",
                "title": "Linux"
               },
               {
                "id": 62,
                "name": "php",
                "title": "PHP"
               },
               {
                "id": 104,
                "name": "cloud",
                "title": "云计算"
               },
               {
                "id": 52,
                "name": "hardware",
                "title": "硬件"
               },
               {
                "id": 190,
                "name": "outsourcing",
                "title": "外包"
               },
               {
                "id": 436,
                "name": "nodejs",
                "title": "Node.js"
               },
               {
                "id": 63,
                "name": "java",
                "title": "Java"
               },
               {
                "id": 79,
                "name": "server",
                "title": "服务器"
               },
               {
                "id": 403,
                "name": "bitcoin",
                "title": "Bitcoin"
               },
               {
                "id": 61,
                "name": "mysql",
                "title": "MySQL"
               },
               {
                "id": 413,
                "name": "programming",
                "title": "编程"
               },
               {
                "id": 208,
                "name": "linode",
                "title": "Linode"
               },
               {
                "id": 176,
                "name": "car",
                "title": "汽车"
               },
               {
                "id": 301,
                "name": "designer",
                "title": "设计师"
               },
               {
                "id": 37,
                "name": "kindle",
                "title": "Kindle"
               },
               {
                "id": 513,
                "name": "markdown",
                "title": "Markdown"
               },
               {
                "id": 311,
                "name": "mongodb",
                "title": "MongoDB"
               },
               {
                "id": 361,
                "name": "tornado",
                "title": "Tornado"
               },
               {
                "id": 81,
                "name": "ror",
                "title": "Ruby on Rails"
               },
               {
                "id": 340,
                "name": "minecraft",
                "title": "Minecraft"
               },
               {
                "id": 47,
                "name": "redis",
                "title": "Redis"
               },
               {
                "id": 73,
                "name": "typography",
                "title": "字体排印"
               },
               {
                "id": 367,
                "name": "ruby",
                "title": "Ruby"
               },
               {
                "id": 310,
                "name": "business",
                "title": "商业模式"
               },
               {
                "id": 24,
                "name": "math",
                "title": "数学"
               },
               {
                "id": 58,
                "name": "photoshop",
                "title": "Photoshop"
               },
               {
                "id": 371,
                "name": "amazon",
                "title": "Amazon"
               },
               {
                "id": 485,
                "name": "lego",
                "title": "LEGO"
               },
               {
                "id": 294,
                "name": "sony",
                "title": "SONY"
               },
               {
                "id": 883,
                "name": "nlp",
                "title": "自然语言处理"
               },
               {
                "id": 985,
                "name": "serverless",
                "title": "Serverless"
               },
               {
                "id": 1005,
                "name": "csharp",
                "title": "C#"
               }
              ]
             },
             {
              "category": "游戏",
              "nodes": [
               {
                "id": 55,
                "name": "games",
                "title": "游戏"
               },
               {
                "id": 49,
                "name": "steam",
                "title": "Steam"
               },
               {
                "id": 675,
                "name": "ps4",
                "title": "PlayStation 4"
               },
               {
                "id": 454,
                "name": "lol",
                "title": "英雄联盟"
               },
               {
                "id": 172,
                "name": "igame",
                "title": "iGame"
               },
               {
                "id": 324,
                "name": "bf3",
                "title": "Battlefield 3"
               },
               {
                "id": 98,
                "name": "sc2",
                "title": "StarCraft 2"
               },
               {
                "id": 33,
                "name": "ps3",
                "title": "PlayStation 3"
               },
               {
                "id": 378,
                "name": "wow",
                "title": "World of Warcraft"
               },
               {
                "id": 959,
                "name": "switch",
                "title": "Nintendo Switch"
               },
               {
                "id": 511,
                "name": "eve",
                "title": "EVE"
               },
               {
                "id": 34,
                "name": "xbox360",
                "title": "Xbox 360"
               },
               {
                "id": 981,
                "name": "5v5",
                "title": "王者荣耀"
               },
               {
                "id": 686,
                "name": "bf4",
                "title": "Battlefield 4"
               },
               {
                "id": 508,
                "name": "gt",
                "title": "Gran Turismo"
               },
               {
                "id": 36,
                "name": "wii",
                "title": "Wii"
               },
               {
                "id": 748,
                "name": "wiiu",
                "title": "Wii U"
               }
              ]
             },
             {
              "category": "Apple",
              "nodes": [
               {
                "id": 22,
                "name": "macos",
                "title": "macOS"
               },
               {
                "id": 8,
                "name": "iphone",
                "title": "iPhone"
               },
               {
                "id": 10,
                "name": "mbp",
                "title": "MacBook Pro"
               },
               {
                "id": 9,
                "name": "ipad",
                "title": "iPad"
               },
               {
                "id": 84,
                "name": "macbook",
                "title": "MacBook"
               },
               {
                "id": 173,
                "name": "accessory",
                "title": "配件"
               },
               {
                "id": 326,
                "name": "mba",
                "title": "MacBook Air"
               },
               {
                "id": 40,
                "name": "imac",
                "title": "iMac"
               },
               {
                "id": 83,
                "name": "macmini",
                "title": "Mac mini"
               },
               {
                "id": 168,
                "name": "ipod",
                "title": "iPod"
               },
               {
                "id": 74,
                "name": "macpro",
                "title": "Mac Pro"
               },
               {
                "id": 193,
                "name": "mobileme",
                "title": "MobileMe"
               },
               {
                "id": 71,
                "name": "iwork",
                "title": "iWork"
               },
               {
                "id": 70,
                "name": "ilife",
                "title": "iLife"
               },
               {
                "id": 354,
                "name": "garageband",
                "title": "GarageBand"
               }
              ]
             },
             {
              "category": "生活",
              "nodes": [
               {
                "id": 69,
                "name": "all4all",
                "title": "二手交易"
               },
               {
                "id": 43,
                "name": "jobs",
                "title": "酷工作"
               },
               {
                "id": 286,
                "name": "afterdark",
                "title": "天黑以后"
               },
               {
                "id": 551,
                "name": "free",
                "title": "免费赠送"
               },
               {
                "id": 4,
                "name": "music",
                "title": "音乐"
               },
               {
                "id": 5,
                "name": "movie",
                "title": "电影"
               },
               {
                "id": 285,
                "name": "exchange",
                "title": "物物交换"
               },
               {
                "id": 48,
                "name": "tv",
                "title": "剧集"
               },
               {
                "id": 205,
                "name": "creditcard",
                "title": "信用卡"
               },
               {
                "id": 171,
                "name": "invest",
                "title": "投资"
               },
               {
                "id": 293,
                "name": "tuan",
                "title": "团购"
               },
               {
                "id": 67,
                "name": "taste",
                "title": "美酒与美食"
               },
               {
                "id": 111,
                "name": "reading",
                "title": "阅读"
               },
               {
                "id": 181,
                "name": "travel",
                "title": "旅行"
               },
               {
                "id": 27,
                "name": "photograph",
                "title": "摄影"
               },
               {
                "id": 534,
                "name": "soccer",
                "title": "绿茵场"
               },
               {
                "id": 106,
                "name": "baby",
                "title": "Baby"
               },
               {
                "id": 509,
                "name": "pet",
                "title": "宠物"
               },
               {
                "id": 553,
                "name": "coffee",
                "title": "咖啡"
               },
               {
                "id": 319,
                "name": "lohas",
                "title": "乐活"
               },
               {
                "id": 522,
                "name": "bike",
                "title": "骑行"
               },
               {
                "id": 308,
                "name": "love",
                "title": "非诚勿扰"
               },
               {
                "id": 306,
                "name": "diary",
                "title": "日记"
               },
               {
                "id": 95,
                "name": "plant",
                "title": "植物"
               },
               {
                "id": 524,
                "name": "mushroom",
                "title": "蘑菇"
               },
               {
                "id": 202,
                "name": "mileage",
                "title": "行程控"
               }
              ]
             },
             {
              "category": "Internet",
              "nodes": [
               {
                "id": 65,
                "name": "google",
                "title": "Google"
               },
               {
                "id": 15,
                "name": "twitter",
                "title": "Twitter"
               },
               {
                "id": 823,
                "name": "coding",
                "title": "Coding"
               },
               {
                "id": 291,
                "name": "facebook",
                "title": "Facebook"
               },
               {
                "id": 116,
                "name": "wikipedia",
                "title": "Wikipedia"
               },
               {
                "id": 406,
                "name": "reddit",
                "title": "reddit"
               }
              ]
             },
             {
              "category": "城市",
              "nodes": [
               {
                "id": 19,
                "name": "beijing",
                "title": "北京"
               },
               {
                "id": 18,
                "name": "shanghai",
                "title": "上海"
               },
               {
                "id": 21,
                "name": "shenzhen",
                "title": "深圳"
               },
               {
                "id": 26,
                "name": "hangzhou",
                "title": "杭州"
               },
               {
                "id": 30,
                "name": "chengdu",
                "title": "成都"
               },
               {
                "id": 20,
                "name": "guangzhou",
                "title": "广州"
               },
               {
                "id": 80,
                "name": "wuhan",
                "title": "武汉"
               },
               {
                "id": 41,
                "name": "kunming",
                "title": "昆明"
               },
               {
                "id": 44,
                "name": "tianjin",
                "title": "天津"
               },
               {
                "id": 50,
                "name": "nyc",
                "title": "New York"
               },
               {
                "id": 620,
                "name": "sanfrancisco",
                "title": "San Francisco"
               },
               {
                "id": 212,
                "name": "qingdao",
                "title": "青岛"
               },
               {
                "id": 539,
                "name": "la",
                "title": "Los Angeles"
               },
               {
                "id": 762,
                "name": "boston",
                "title": "Boston"
               }
              ]
             },
             {
              "category": "品牌",
              "nodes": [
               {
                "id": 75,
                "name": "uniqlo",
                "title": "UNIQLO"
               },
               {
                "id": 250,
                "name": "lamy",
                "title": "Lamy"
               },
               {
                "id": 289,
                "name": "ikea",
                "title": "宜家"
               },
               {
                "id": 88,
                "name": "muji",
                "title": "无印良品"
               },
               {
                "id": 305,
                "name": "gap",
                "title": "Gap"
               },
               {
                "id": 141,
                "name": "nike",
                "title": "Nike"
               },
               {
                "id": 251,
                "name": "moleskine",
                "title": "Moleskine"
               },
               {
                "id": 142,
                "name": "adidas",
                "title": "Adidas"
               },
               {
                "id": 77,
                "name": "gstar",
                "title": "G-Star"
               }
              ]
             }
            ]
    }
})