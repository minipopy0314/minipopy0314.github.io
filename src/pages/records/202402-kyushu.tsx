const Record = {
    title: '2024 日本九州地方自由行',
    date: '2024/02/13 ~ 02/25',
    location: '福岡、大分、鹿兒島、宮崎、熊本',
    airplane: [
        {
            company: '中華航空 China Airlines Inc.',
            roundtrip: true,
            outbound: 'China Airlines 航班 CI116 臺北市 TPE 02月13日-16:30(GMT+8) --> 福岡 FUK 02月13日-19:35(GMT+9) (臺北)桃園機場第2航廈',
            return: 'China Airlines 航班 CI117 福岡 FUK 02月25日-20:35(GMT+9) --> 臺北市 TPE 02月25日-22:20(GMT+8) (日本)福岡機場第1航廈',
            outbound_amount: 37665,
            return_amount: 0,
            luggage: '單程23公斤(*3)'
        }
    ],
    lodging: [
        {
            name: 'Hotel La Foresta',
            address: '博多区博多駅東1-1-29 福岡 日本',
            tel: '',
            google_map: '',
            room: [
                {
                    order_no: '1023745216',
                    day: '1',
                    room_type: '三人雙床房',
                    user: '3'
                }
            ],
            amount: '10,086 日圓'
        },
        {
            name: 'Super Hotel Beppu Ekimae',
            address: 'Beppu-shi, Oita Beppu 13-8, Ekimaecho 別府 日本',
            tel: '',
            google_map: '',
            room: [
                {
                    order_no: '1023740752',
                    day: '2',
                    room_type: '三人雙床房＋沙發床',
                    user: '3'
                }
            ],
            amount: '26,167 日圓'
        },
        {
            name: '黑川溫泉 山河',
            address: '阿蘇郡南小国町大字満願寺 6961-1 南小国 日本',
            tel: '',
            google_map: 'https://www.sanga-ryokan.com/',
            room: [
                {
                    order_no: '1030387648',
                    day: '1',
                    room_type: '柃木日式客房 8張榻榻米/私人室內溫泉/14.6平方公尺',
                    user: '3'
                }
            ],
            amount: '59,497 日圓'
        },
        {
            name: 'FAV HOTEL KUMAMOTO',
            address: '860-0026 Kumamoto, Chuo Ward, Kajiyamachi, 9-1 熊本 日本',
            tel: '',
            google_map: '',
            room: [
                {
                    order_no: '1030367776',
                    day: '4',
                    room_type: '三人雙床房',
                    user: '3'
                }
            ],
            amount: '63,039 日圓'
        },
        {
            name: 'Saga International GuestHouse Hagakure',
            address: '2-4-12, Kouno-higashi 佐賀 日本',
            tel: '',
            google_map: '',
            room: [
                {
                    order_no: '1024046144',
                    day: '2',
                    room_type: '日式和室',
                    user: '3'
                }
            ],
            amount: '21,943 日圓'
        },
        {
            name: 'Guest House Yasuragi Hakata Station Side',
            address: '4-7-21 Hakataekimae, Hakata-ku 福岡 日本',
            tel: '',
            google_map: '',
            room: [
                {
                    order_no: '1024579144',
                    day: '2',
                    room_type: '三人雙床房',
                    user: '3'
                }
            ],
            amount: '18,491 日圓'
        },
    ],
    cost: {

    },
    journey: [
        {
            date: '2/13',
            title: '福岡',
            log: [
                {
                    time: '19:35',
                    title: '出發',
                    detail: '去程 China Airlines CI116 19:35 抵達 福岡機場',
                    url: ''
                },
                {
                    time:'20:00',
                    title: '福岡機場',
                    detail: '搭車至博多駅',
                    url: ''
                },
                {
                    time:'20:30',
                    title: 'Check in Hotel La Foresta',
                    detail: '',
                    url: ''
                },
                {
                    time:'21:00',
                    title: '晚餐',
                    detail: '隨便吃',
                    url: ''
                },
                {
                    time:'22:00',
                    title: '宿 Hotel La Foresta',
                    detail: '',
                    url: ''
                },
            ]
        },
        {
            date: '2/14',
            title: '觀光列車由布院之森、由布院溫泉',
            pay: [
                "由布院之森單程票"
            ],
            log: [
                {
                    time: '7:00',
                    title: '早餐',
                    detail: '隨意解決',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check out Hotel La Foresta',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '博多駅',
                    detail: '搭乘由布院之森觀光列車',
                    url: ''
                },
                {
                    time: '',
                    title: '由布院駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '午餐',
                    detail: 'Siesta Organic Cafe',
                    url: ''
                },
                {
                    time: '',
                    title: '由布院散策',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '金鱗湖',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '別府駅',
                    detail: '由布院搭乘路線巴士',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check in Super Hotel Beppu Ekimae',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '別府塔、湯煙展望台',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: '天婦羅 とよ常',
                    url: ''
                },
                {
                    time: '',
                    title: '宿 Super Hotel Beppu Ekimae',
                    detail: '',
                    url: ''
                }
            ]
        },
        {
            date: '2/15',
            title: '別府地獄溫泉',
            pay: [
                "別府龜之井巴士一日券"
            ],
            log: [
                {
                    time: '8:00',
                    title: '早餐',
                    detail: '旅館提供',
                    url: ''
                },
                {
                    time: '9:00',
                    title: '6個地獄溫泉',
                    detail: '搭龜之井巴士5、7號車到海地獄前站下車',
                    url: 'https://mimihan.tw/beppu-jigoku/'
                },
                {
                    time: '12:00',
                    title: '2個地獄溫泉',
                    detail: '步行至鐵輪巴士總站再換搭16號車抵達血池地獄前站',
                    url: ''
                },
                {
                    time: '14:00',
                    title: '午餐',
                    detail: 'ェンマ緣',
                    url: ''
                },
                {
                    time: '16:00',
                    title: '別府空中纜車',
                    detail: '',
                    url: ''
                },
                {
                    time: '18:00',
                    title: '晚餐',
                    detail: 'ろばた焼き仁',
                    url: ''
                },
                {
                    time: '',
                    title: '宿 Super Hotel Beppu Ekimae',
                    detail: '',
                    url: ''
                }
            ]
        },
        {
            date: '2/16',
            title: '黑川溫泉',
            pay: [
                "SUNQ Pass 北九州3日券"
            ],
            log: [
                {
                    time: '7:00',
                    title: '早餐',
                    detail: '旅館提供',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check out Super Hotel Beppu Ekimae',
                    detail: '',
                    url: ''
                },
                {
                    time: '8:00',
                    title: '別府駅',
                    detail: '巴士站搭乘九州橫斷巴士(需預約)至黑川溫泉巴士站',
                    url: ''
                },
                {
                    time: '10:00',
                    title: '黑川溫泉巴士站',
                    detail: '由宿泊業者接駁至旅客中心並寄運行李',
                    url: ''
                },
                {
                    time: '11:00',
                    title: '黑川溫泉散策',
                    detail: '',
                    url: ''
                },
                {
                    time: '12:00',
                    title: '午餐',
                    detail: '｢山のいぶき｣自然薯料理やまたけ',
                    url: ''
                },
                {
                    time: '15:00',
                    title: 'Check in 黑川溫泉 山河',
                    detail: '由宿泊業者於旅客中心接駁至旅館',
                    url: ''
                },
                {
                    time: '18:00',
                    title: '晚餐',
                    detail: '旅館提供',
                    url: ''
                },
                {
                    time: '20:00',
                    title: '宿 黑川溫泉 山河',
                    detail: '',
                    url: ''
                }
            ]
        },
        {
            date: '2/17',
            title: '熊本',
            pay: [
                "SUNQ Pass 北九州3日券"
            ],
            log: [
                {
                    time: '8:00',
                    title: '早餐',
                    detail: '旅館提供',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check out 黑川溫泉 山河',
                    detail: '',
                    url: ''
                },
                {
                    time: '10:00',
                    title: '黑川溫泉巴士站',
                    detail: '由宿泊業者接駁至黑川溫泉巴士站',
                    url: ''
                },
                {
                    time: '11:00',
                    title: '熊本駅',
                    detail: '搭乘九州橫斷巴士至熊本',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check in FAV HOTEL KUMAMOTO',
                    detail: '',
                    url: ''
                },
                {
                    time: '13:00',
                    title: '熊本散策',
                    detail: '熊本城周邊',
                    url: 'https://boo2k.com/archives/114945'
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: '自行解決',
                    url: ''
                },
                {
                    time: '',
                    title: '宿 FAV HOTEL KUMAMOTO',
                    detail: '',
                    url: ''
                }
            ]
        },
        {
            date: '2/18',
            title: '阿蘇地區、阿蘇火山',
            pay: [
                "SUNQ Pass 北九州3日券",
                "JR Pass(全九州版) 7日券"
            ],
            log: [
                {
                    time: '',
                    title: '早餐',
                    detail: '自行解決',
                    url: ''
                },
                {
                    time: '',
                    title: '熊本駅',
                    detail: '搭乘阿蘇男孩至阿蘇',
                    url: 'https://carolblogtw.com/aso-san/'
                },
                {
                    time: '',
                    title: '阿蘇神社',
                    detail: '搭乘巴士、回程可能要搭計程車',
                    url: ''
                },
                {
                    time: '',
                    title: '阿蘇山上廣場、中岳火山口',
                    detail: '搭乘巴士',
                    url: 'https://www.aso-volcano.jp/'
                },
                {
                    time: '',
                    title: '草千里、阿蘇火山博物館',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '午餐',
                    detail: '草千里用餐',
                    url: ''
                },
                {
                    time: '',
                    title: '阿蘇駅',
                    detail: '回熊本駅',
                    url: ''
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: '自行解決',
                    url: ''
                },
                {
                    time: '',
                    title: '宿 FAV HOTEL KUMAMOTO',
                    detail: '',
                    url: ''
                }
            ]
        },
        {
            date: '2/19',
            title: '鹿兒島(霧島伊佐地區)',
            pay: [
                "JR Pass(全九州版) 7日券",
                "Ticket Cute 2日券"
            ],
            log: [
                {
                    time: '',
                    title: '早餐',
                    detail: '自行解決',
                    url: ''
                },
                {
                    time: '',
                    title: '熊本駅',
                    detail: '由熊本搭乘新幹線至鹿兒島中央駅',
                    url: ''
                },
                {
                    time: '',
                    title: '鹿兒島中央駅',
                    detail: '搭乘特急霧島列車前往霧島神宮駅',
                    url: ''
                },
                {
                    time: '',
                    title: '霧島神宮駅',
                    detail: '霧島神宮站搭乘巴士至霧島神宮前下車',
                    url: ''
                },
                {
                    time: '',
                    title: '霧島神宮',
                    detail: '注意巴士時間',
                    url: 'https://slowandtravel.com/?p=7345'
                },
                {
                    time: '',
                    title: '午餐',
                    detail: '自行解決',
                    url: ''
                },
                {
                    time: '',
                    title: '霧島神宮駅',
                    detail: '霧島神宮站搭乘至準人站',
                    url: ''
                },
                {
                    time: '',
                    title: '鹿兒島神宮',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: '自行解決',
                    url: ''
                },
                {
                    time: '',
                    title: '宿 FAV HOTEL KUMAMOTO',
                    detail: '',
                    url: ''
                }
            ]
        },
        {
            date: '2/20',
            title: '鹿兒島(櫻島火山地區)',
            pay: [
                "JR Pass(全九州版) 7日券",
                "Ticket Cute 2日券"
            ],
            log: [
                {
                    time: '',
                    title: '早餐',
                    detail: '自行解決',
                    url: ''
                },
                {
                    time: '',
                    title: '熊本駅',
                    detail: '由熊本駅搭乘新幹線至鹿兒島中央駅',
                    url: ''
                },
                {
                    time: '',
                    title: '鹿兒島中央駅',
                    detail: '搭公車到「水族館口站」步行至櫻島渡輪乘船處搭渡輪',
                    url: ''
                },
                {
                    time: '',
                    title: '櫻島港',
                    detail: '搭乘櫻島輪渡至櫻島',
                    url: 'https://www.city.kagoshima.lg.jp/sakurajima-ferry/chinese-t/guides.html'
                },
                {
                    time: '',
                    title: '觀光周遊巴士(櫻島 Island View)一周行程',
                    detail: '',
                    url: 'https://www.bring-you.info/zh-tw/sakura-jima-travel-guide'
                },
                {
                    time: '',
                    title: '午餐',
                    detail: '自行解決',
                    url: ''
                },
                {
                    time: '',
                    title: '鹿兒島散策',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: '自行解決',
                    url: ''
                },
                {
                    time: '',
                    title: '宿 FAV HOTEL KUMAMOTO',
                    detail: '',
                    url: ''
                }
            ]
        },
        {
            date: '2/21',
            title: '長崎',
            pay: [
                "JR Pass(全九州版) 7日券",
                "長崎路面電車1日券",
                "稻佐山纜車來回券"
            ],
            log: [
                {
                    time: '',
                    title: '早餐',
                    detail: '自行解決',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check out FAV HOTEL KUMAMOTO',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '熊本駅',
                    detail: '前往佐賀駅並寄放行李',
                    url: ''
                },
                {
                    time: '',
                    title: '佐賀駅',
                    detail: '前往長崎駅',
                    url: ''
                },
                {
                    time: '',
                    title: '長崎駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '諏訪神社、眼鏡橋',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '午餐',
                    detail: 'Nobister',
                    url: ''
                },
                {
                    time: '',
                    title: '原爆資料館、和平公園',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '大埔天主堂、哥拉巴園',
                    detail: '約一小時左右',
                    url: ''
                },
                {
                    time: '',
                    title: '出島、長崎港',
                    detail: '傍晚前往即可',
                    url: ''
                },
                {
                    time: '',
                    title: '稻佐山纜車',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: '自行解決',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check in Saga International GuestHouse Hagakure',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '宿 Saga International GuestHouse Hagakure',
                    detail: '',
                    url: ''
                }
            ]
        },
        {
            date: '2/22',
            title: '長崎島原半島、雲仙地獄溫泉',
            pay: [
                "JR Pass(全九州版) 7日券"
            ],
            log: [
                {
                    time: '',
                    title: '早餐',
                    detail: '自行解決',
                    url: ''
                },
                {
                    time: '',
                    title: '佐賀駅',
                    detail: '前往佐世保駅',
                    url: ''
                },
                {
                    time: '',
                    title: '諫早駅',
                    detail: '轉乘巴士至雲仙地獄',
                    url: ''
                },
                {
                    time: '',
                    title: '雲仙溫泉鄉大街、雲仙溫泉神社',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '午餐',
                    detail: '自行解決',
                    url: ''
                },
                {
                    time: '',
                    title: '雲仙地獄、雲仙地獄茶屋',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: '自行解決',
                    url: ''
                },
                {
                    time: '',
                    title: '宿 Saga International GuestHouse Hagakure',
                    detail: '',
                    url: ''
                }
            ]
        },
        {
            date: '2/23',
            title: '佐世保軍港',
            pay: [
                "JR Pass(全九州版) 7日券",
                "西肥巴士1日券"
            ],
            log: [
                {
                    time: '',
                    title: '早餐',
                    detail: '自行解決',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check out Saga International GuestHouse Hagakure',
                    detail: '寄放行李?',
                    url: ''
                },
                {
                    time: '',
                    title: '佐賀駅',
                    detail: '前往佐世保駅',
                    url: ''
                },
                {
                    time: '',
                    title: '佐世保駅',
                    detail: '佐世保搭公車往九十九島方向終點站下車',
                    url: ''
                },
                {
                    time: '',
                    title: '九十九島珍珠海洋遊覽區',
                    detail: '搭乘九十九島遊覧船',
                    url: ''
                },
                {
                    time: '',
                    title: '午餐',
                    detail: 'あごだしラーメン',
                    url: ''
                },
                {
                    time: '',
                    title: '展海峰',
                    detail: '回佐世保車站搭公車往展海峰',
                    url: ''
                },
                {
                    time: '',
                    title: '佐世保商店街',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: 'LOG KIT 佐世保漢堡',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check in Guest House Yasuragi Hakata Station Side',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '宿 Guest House Yasuragi Hakata Station Side',
                    detail: '',
                    url: ''
                }
            ]
        },
        {
            date: '2/24',
            title: '高千穗峽、宮崎',
            pay: [
                "JR Pass(全九州版) 7日券",
                "高千穗峽、宮崎(一日遊) 套裝行程"
            ],
            log: [
                {
                    time: '7:00',
                    title: '早餐',
                    detail: '隨意解決',
                    url: ''
                },
                {
                    time: '',
                    title: '高千穗峽、宮崎',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '晚餐',
                    detail: 'Evah Dining Macrobiotic Cafe',
                    url: ''
                },
                {
                    time: '',
                    title: '宿 Guest House Yasuragi Hakata Station Side',
                    detail: '',
                    url: ''
                }
            ]
        },
        {
            date: '2/25',
            title: '福岡',
            log: [
                {
                    time: '7:00',
                    title: '早餐',
                    detail: '隨意解決',
                    url: ''
                },
                {
                    time: '8:00',
                    title: 'Check out Guest House Yasuragi Hakata Station Side',
                    detail: '寄放行李',
                    url: ''
                },
                {
                    time: '9:00',
                    title: '太宰府天滿宮',
                    detail: '',
                    url: ''
                },
                {
                    time: '12:00',
                    title: '午餐',
                    detail: 'ブーゴロALL VEGAN',
                    url: ''
                },
                {
                    time: '14:00',
                    title: '櫛田神社',
                    detail: '',
                    url: ''
                },
                {
                    time: '15:00',
                    title: '住吉神社',
                    detail: '',
                    url: ''
                },
                {
                    time: '18:30',
                    title: '福岡空港',
                    detail: '',
                    url: ''
                },
                {
                    time: '20:35',
                    title: '賦歸',
                    detail: '回程 China Airlines CI117 22:20(GMT+8) 抵達 桃園機場',
                    url: ''
                }
            ]
        },
    ]
}
export default Record