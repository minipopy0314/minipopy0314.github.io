import { Divider, Grid, Typography } from "@mui/material";

const Summary = ({ data }) => (
    <Grid item xs={12}>
        <Typography variant="h5">花費</Typography>
        <Divider />
        <p className="red-text">*平均一人</p>
        <ul>
            <li>基本開銷(交通、票券) : 日圓 匯率0.23 約 新台幣</li>
            <li>食 :  日圓/人 (預估一日3000日圓) 匯率0.23 約  新台幣/人</li>
            <li>住 : </li>
            <li>雜 : 日圓/人 匯率0.23 約 新台幣/人</li>
        </ul>
        <p className="red-text">小計: 日元 (匯率0.23 約 新台幣)</p>
        <br/><br/><br/>
    </Grid>
);

export default Summary;