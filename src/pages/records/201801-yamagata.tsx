const Record = {
    title: '2018 日本東北地方自由行',
    date: '2017/12/30 ~ 1/6',
    location: '山形、立石寺、銀山溫泉、藏王、會津若松、大內宿',
    flight: [
        {
            company: '香草航空 Vanilla Air Inc.',
            airplane: 'JW100',
            takeoff: '臺北市 TPE 12月30日-01:45(GMT+8)',
            land: '東京都 NRT 12月30日-06:05(GMT+9)',
            airport: '桃園機場第一航廈',
            amount: 0,
            luggage: '20公斤'
        },
        {
            company: '香草航空 Vanilla Air Inc.',
            airplane: 'JW103',
            takeoff: '東京都 NRT 1月6日-12:50(GMT+9)',
            land: '臺北市 TPE 1月6日-16:05(GMT+8)',
            airport: '成田機場第三航廈',
            amount: 10680,
            luggage: '20公斤'
        },
        {
            company: '香草航空 Vanilla Air Inc.',
            airplane: 'JW107',
            takeoff: '東京都 NRT 1月6日-22:00(GMT+9)',
            land: '臺北市 TPE 1月7日-00:55(GMT+8)',
            airport: '成田機場第三航廈',
            amount: 8056,
            luggage: '20公斤'
        },
    ],
    lodging: [
        {
            name: '東橫INN 仙台站西口中央',
            address: '980-0021 宮城縣仙台市青葉區1-1-10',
            tel: '022-726-1045',
            google_map: 'http://www.toyoko-inn.com/c_hotel/00058/map.html',
            room: [
                {
                    order_no: '5861012',
                    day: '2',
                    room_type: '禁煙單人房',
                    user: '1'
                },
                {
                    order_no: '5861013',
                    day: '2',
                    room_type: '禁煙經濟雙人房',
                    user: '2'
                }
            ],
            amount: '24,500日元 (含稅 26,460日元)'
        },
        {
            name: '東橫INN 會津若松站前',
            address: '965-0024 福島縣會津若松市白虎町222-1',
            tel: '+81-(0)242-32-1045',
            google_map: 'https://maps.google.co.jp/maps?q=37.50839,139.931987&hl=zh-TW',
            room: [
                {
                    order_no: '5690066',
                    day: '2',
                    room_type: '禁煙單人房',
                    user: '1'
                },
                {
                    order_no: '5690067',
                    day: '2',
                    room_type: '經濟禁煙雙人房',
                    user: '2'
                }
            ],
            amount: '21,875日元 (含稅 23,624日元)'
        },
        {
            name: '山形国際ホテル Yamagata Kokusai Hotel',
            address: '香澄町3-4-5, 山県, 山形, 日本 990-0039',
            tel: '+81 23-633-1313',
            google_map: 'https://goo.gl/maps/c4Kizb2L5mz',
            room: [
                {
                    order_no: '217844104',
                    day: '1',
                    room_type: '3人房',
                    user: '3'
                }
            ],
            amount: '12,443日圓'
        },
        {
            name: '滝と蕎麦の宿　瀧見舘',
            address: '〒999-4333 山形県尾花沢市 銀山新畑522',
            tel: '0237-28-3399',
            google_map: '',
            room: [
                {
                    order_no: '',
                    day: '1',
                    room_type: '部屋1　男性 *3',
                    user: '3'
                }
            ],
            amount: '45,360日圓'
        },
        {
            name: '浅草田原町站前APA酒店',
            address: '111-0035, 東京都, 台東区, 台東区西浅草1-2-3',
            tel: '+81358300611',
            google_map: 'https://goo.gl/maps/SocV2FZr96R2',
            room: [
                {
                    order_no: '1327898314',
                    day: '1',
                    room_type: '',
                    user: '1'
                },
                {
                    order_no: '1327898314',
                    day: '1',
                    room_type: '',
                    user: '2'
                }
            ],
            amount: '13,600日圓'
        },
    ],
    cost: {

    },
    journey: [
        {
            date: '12/30',
            title: '東京',
            log: [
                {
                    time: '',
                    title: '出發',
                    detail: '去程 JW100香草航空 06:05 抵達 成田空港 第3航廈',
                    url: ''
                },
                {
                    time: '',
                    title: '早餐',
                    detail: '便利商店隨便吃，兌換JR東日本周遊券',
                    url: ''
                },
                {
                    time: '',
                    title: '前往東京都 東京駅',
                    detail: '前往成田空港第2航廈 搭乘 JR NEX成田特快 約55分鐘',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 東京駅',
                    detail: '寄放行李 或是 拿去東橫INN寄放',
                    url: ''
                },
                {
                    time: '',
                    title: '文京Civic Center',
                    detail: '丸之內線 到 後樂園站，看富士山跟新宿景觀，天氣差就不去，展望台免費入場',
                    url: ''
                },
                {
                    time: '',
                    title: '增上寺、東京鐵塔',
                    detail: '展望台出來後由 三田線 春日站 到 御城門站',
                    url: ''
                },
                {
                    time: '',
                    title: '午餐',
                    detail: '鳥貴族 新宿東口店',
                    url: 'https://www.google.com.tw/maps/place/%E9%B3%A5%E8%B2%B4%E6%97%8F+%E6%96%B0%E5%AE%BF%E6%9D%B1%E5%8F%A3%E5%BA%97/@35.6868927,139.702004,16.25z/data=!4m8!1m2!2m1!1z5paw5a6_IOmzpeiytOaXjw!3m4!1s0x0:0x55085a379079cc4e!8m2!3d35.6904906!4d139.7027627'
                },
                {
                    time: '',
                    title: '台場 DiverCity Tokyo Plaza',
                    detail: '崎京線 新宿站 到 東京電訊站，(崎京線 新宿) 獨角獸鋼彈',
                    url: ''
                },
                {
                    time: '',
                    title: '汐留 Caretta',
                    detail: '海鷗線 台場站 到 汐留站，(私鐵 海鷗線) 汐留 Caretta Illumination 2017～真実の愛の物語～ 點燈活動',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 東京駅 丸之內南口 KITTE (中央郵政暸望台)',
                    detail: '新橋站 到 東京站',
                    url: ''
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: '東京一番街 拉麵街??',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 東京駅',
                    detail: '取回行李，前往宮城縣仙台市 仙台駅，搭乘東北新幹線 21:36發車 (はやぶさ 37号) 約1小時30分，可能要提早訂票因為日本新年返鄉潮。',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 仙台駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check in & 宿 東橫INN 仙台',
                    detail: '寄放行李',
                    url: ''
                },
            ]
        },
        {
            date: '12/31',
            title: '仙台市、松島、塩竈市、志波彦神社、鹽竈神社',
            log: [
                {
                    time: '',
                    title: '早餐',
                    detail: '東橫INN',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 仙台駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 松島海岸駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '瑞嚴寺',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '五大堂',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '觀瀾亭',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '午餐',
                    detail: '利久牛たん 松島店',
                    url: 'http://www.rikyu-gyutan.co.jp/'
                },
                {
                    time: '',
                    title: '松島遊船',
                    detail: '松島海岸->塩釜港',
                    url: ''
                },
                {
                    time: '',
                    title: '塩釜港',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '志波彦神社',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '鹽竈神社',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: 'すし哲',
                    url: 'https://tabelog.com/tw/miyagi/A0404/A040404/4000002/'
                },
                {
                    time: '',
                    title: '塩釜',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '鹽竈神社',
                    detail: '除夕鐘',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 本塩釜駅',
                    detail: '可能有除夕加班車接駁 & 搭計程車回旅館 價格約6000~8000日圓/1車',
                    url: ''
                },
                {
                    time: '',
                    title: '宿 東橫INN 仙台',
                    detail: '',
                    url: ''
                },
            ]
        },
        {
            date: '1/1',
            title: '五色沼、豬苗代湖',
            log: [
                {
                    time: '',
                    title: '早餐',
                    detail: '東橫INN',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check out 東橫INN',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 仙台駅',
                    detail: '東北新幹線 8:24班次往郡山 約40分鐘',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 郡山駅',
                    detail: 'JR磐越西線 9:38班次 往豬苗代 約40分鐘',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 豬苗代駅',
                    detail: '搭乘10:28班次接駁公車到五色沼入口，須注意時間表 約30分',
                    url: ''
                },
                {
                    time: '',
                    title: '五色沼',
                    detail: '搭乘14:44班次接駁公車回車站，須注意時間表 約30分',
                    url: ''
                },
                {
                    time: '',
                    title: '午餐',
                    detail: '自備乾糧',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 豬苗代駅',
                    detail: '搭乘15:58班次接駁公車到豬苗代湖(長濱)',
                    url: ''
                },
                {
                    time: '',
                    title: '豬苗代湖',
                    detail: '搭乘18:21班次接駁公車回車站，須注意時間表 約10分，走路應該也可以',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 豬苗代駅',
                    detail: '搭乘JR 磐越西線 19:02 班次 往 會津若松 約35分',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 會津若松駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: 'ラーメン二郎 会津若松駅前店',
                    url: 'https://tabelog.com/tw/fukushima/A0705/A070501/7011865/'
                },
                {
                    time: '',
                    title: 'Check in 東橫INN 會津若松',
                    detail: '',
                    url: ''
                },
            ]
        },
        {
            date: '1/2',
            title: '大內宿、會津若松城、會津武家屋敷',
            log: [
                {
                    time: '',
                    title: '早餐',
                    detail: '東橫INN',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 會津若松駅',
                    detail: '搭乘 09:19 班次只見線 37分',
                    url: ''
                },
                {
                    time: '',
                    title: '湯野上溫泉駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '大內宿',
                    detail: '搭乘計程車',
                    url: ''
                },
                {
                    time: '',
                    title: '午餐',
                    detail: '三澤屋',
                    url: 'http://www.misawaya.jp/m_01.php'
                },
                {
                    time: '',
                    title: '湯野上溫泉駅',
                    detail: '搭乘會津鐵道',
                    url: ''
                },
                {
                    time: '',
                    title: '西若松駅',
                    detail: '搭乘會津鐵道',
                    url: ''
                },
                {
                    time: '',
                    title: '會津若松城 鶴之城',
                    detail: '步行或轉搭巴士 路程1.7公里',
                    url: ''
                },
                {
                    time: '',
                    title: '會津武家屋敷',
                    detail: '搭乘巴士',
                    url: ''
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: '元祖 輪箱飯(わっぱめし) 割烹・会津料理 田季野 / TAKINO',
                    url: 'http://www.takino.jp/menu/'
                },
                {
                    time: '',
                    title: 'JR 會津若松駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '宿 東橫INN 會津若松',
                    detail: '',
                    url: ''
                },
            ]
        },
        {
            date: '1/3',
            title: '會津若松只見線巡禮',
            log: [
                {
                    time: '',
                    title: '早餐',
                    detail: '要早起，前一天要買點吃的，或是便利店買',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check out 東橫INN',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 會津若松駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 會津西方駅',
                    detail: '搭乘只見線 約85分',
                    url: ''
                },
                {
                    time: '',
                    title: '只見線第一攝影點',
                    detail: '07:25左右拍完要加速走向第二攝影點，全程4公里步行',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 會津宮下駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '道の駅 尾瀬街道みしま宿(國道休息站)',
                    detail: '可以吃點東西，注意時間',
                    url: ''
                },
                {
                    time: '',
                    title: '只見線第二攝影點 第一鐵橋B、C、D點',
                    detail: '約09:10 會有上下行兩班只見線從鐵橋通過',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 會津宮下駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '午餐',
                    detail: '會津宮下駅附近 双葉食堂',
                    url: 'https://tabelog.com/tw/fukushima/A0706/A070602/7005354/'
                },
                {
                    time: '',
                    title: 'JR 會津若松駅',
                    detail: '只見線回程班次約13:00左右',
                    url: ''
                },
                {
                    time: '',
                    title: '機動行程',
                    detail: '如果前一天會津若松城來不及去，可以補去',
                    url: ''
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: '來夢喜多方ラーメン',
                    url: 'https://tabelog.com/tw/fukushima/A0705/A070501/7006740/'
                },
                {
                    time: '',
                    title: 'JR 山形駅',
                    detail: 'JR磐越西線 至郡山 轉山形新幹線 約3小時',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check in & 宿 山形國際飯店 (Yamagata Kokusai Hotel)',
                    detail: '3人房 agoda預定 2017/12/27前可取消 $3397 TWD',
                    url: ''
                },
            ]
        },
        {
            date: '1/4',
            title: '奧之細道寶珠山立石寺、銀山溫泉',
            log: [
                {
                    time: '',
                    title: '早餐',
                    detail: '山形國際飯店',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check out 山形國際飯店',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 山形駅',
                    detail: '寄放行李，搭乘JR仙山線 到山寺駅 約16分',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 山寺駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '奧之細道寶珠山立石寺',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '立石寺 奧之院',
                    detail: '約10點半開始要下山',
                    url: ''
                },
                {
                    time: '',
                    title: '午餐',
                    detail: 'お休処 対面石 蕎麦屋',
                    url: 'https://tabelog.com/tw/yamagata/A0601/A060101/6002406/'
                },
                {
                    time: '',
                    title: 'JR 山寺駅',
                    detail: '搭乘JR仙山線 回山形駅約16分',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 山形駅',
                    detail: '取回行李，前往山形縣 尾花澤市 JR大石田駅 搭乘山形新幹線 14:44 班次約29分',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 大石田駅',
                    detail: '15:15 抵達，搭乘 15:45 旅館接駁車',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check in 銀山溫泉 瀧見館',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: '瀧見館',
                    url: ''
                },
                {
                    time: '',
                    title: '銀山溫泉街',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '宿 銀山溫泉 瀧見館',
                    detail: '',
                    url: ''
                },
            ]
        },
        {
            date: '1/5',
            title: '藏王樹冰、藏王連峰',
            log: [
                {
                    time: '',
                    title: '早餐',
                    detail: '瀧見館',
                    url: ''
                },
                {
                    time: '',
                    title: '銀山溫泉散策',
                    detail: '白天晃晃',
                    url: ''
                },
                {
                    time: '',
                    title: '搭乘旅館接駁車至JR大石田駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 大石田駅',
                    detail: '山形新幹線つばさ 11:31 發車',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 山形駅',
                    detail: '山形新幹線つばさ 12:06 到站，行李寄存',
                    url: ''
                },
                {
                    time: '',
                    title: '午餐',
                    detail: '山形拉麵 ラーメン＆カレーアッキー',
                    url: 'https://tabelog.com/tw/yamagata/A0601/A060101/6004735/'
                },
                {
                    time: '',
                    title: '山形駅東口巴士站 藏王巴士 山形駅前　→　蔵王温泉',
                    detail: '搭乘山形駅出發的藏王巴士',
                    url: ''
                },
                {
                    time: '',
                    title: '蔵王溫泉、蔵王山麓駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '藏王山、藏王樹冰、藏王山頂',
                    detail: '停留時間約 15:00~17:00(18:30)，樹冰點燈時間17:00~21:00，藏王纜車(末班車 19:50)',
                    url: ''
                },
                {
                    time: '',
                    title: '蔵王溫泉',
                    detail: '搭乘藏王巴士 蔵王温泉　→　山形駅前(17:20班次 或 18:40)',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 山形駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: '山形駅東口交通センター 美食街裡面隨便找一家吃',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 山形駅',
                    detail: '山形新幹線つばさ 11:31 發車',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 上野駅',
                    detail: '山形新幹線つばさ 22:20 到站',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check in & 宿 浅草田原町站前APA酒店',
                    detail: '',
                    url: ''
                },
            ]
        },
        {
            date: '1/6',
            title: '東京',
            log: [
                {
                    time: '',
                    title: '早餐',
                    detail: '浅草田原町站前APA酒店',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check out 浅草田原町站前APA酒店',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '築地市場',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: 'JR 上野駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '淺草寺',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '賦歸',
                    detail: '第一班回程 JW103香草航空 16:05(GMT+8) 抵達 桃園機場第一航廈(第一班回程 10點左右要去上野搭車)',
                    url: ''
                },
                {
                    time: '',
                    title: '午餐',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '明治神宮',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '表參道、竹下通、澀谷',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '前往成田空港',
                    detail: '搭乘JR NEX 成田特快 約55分',
                    url: ''
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: '可能車站找個拉麵或是去機場吃，看時間',
                    url: ''
                },
                {
                    time: '',
                    title: '賦歸',
                    detail: '第二班回程 JW107香草航空 00:55(GMT+8) 抵達 桃園機場第一航廈',
                    url: ''
                },
            ]
        },
    ]
}
export default Record