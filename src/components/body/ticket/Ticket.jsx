import styles from './Ticket.module.scss';
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { BigTicket } from './bigTicket/BigTicket';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Ticket = ({ title, alt_title, price, srcPicca }) => {
  const [isVisibleBigTicket, setIsVisibleBigTicket] = useState(false);
  const onClickBigTicket = () => {
    setIsVisibleBigTicket(!isVisibleBigTicket);
  };
  return (
    <Card className={styles.ticket} sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => onClickBigTicket()}>
        <CardMedia component="img" image={srcPicca} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {alt_title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            PRICE - {price}$
          </Typography>
        </CardContent>
      </CardActionArea>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
      {isVisibleBigTicket && <BigTicket />}
    </Card>
  );
};
