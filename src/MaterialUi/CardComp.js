import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MyButton from './Buttons';
import Typography from '@mui/material/Typography';
import { Tooltip } from '@mui/material';



export default function OutlinedCard({user}) {
  return (
    <Box 
    sx={(theme) => ({
      minWidth: 300 ,maxWidth:300,minHeight:120,maxHeight:180,boxShadow: 1
    })}
   >
      <Card variant="outlined">
      <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
       abc
      </Typography>
      <Typography variant="h5" component="div">
       {user.id}
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
      <Typography variant="body2" sx={{height:'25px', display: 'inline-block',
    width: '180px',
    whiteSpace: 'nowrap',
    overflow: 'hidden !important',padding:'8px',
    textOverflow: 'ellipsis'}}>
      {user.title}
      </Typography>
     
      <Typography sx={{float:'right'}}>
      <Tooltip title={user.title}> <MyButton variant='text' text='more' color={"secondary"}/>
      </Tooltip>
      </Typography>
      <br/>
    </CardContent>
  </React.Fragment>

      </Card>
    </Box>
  );
}
