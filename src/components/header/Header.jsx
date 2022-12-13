import { useSelector, useDispatch } from 'react-redux';
import { Menu } from './menu/Menu.jsx';
import { ShoppingCart } from './shoppingCart/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { switchVisibleModalShoppingCart } from '../../redux/slices/modalShoppingCartSlice';
export const Header = () => {
  const switchShoppingCart = useSelector(state => state.modalShoppingCartSlice.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">
                <b>Кафе №1</b>
              </Link>
            </Typography>
            <div>
              <Link to="/contacts">
                <span className={styles.contacts}>Контакты</span>
              </Link>
              <Button onClick={() => dispatch(switchVisibleModalShoppingCart())} color="inherit">
                Корзина
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      {switchShoppingCart && <ShoppingCart />}
      <Menu />
    </div>
  );
};
