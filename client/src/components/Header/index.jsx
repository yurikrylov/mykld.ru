import * as React from 'react';
import { Box, AppBar, Toolbar, IconButton, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import TelegramIcon from '@mui/icons-material/Telegram';

const Header = () => {

  const IconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            WE RUN KLD
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>

            <Link color='inherit' href='https://t.me/+urybSLBV1ws3YmRi'>{
              <TelegramIcon />}</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );


}

export default Header