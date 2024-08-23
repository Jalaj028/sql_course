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
        sx={{ height: 500}}
        image="https://media.licdn.com/dms/image/v2/D4D03AQHXC5HnO9CPCQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1677234139382?e=1729728000&v=beta&t=itdud9nRWJ095TTdMxhlOU-sbqM9mkIuT55r3ZUSYXM"
        title="green iguana"
      />
      <CardContent>
      <CardActions>
        <Button size="medium" variant='contained' onClick={{}}>₹ India Checkout</Button>
        <Button size="medium" variant='contained'>₹ Global Checkout</Button>
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
