import { Divider, Grid, Typography } from "@mui/material";

const Summary = ({ data }) => {
    return (
        <Grid item xs={12}>
            <Typography variant="h5" marginTop={10}>花費</Typography>
            <Divider />
            <p className="red-text">*平均一人</p>
            <ul>
                <li>基本開銷(交通、票券) : 約 新台幣/人</li>
                <li>食 : 約  新台幣/人</li>
                <li>住 : 約  新台幣/人</li>
                <li>雜 : 約  新台幣/人</li>
            </ul>
            <p className="red-text">小計: 約 新台幣/人</p>
        </Grid>
    )
};

export default Summary;