const Record = {
    title: '',
    date: '',
    location: '',
    airplane: [
        {
            roundtrip: true,
            outbound: '',
            return: '',
            outbound_amount: '',
            return_amount: '',
            luggage: ''
        }
    ],
    lodging: [
        {
            name: '',
            address: '',
            tel: '',
            google_map: '',
            room: [
                {
                    order_no: '',
                    day: '',
                    room_type: '',
                    user: ''
                }
            ],
            amount: ''
        }
    ],
    cost: {

    },
    journey: [
        {
            date: '',
            title: '',
            log: [
                {
                    time: '',
                    location: '',
                    url: ''
                }
            ]
        }
    ]
}
export default Record