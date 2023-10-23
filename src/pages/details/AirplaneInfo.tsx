import { Avatar, Chip, Divider, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from "@mui/material";
import FlightIcon from '@mui/icons-material/Flight';
import LuggageIcon from '@mui/icons-material/Luggage';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { AirplaneTicket } from "@mui/icons-material";

const AirplaneInfo = ({ plane }) => {
    return (
        <>
            <Typography variant="h6" marginTop={5}>{plane.company}</Typography>
            <List sx={{ width: '100%'}}>
                {
                    plane.airplane && (
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <FlightIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>{plane.airplane}</ListItemText>
                        </ListItem>
                    )
                }
                <ListItem>
                    <ListItemIcon>
                        <FlightTakeoffIcon />
                    </ListItemIcon>
                    <ListItemText>
                        {plane.takeoff}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FlightLandIcon />
                    </ListItemIcon>
                    <ListItemText>
                        {plane.land}
                    </ListItemText>
                </ListItem>
            </List>
            <Divider />
            <List>
                {
                    plane.amount > 0 && (
                        <ListItem>
                            <ListItemIcon>
                                <AirplaneTicket />
                            </ListItemIcon>
                            <ListItemText primary={'機票金額'} secondary={
                                <ListItemText>
                                {
                                    Number(plane.amount).toLocaleString('EN-US')
                                }
                                <Chip sx={{marginLeft: '5px'}} label="TWD" color="primary" size="small" variant="outlined" />
                                </ListItemText>
                            }></ListItemText>
                        </ListItem>
                    )
                }
                <ListItem>
                    <ListItemIcon>
                        <LuggageIcon />
                    </ListItemIcon>
                    <ListItemText primary={'托運行李'} secondary={plane.luggage}></ListItemText>
                </ListItem>
            </List>
        </>
    )
}

export default AirplaneInfo;