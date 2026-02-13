import { useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import TelegramIcon from '@mui/icons-material/Telegram';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, Link as RouterLink } from 'react-router-dom'; // Импортируем инструменты роутинга

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();

  // Проверяем, мобильный ли это экран (меньше 600px)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = [
    { text: 'Главная', path: '/' },
    { text: 'Гулять', path: '/walk' },
    { text: 'Бегать', path: '/run' },
    { text: 'Пить пиво', path: '/drink' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Функция-помощник для проверки активности ссылки
  const isActive = (path) => location.pathname === path;

  // Общий стиль для ссылок
  const linkStyle = (path) => ({
    fontSize: { xs: '0.9rem', sm: '1rem' },
    textDecoration: 'none',
    fontWeight: 'bold',
    color: isActive(path) ? 'blue' : 'text.main', // Цвет меняется на основной, если страница активна
    borderBottom: isActive(path) ? '2px solid' : 'none', // Опционально: подчеркивание для активной страницы
    pb: 0.5,
    transition: '0.3s',
    '&:hover': {
      color: 'primary.light',
    },
  });

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={1}
      sx={{ bgcolor: 'background.paper', mb: 1, py: 1 }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Логотип */}
          <Typography
            variant="h4"
            component={RouterLink}
            to="/"
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              textDecoration: 'none',
              fontSize: { xs: '1.5rem', sm: '2rem' },
            }}
          >
            MYKLD.RU
          </Typography>

          {/* Навигация */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'end',
              gap: 2,
            }}
          >
            {/* Десктопное меню: прячется на xs */}

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    sx={linkStyle(item.path)}
                  >
                    {item.text}
                  </Link>
                ))}
              </Box>
            )}

            {/* <Link
              href="https://t.me/+urybSLBV1ws3YmRi"
              target="_blank"
              sx={{ display: 'flex' }}
            >
              <TelegramIcon fontSize="medium" />
            </Link> */}

            {/* Бургер-кнопка: показывается только на xs */}
            {isMobile && (
              <IconButton
                onClick={handleDrawerToggle}
                sx={{ color: '#1976D2' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* Выпадающее боковое меню (Drawer) */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 250, pt: 2 }}
          role="presentation"
          onClick={handleDrawerToggle}
        >
          <Typography
            variant="h6"
            sx={{ px: 2, mb: 2, fontWeight: 'bold', color: '#1976D2' }}
          >
            Меню
          </Typography>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.path}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: isActive(item.path) ? '#0000FF' : '#1976D2',
                  bgcolor: isActive(item.path)
                    ? 'action.selected'
                    : 'transparent',
                }}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ fontWeight: 'bold' }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
