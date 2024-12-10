import { Helmet } from "react-helmet";
import {
    Grid,
    Typography,
    MenuList,
    MenuItem,
    Divider,
    Link,
    Chip
} from "@mui/material"

import menuList from "./MenuList";
import React from "react";

const MenuData = menuList.map((item, i) => {

    var today = new Date();
    var year = today.getFullYear();
    return (
        <Grid key={i} marginBottom={'10px'}>
            <Typography variant="h4" marginTop={5} marginBottom={2}>{item.country}</Typography>
            <Divider />
            <MenuList>
                {
                    item.record.map((log, j) => {
                        return (
                            <MenuItem key={j} style={{ whiteSpace: 'break-spaces' }}>
                                {
                                    log.url ? (
                                        <Link href={`/#${log.url}`} underline="none">
                                            <Chip label={log.date} color={log.title.includes('員工') ? 'secondary' : 'primary'} size="small" sx={{ marginRight: 1 }} />
                                            <span>{log.title}</span>
                                            {
                                                log.date.includes(String(year + 1)) && (
                                                    <Chip label="NEW" color="success" size="small" sx={{ marginLeft: 1 }} />
                                                )
                                            }
                                        </Link>
                                    ) : (
                                        <Link href="#" style={{ color: '#aaa' }} underline="none">
                                            {
                                                log.date ? (
                                                    <Chip label={log.date} size="small" sx={{ marginRight: 1 }} />
                                                ) : <Chip label="--" size="small" sx={{ marginRight: 1 }} />
                                            }
                                            {log.title}-計畫中
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
