import React, { startTransition } from "react";
import { useState, useEffect } from "react";

import { 
    Grid, 
    Typography, 
    MenuList, 
    MenuItem,
    ListItemText,
    ListItemIcon
} from "@mui/material"

import menuList from "./MenuList";
import { Link } from "react-router-dom";

const MenuData = menuList.map((item, i) => {
        return (
            <Grid key={i} marginBottom={'10px'}>
                <Typography variant="h5">{item.country}</Typography>
                <hr></hr>
                <MenuList>
                    {
                        item.record.map((log, j) => {
                            return(
                                <MenuItem key={j}>
                                    {
                                        log.url ? (
                                            <a className="collection-item" href={`/japan/${log.url}`}>
                                                {log.date} {log.title}
                                            </a>
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
        <Grid xs={12}>
            {MenuData}
        </Grid>
    </Grid>
  );
};

export default index;
