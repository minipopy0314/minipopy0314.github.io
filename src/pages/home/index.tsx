import { 
    Grid, 
    Typography, 
    MenuList, 
    MenuItem,
    Divider
} from "@mui/material"

import menuList from "./MenuList";
import { Link } from "react-router-dom";

const MenuData = menuList.map((item, i) => {
        return (
            <Grid key={i} marginBottom={'10px'}>
                <Typography variant="h5">{item.country}</Typography>
                <Divider />
                <MenuList>
                    {
                        item.record.map((log, j) => {
                            return(
                                <MenuItem key={j}>
                                    {
                                        log.url ? (
                                            <Link className="collection-item" to={`${log.url}`}>
                                                {log.date} {log.title}
                                            </Link>
                                        ) : (
                                            <a className="collection-item" href="#" style={{color: '#aaa'}}>
                                                {log.date} {log.title}-計畫中
                                            </a>
                                        )
                                    }
                                </MenuItem>
                            )
                        })
                    }
                </MenuList>
            </Grid>
        )
    }
);



const index = () => {
  return (
    <Grid container>
        <Grid item xs={12}>
            {MenuData}
        </Grid>
    </Grid>
  );
};

export default index;
