const Record = {
    title: '',
    date: '',
    location: '',
    flight: [
        {
            company: '',
            airplane: '',
            takeoff: '',
            land: '',
            airport: '',
            amount: 0,
            luggage: ''
        },
        {
            company: '',
            airplane: '',
            takeoff: '',
            land: '',
            airport: '',
            amount: 0,
            luggage: ''
        },
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