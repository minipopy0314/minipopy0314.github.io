const Record = {
    title: '2023 日本北海道地方自由行',
    date: '2023/09/09 ~ 09/13',
    location: '花卷、函館、札幌',
    airplane: [
        {
            company: '台灣虎航 Tiger Air Inc.',
            roundtrip: true,
            outbound: 'Tiger Air 航班 IT258 臺北市 TPE 09月09日-12:15(GMT+8) --> 花卷 HNA 09月09日-16:50(GMT+9) (臺北)桃園機場第一航廈',
            return: 'Tiger Air 航班 IT259 花卷 HNA 09月13日-17:50(GMT+9) --> 臺北市 TPE 09月13日-21:00(GMT+8) (日本)花卷機場',
            outbound_amount: 17247,
            return_amount: 9051,
            luggage: '單程20公斤(*3)'
        }
    ],
    lodging: [
        {
            name: '佳松園',
            address: '日本〒025-0304 Iwate, Hanamaki, Yumoto, 1−125',
            tel: '+81 198372111',
            google_map: 'https://goo.gl/maps/nkkqzFVbnw2uMyJP6',
            room: [
                {
                    order_no: '944127596',
                    day: '2023年9月9日(星期六) 開始 1 宿',
                    room_type: '日式禁煙客房 山景',
                    user: '3'
                }
            ],
            amount: '84,911 日圓'
        },
        {
            name: '函館福朋喜來登酒店',
            address: '14-10 Wakamatsucho, Hakodate, Hokkaido 040-0063日本',
            tel: '+81 138220111',
            google_map: 'https://goo.gl/maps/HvwBguiepPkKyEWN8',
            room: [
                {
                    order_no: '955239244',
                    day: '2023年9月10日(星期日) 開始 1 宿',
                    room_type: '豪華三人房',
                    user: '3'
                }
            ],
            amount: '3,259 新台幣'
        },
        {
            name: '札幌薄野永安國際酒店',
            address: '日本〒064-0806 Hokkaido, Sapporo, Chuo Ward, Minami 6 Jonishi, 6 Chome−2−2',
            tel: '+81 115332100',
            google_map: '',
            room: [
                {
                    order_no: '955163044',
                    day: '2023年9月11日(星期一) 開始 2 宿',
                    room_type: '豪華禁菸房(兩床)',
                    user: '3'
                }
            ],
            amount: '4,357 新台幣'
        }
    ],
    cost: {

    },
    journey: [
        {
            date: '9/9',
            title: '花卷溫泉鄉',
            pay: [
            ],
            log: [
                {
                    time:'',
                    title: '出發',
                    detail: '去程 Tiger Air IT258 16:50 抵達 花卷機場',
                    url: ''
                },
                {
                    time:'',
                    title: '花卷空港',
                    detail: '搭乘計程車至佳松園',
                    url: ''
                },
                {
                    time:'',
                    title: 'Check in 佳松園',
                    detail: '',
                    url: ''
                },
                {
                    time:'',
                    title: '晚餐',
                    detail: '旅館提供',
                    url: ''
                },
                {
                    time:'',
                    title: '宿 佳松園',
                    detail: '',
                    url: ''
                },
            ]
        },
        {
            date: '9/10',
            title: '函館市',
            pay: [
                '函館纜車票: 1,800日圓'
            ],
            log: [
                {
                    time: '',
                    title: '早餐',
                    detail: '旅館提供',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check out 佳松園',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '新花卷駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '午餐',
                    detail: '應該是隨便吃',
                    url: ''
                },
                {
                    time: '',
                    title: '函館駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: 'Check in 函館福朋喜來登酒店',
                    detail: '行李寄存',
                    url: ''
                },
                {
                    time: '',
                    title: '函館港、金森紅磚倉庫',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '元町',
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
                    title: '函館山ロープウェイ山麓駅',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '函館山展望台',
                    detail: '',
                    url: ''
                },
                {
                    time: '',
                    title: '宿 函館福朋喜來登酒店',
                    detail: '',
                    url: ''
                },
            ]
        },
        {
            date: '9/11',
            title: '函館朝市、札幌市',
            pay: [
            ],
            log: [
                {
                    time:'',
                    title: '早餐',
                    detail: '函館朝市',
                    url: ''
                },
                {
                    time:'',
                    title: 'Check out 函館福朋喜來登酒店',
                    detail: '',
                    url: ''
                },
                {
                    time:'',
                    title: '函館駅',
                    detail: '至札幌',
                    url: ''
                },
                {
                    time:'',
                    title: '札幌駅',
                    detail: '',
                    url: ''
                },
                {
                    time:'',
                    title: 'Check in 札幌薄野永安國際酒店',
                    detail: '行李寄存',
                    url: ''
                },
                {
                    time:'',
                    title: '札幌散策',
                    detail: '薄野站步行至札幌站',
                    url: ''
                },
                {
                    time:'',
                    title: '晚餐',
                    detail: '牛たん炭焼 利久 赤れんが テラス店',
                    url: 'https://goo.gl/maps/A12JBNkT7xpmCSY49'
                },
                {
                    time:'',
                    title: '宿 札幌薄野永安國際酒店',
                    detail: '',
                    url: ''
                },
            ]
        },
        {
            date: '9/12',
            title: '札幌 北海道神宮 白色戀人觀光工廠',
            pay: [
            ],
            log: [
                {
                    time:'',
                    title: '早餐',
                    detail: '',
                    url: ''
                },
                {
                    time:'',
                    title: '北海道神宮',
                    detail: '',
                    url: ''
                },
                {
                    time:'',
                    title: '午餐',
                    detail: 'とんかつ 檍 炸豬排 大通店',
                    url: 'https://goo.gl/maps/Va15CsfYSKrAgANR8'
                },
                {
                    time:'',
                    title: '白色戀人觀光工廠',
                    detail: '',
                    url: ''
                },
                {
                    time:'',
                    title: '藻岩山展望台',
                    detail: '',
                    url: ''
                },
                {
                    time:'',
                    title: '晚餐',
                    detail: '',
                    url: ''
                },
                {
                    time:'',
                    title: '宿 札幌薄野永安國際酒店',
                    detail: '',
                    url: ''
                },
            ]
        },
        {
            date: '9/13',
            title: '札幌 場外市場',
            pay: [
            ],
            log: [
                {
                    time:'6:00',
                    title: 'Check out 札幌薄野永安國際酒店',
                    detail: '',
                    url: ''
                },
                {
                    time:'7:00',
                    title: '札幌場外市場',
                    detail: '',
                    url: ''
                },
                {
                    time:'11:45',
                    title: '札幌新千歲空港',
                    detail: '注意時間 需一小時前出發至機場',
                    url: ''
                },
                {
                    time:'13:45',
                    title: '搭乘國內線',
                    detail: '日本航空 JL2833 13:45(GMT+9)',
                    url: ''
                },
                {
                    time:'14:40',
                    title: '花卷空港',
                    detail: '14:40(GMT+9) 抵達',
                    url: ''
                },
                {
                    time:'17:50',
                    title: '賦歸',
                    detail: '回程 Tiger Air IT259 21:00(GMT+8) 抵達 桃園機場第一航廈',
                    url: ''
                },
            ]
        }

    ]
}
export default Record