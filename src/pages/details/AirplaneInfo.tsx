import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";

import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const AirplaneInfo = ({ plane }) => {
    return (
        <>
            <p>{plane.company}</p>
            <List sx={{ width: '100%'}}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FlightTakeoffIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={plane.outbound} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FlightLandIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={plane.return} />
                </ListItem>
            </List>
            <Divider />
            <ul>
                <li>去程金額:{Number(plane.outbound_amount).toLocaleString('EN-US')} 新台幣 </li>
                <li>回程金額:{Number(plane.return_amount).toLocaleString('EN-US')} 新台幣 </li>
                <li>合計金額: 
                {
                    Number(plane.outbound_amount + plane.return_amount).toLocaleString('EN-US')
                } 新台幣</li>
                <li>托運行李: {plane.luggage}</li>
            </ul>
            <br/><br/><br/>
        </>
    )
}

export default AirplaneInfo;