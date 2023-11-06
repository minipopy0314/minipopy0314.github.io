import { Divider, Grid, Typography } from "@mui/material";

const DayLog = ({ item }) => {
    return (
        <li className="event" data-date={item.time}>
            <Typography variant="h3">{item.title}</Typography>
            <p>{item.detail}</p>
            {
                item.url ? (
                    <a href={item.url}>連結</a>
                ) : ('')
            }
        </li>
    )
}

const JourneyInfo = ({ day }) => {
    return (
        <Grid item xs={12}>
            <Typography variant="h2">{day.date}</Typography>
            <Typography variant="h5" marginTop={5}>{day.title}</Typography>
            <Divider />
            <ul className="timeline">
            {
                day.log &&
                day.log.map((item, j) => {
                    return(
                        <DayLog key={j} item={item} />
                    )
                })
            }
            </ul>
        </Grid>
    )
};

export default JourneyInfo;