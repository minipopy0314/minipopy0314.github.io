import { Accessibility, AttachMoney, Bed, CalendarToday, Home, Map, Numbers, Phone } from "@mui/icons-material";
import { Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Link } from "@mui/material";

const LodgingInfo = ({ hotel }) => {
    return (
        <>
            <Typography variant="h6" marginTop={7}>{hotel.name}</Typography>
            <Divider />
            <List>
                {
                    hotel.address && (
                        <ListItem>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary={'住宿地址'} secondary={hotel.address}></ListItemText>
                        </ListItem>
                    )
                }
                {
                    hotel.tel && (
                        <ListItem>
                            <ListItemIcon>
                                <Phone />
                            </ListItemIcon>
                            <ListItemText primary={'住宿電話'} secondary={hotel.tel}></ListItemText>
                        </ListItem>
                    )
                }
                {
                    hotel.google_map && (
                        <ListItem>
                            <ListItemIcon>
                                <Map />
                            </ListItemIcon>
                            <ListItemText primary={'住宿網站'} secondary={<Link href={hotel.google_map}>{hotel.google_map}</Link>}></ListItemText>
                        </ListItem>
                    )
                }
            </List>
            {
                hotel.room.map((room, i) => {
                return(
                    <Grid key={i}>
                        <Grid item xs={12}>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <Numbers />
                                    </ListItemIcon>
                                    <ListItemText primary={'預訂號碼'} secondary={room.order_no}></ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CalendarToday />
                                    </ListItemIcon>
                                    <ListItemText primary={'住宿天數'} secondary={room.day}></ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Bed />
                                    </ListItemIcon>
                                    <ListItemText primary={'房間類型'} secondary={room.room_type}></ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Accessibility />
                                    </ListItemIcon>
                                    <ListItemText primary={'利用人數'} secondary={room.user}></ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                )
                })
            }
            <List>
                <ListItem>
                    <ListItemIcon>
                        <AttachMoney />
                    </ListItemIcon>
                    <ListItemText primary={'金額'} secondary={hotel.amount}></ListItemText>
                </ListItem>
            </List>
        </>
    )
};

export default LodgingInfo;