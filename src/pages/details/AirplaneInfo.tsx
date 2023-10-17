import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";

import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const AirplaneInfo = ({ plane }) => {
    return (
        <>
            <Typography variant="h6" marginTop={5}>{plane.company}</Typography>
            <List sx={{ width: '100%'}}>
                {
                    plane.outbound && (
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <FlightTakeoffIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={plane.outbound} />
                        </ListItem>
                    )
                }
                {
                    plane.return && (
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <FlightLandIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={plane.return} />
                        </ListItem>
                    )
                }
            </List>
            <Divider />
            <ul>
                {
                    plane.outbound_amount > 0 && (
                        <li>去程金額:{Number(plane.outbound_amount).toLocaleString('EN-US')} 新台幣</li>
                    )
                }
                {
                    plane.return_amount > 0 && (
                        <li>回程金額:{Number(plane.return_amount).toLocaleString('EN-US')} 新台幣</li>
                    )
                }
                {
                    (plane.outbound_amount + plane.return_amount) > 0 && (
                        <li>合計金額: 
                        {
                            Number(plane.outbound_amount + plane.return_amount).toLocaleString('EN-US')
                        } 新台幣
                        </li>
                    )
                }
                <li>托運行李: {plane.luggage}</li>
            </ul>
        </>
    )
}

export default AirplaneInfo;