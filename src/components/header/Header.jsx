import { Menu } from './menu/Menu.jsx';
import { ShoppingCart } from './shoppingCart/ShoppingCart.jsx';
import styles from './Header.module.scss';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>IneVadim</Typography>
      </Toolbar>
      <div className={styles.header}>
        <Menu />
        <ShoppingCart />
      </div>
    </AppBar>
  );
};
