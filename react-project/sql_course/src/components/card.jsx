import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { List, ListItem } from '@mui/material';

export default function MediaCard() {
  return (
    <Card sx={{}}>
      <CardMedia className=' rounded-lg'
        style={{margin:"10px"}}
        sx={{ height: 300}}
        image="https://powerbi.datumdiscovery.com/img/herobanner.png"
        title="green iguana"
      />
      <CardContent>
      <CardActions>
        <Button size="medium" variant='contained'>Share</Button>
        <Button size="medium" variant='contained'>Learn More</Button>
      </CardActions>
        <Typography gutterBottom variant="h5" component="div">
        This Course Includes:
        </Typography>
        <List>
            <ListItem>30 Hrs + On-Demand Videos</ListItem>
            <ListItem>End Projects for Practice</ListItem>
            <ListItem>Practical Training</ListItem>
            <ListItem>Access on any device</ListItem>
            <ListItem>Certificate of completion</ListItem>
            <ListItem>Free Lifetime access</ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
