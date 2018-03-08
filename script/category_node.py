import json

def save(category_titles):
    with open('all_nodes.txt', 'r', encoding = 'utf-8') as f:
        json_str = f.read()
        f.close()
    all_nodes = json.loads(json_str)
    
    result = []
    for category, titles in category_titles.items():
        nodes = []
        for title in titles:            
            for node in all_nodes:
                if node['title'] == title:
                    node_info = {
                        'id': node['id'],
                        'name': node['name'],        
                        'title': title
                    }
                    nodes.append(node_info)
        result.append({'category': category, 'nodes': nodes})
    result_str = json.dumps(result, ensure_ascii = False, indent = 1)
    with open('result.txt', 'w') as f:
        f.write(result_str)
        f.close()
            

category_titles = {'分享与探索': ['问与答', '分享发现', '分享创造', '分享邀请码', '奇思妙想', '自言自语', '随想', '设计', 'Blog'],
'V2EX': ['V2EX', 'DNS', 'Project Babel', '反馈', 'Google App Engine', '使用指南'],
'iOS': ['iDev', 'iCode', 'iMarketing', 'iAd', 'iTransfer'],
'Geek': ['程序员', 'Python', 'Android', '宽带症候群', 'Linux', 'PHP', '云计算', '硬件', '外包', 'Node.js', 'Java', '服务器', 'Bitcoin', 'MySQL', '编程', 'Linode', '汽车', '设计师', 'Kindle', 'Markdown', 'MongoDB', 'Tornado', 'Ruby on Rails', 'Minecraft', 'Redis', '字体排印', 'Ruby', '商业模式', '数学', 'Photoshop', 'Amazon', 'LEGO', 'SONY', '自然语言处理', 'Serverless', 'C#'],
'游戏': ['游戏', 'Steam', 'PlayStation 4', '英雄联盟', 'iGame', 'Battlefield 3', 'StarCraft 2', 'PlayStation 3', 'World of Warcraft', 'Nintendo Switch', 'EVE', 'Xbox 360', '王者荣耀', 'Battlefield 4', 'Gran Turismo', 'Wii', 'Wii U'],
'Apple': ['macOS', 'iPhone', 'MacBook Pro', 'iPad', 'MacBook', '配件', 'MacBook Air', 'iMac', 'Mac mini', 'iPod', 'Mac Pro', 'MobileMe', 'iWork', 'iLife', 'GarageBand'],
'生活': ['二手交易', '酷工作', '天黑以后', '免费赠送', '音乐', '电影', '物物交换', '剧集', '信用卡', '投资', '团购', '美酒与美食', '阅读', '旅行', '摄影', '绿茵场', 'Baby', '宠物', '咖啡', '乐活', '骑行', '非诚勿扰', '日记', '植物', '蘑菇', '行程控'],
'Internet': ['Google', 'Twitter', 'Coding', 'Facebook', 'Wikipedia', 'reddit'],
'城市': ['北京', '上海', '深圳', '杭州', '成都', '广州', '武汉', '昆明', '天津', 'New York', 'San Francisco', '青岛', 'Los Angeles', 'Boston'],
'品牌': ['UNIQLO', 'Lamy', '宜家', '无印良品', 'Gap', 'Nike', 'Moleskine', 'Adidas', 'G-Star']}

if __name__ == '__main__':
    save(category_titles)