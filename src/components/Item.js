import { Paper, Typography } from "@mui/material";
import { Button } from "@mui/material"


export default function Item(item){
    return(
        <Paper sx={{textAlign: 'center', marginTop: 4}} elevation={0}>
            <img src={item.item.image} alt="image" style={{width: '40vw'}} draggable="false"/>
            <Typography 
            sx={{fontFamily: 'Times New Roman', width: '50vw', margin: 'auto'}}
            variant="h5">{item.item.text}</Typography>
        </Paper>
    )
}