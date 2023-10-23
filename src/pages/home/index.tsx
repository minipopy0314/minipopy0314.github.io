import {Helmet} from "react-helmet";
import { 
    Grid, 
    Typography, 
    MenuList, 
    MenuItem,
    Divider,
    Link
} from "@mui/material"

import menuList from "./MenuList";
// import { Link } from "react-router-dom";

const MenuData = menuList.map((item, i) => {
        return (
            <Grid key={i} marginBottom={'10px'}>
                <Typography variant="h4" marginTop={5} marginBottom={2}>{item.country}</Typography>
                <Divider />
                <MenuList>
                    {
                        item.record.map((log, j) => {
                            return(
                                <MenuItem key={j} style={{whiteSpace: 'break-spaces'}}>
                                    {
                                        log.url ? (
                                            <Link href={`/#${log.url}`} underline="none">
                                                {log.date} {log.title}
                                            </Link>
                                        ) : (
                                            <Link href="#" style={{color: '#aaa'}} underline="none">
                                                {log.date} {log.title}-計畫中
                                            </Link>
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
    <>
        <Helmet>
          <title>Travel Log</title>
        </Helmet>
        <Grid container>
            <Grid item xs={12}>
                {MenuData}
            </Grid>
        </Grid>
    </>
  );
};

export default index;
