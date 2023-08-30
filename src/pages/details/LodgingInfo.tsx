import { Divider, Grid, Typography } from "@mui/material";

const LodgingInfo = ({ hotel }) => (
    <>
        <p>{hotel.name}</p>
        <Divider />
        <ul>
            <li>住址: {hotel.address}</li>
            <li>TEL : {hotel.tel}</li>
            <li>地圖: {hotel.google_map}</li>
        </ul>
        {
            hotel.room.map((room, i) => {
            return(
                <Grid key={i}>
                    <Grid item xs={12} md={6}>
                        <ul>
                            <li>預訂號碼: {room.order_no}</li>
                            <li>住宿日期: {room.day}</li>
                            <li>房間類型/住宿計劃: {room.room_type}</li>
                            <li>利用人數(一個房間): {room.user} 人</li>
                        </ul>
                    </Grid>
                </Grid>
            )
            })
        }
        <p className="red-text">合計金額: {hotel.amount}</p>
        <br/><br/><br/><br/>
    </>
);

export default LodgingInfo;