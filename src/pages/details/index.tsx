import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";

import { Button, Divider, Grid, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import AirplaneInfo from "./AirplaneInfo";
import LodgingInfo from "./LodgingInfo";
import JourneyInfo from "./JourneyInfo";
import Summary from "./Summary";

import data201408 from '../records/201408-tokyo'
import data201608 from '../records/201608-osaka'
import data201704 from '../records/201704-tokyo'
import data201709 from '../records/201709-okayama'
import data201801 from '../records/201801-yamagata'
import data201804 from '../records/201804-okayama'
import data201810 from '../records/201810-tokyo'
import data201909 from '../records/201909-nagano'
import data201912 from '../records/201912-kyoto'
import data202211 from '../records/202211-japan'
import data202212 from '../records/202212-tokyo'
import data202304 from '../records/202304-kyoto'
import data202306 from '../records/202306-okinawa'
import data202309 from '../records/202309-hokkaido'
import data202402 from '../records/202402-kyushu'

const index = () => {
  const params = useParams()

  let inputData = null;
  switch(params.time){
    case '201408-tokyo':
      inputData = data201408;
      break;
    case '201608-osaka':
      inputData = data201608;
      break;
    case '201704-tokyo':
      inputData = data201704;
      break;
    case '201709-okayama':
      inputData = data201709;
      break;
    case '201801-yamagata':
      inputData = data201801;
      break;
    case '201804-okayama':
      inputData = data201804;
      break;
    case '201810-tokyo':
      inputData = data201810;
      break;
    case '201909-nagano':
      inputData = data201909;
      break;
    case '201912-kyoto':
      inputData = data201912;
      break;
    case '202211-japan':
      inputData = data202211;
      break;
    case '202212-tokyo':
      inputData = data202212;
      break;
    case '202304-kyoto':
      inputData = data202304;
      break;
    case '202306-okinawa':
      inputData = data202306;
      break;
    case '202309-hokkaido':
      inputData = data202309;
      break;
    case '202402-kyushu':
      inputData = data202402;
      break;
  }

  return (
    <main>
      <Grid container>
        <Grid item xs={12} marginBottom={'3rem'}>
          <Button variant="contained" onClick={() => {
          window.location.href = '/';}}>
            <ArrowBackIosIcon></ArrowBackIosIcon>返回
          </Button>
        </Grid>
        <Grid item xs={12} textAlign={'center'}>
          <Typography variant="h4">{inputData.title}</Typography>
          <Divider />
          <p style={{fontSize: '1.2rem'}}>
            {inputData.date}
          </p>
          <Typography variant="h5">地區 : {inputData.location}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">機票</Typography>
          {
            inputData.airplane &&
            inputData.airplane.map((plane, i) => {
              return (
                <AirplaneInfo key={`airplane${i}`} plane={plane} />
              )
            })
          }
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">住宿</Typography>
          {
            inputData.lodging &&
            inputData.lodging.map((hotel, i) => {
              return(
                <LodgingInfo key={`lodging${i}`} hotel={hotel} />
              )
            })
          }
        </Grid>
        <Summary data={inputData} />
        <Grid item xs={12}>
          <Typography variant="h5">行程</Typography>
          <Divider />
          <br></br>
          <br></br>
          {
            inputData.journey &&
            inputData.journey.map((day, i) => {
              return(
                <JourneyInfo key={`journey${i}`} day={day} />
              )
            })
          }
        </Grid>
      </Grid>
    </main>
  );
};

export default index;
