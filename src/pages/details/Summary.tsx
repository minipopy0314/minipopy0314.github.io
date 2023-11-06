import { Divider, Grid, Typography } from "@mui/material";

const Summary = ({ data }) => {
    console.log(data)
    return (
        <>
            {
                data.list && data.list.length > 0 ? (
                    <>
                    <Typography variant="h5" marginTop={10}>必要開支</Typography>
                    <Divider />
                    <ul>
                    {
                        data.list.map((p, i) => {
                            return(
                                <li key={i}>{p}</li>
                            )
                        })
                    }
                    </ul>
                    </>
                ) : ('')
            }
            <Typography variant="h5" marginTop={10}>總預估開支</Typography>
            <Divider />
            <p className="red-text">*平均一人</p>
            <ul>
                <li>基本開銷(交通、票券) : 約 新台幣/人</li>
                <li>食 : 約  新台幣/人</li>
                <li>住 : 約  新台幣/人</li>
                <li>雜 : 約  新台幣/人</li>
            </ul>
            <p className="red-text">小計: 約 新台幣/人</p>
        </>
    )
};

export default Summary;