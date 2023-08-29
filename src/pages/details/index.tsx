import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";

import { Button, Typography } from "@mui/material";

import data202309 from '../records/202309-hokkaido'

const index = () => {
  const params = useParams()
  console.log(params, 'params')

  const inputData = data202309;

  return (
    <main>
      <section className="index-title">
        <div className="container">
          <div className="row">
            <Button variant="contained">返回</Button>
            <div className="col s12 center-align">
                <Typography variant="h4">{inputData.title}</Typography>
                <hr/>
                <p style={{fontSize: '1.2rem'}}>
                  {inputData.date}
                </p>
                <h5>地區 : {inputData.location}</h5>
            </div>
            <div className="col s12">
            {
              inputData.airplane.map((plane) => {
                return (
                  <>
                    <h5>機票</h5>
                    <p>{plane.company}</p>
                    <hr/>
                    <ul>
                        <li>去程 : {plane.outbound}</li>
                        <li>回程 : {plane.return}</li>
                        <li>去程金額: {plane.outbound_amount} 新台幣 </li>
                        <li>回程金額: {plane.return_amount} 新台幣 </li>
                        <li>合計金額: 
                        {
                          Number(plane.outbound_amount) + Number(plane.return_amount)
                        } 新台幣</li>
                        <li>托運行李: {plane.luggage}</li>
                    </ul>
                    <br/><br/><br/>
                  </>
                )
              })
            }
            {
              inputData.lodging.map((hotel) => {
                return(
                  <>
                    <h5>住宿</h5>
                    <p>{hotel.name}</p>
                    <hr/>
                    <ul>
                        <li>住址: {hotel.address}</li>
                        <li>TEL : {hotel.tel}</li>
                        <li>地圖: {hotel.google_map}</li>
                    </ul>
                    {
                      hotel.room.map((room) => {
                        return(
                          <div className="row" style={{margin: '0px'}}>
                            <div className="col s12 m6 no-padding">
                                <ul>
                                    <li>預訂號碼: {room.order_no}</li>
                                    <li>住宿日期: {room.day}</li>
                                    <li>房間類型/住宿計劃: {room.room_type}</li>
                                    <li>利用人數(一個房間): {room.user} 人</li>
                                </ul>
                            </div>
                          </div>
                        )
                      })
                    }
                    <p className="red-text">合計金額: {hotel.amount}</p>
                    <br/><br/><br/><br/>
                  </>
                )
              })
            }
              <h5>花費</h5>
              <hr/>
              <p className="red-text">*平均一人</p>
              <ul>
                  <li>基本開銷(交通、票券) : 日圓 匯率0.23 約 新台幣</li>
                  <li>食 :  日圓/人 (預估一日3000日圓) 匯率0.23 約  新台幣/人</li>
                  <li>住 : </li>
                  <li>雜 : 日圓/人 匯率0.23 約 新台幣/人</li>
              </ul>
              <p className="red-text">小計: 日元 (匯率0.23 約 新台幣)</p>
              <br/><br/><br/>

              <h5>行程</h5>
              <p></p>
              <hr/>
            </div>
          </div>
        </div>
      </section>
    {
      inputData.journey.map((day) => {
        return(
          <section className="index-title">
              <div className="container">
                  <div className="row">
                      <div className="col s12">
                          <h2>{day.date}</h2>
                          <h5>{day.title}</h5>
                          <p>花費</p>
                          <ol>
                            {
                              day.pay.map((p) => {
                                return(
                                  <li>{p}</li>
                                )
                              })
                            }
                          </ol>
                          <hr/>
                          <ul className="timeline">
                            {
                              day.log.map((item) => {
                                return(
                                  <li className="event" data-date={item.time}>
                                      <h3>{item.title}</h3>
                                      <p>{item.detail}</p>
                                      {
                                        item.url ? (
                                          <a href={item.url}>連結</a>
                                        ) : ('')
                                      }
                                  </li>
                                )
                              })
                            }
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
        )
      })
    }
    </main>
  );
};

export default index;
