import React from 'react';
import { Box, Container, Typography, Link, Stack, Grid } from '@mui/material';
// import Grid from '@mui/material/Grid2';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto', // Выталкивает футер вниз, если контента мало
        backgroundColor: 'background.paper',
        borderTop: '1px solid #e0e0e0',
        borderRadius: '12px 12px 0 0', // Скругление только сверху, под стиль хедера
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Левая часть: Копирайт */}
          <Grid size={{ xs: 12, sm: 'auto' }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: { xs: 'center', sm: 'left' } }}
            >
              © {currentYear} MYKLD.RU. Все права защищены.
            </Typography>
          </Grid>

          {/* Правая часть: Ссылка и иконка */}
          <Grid size={{ xs: 12, sm: 'auto' }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: 'center', sm: 'flex-end' }}
              alignItems="center"
            >
              <Typography variant="body2" color="text.secondary">
                Связаться с нами:
              </Typography>
              <Link
                href="https://t.me/+urybSLBV1ws3YmRi"
                target="_blank"
                sx={{
                  display: 'flex',
                  color: 'primary.main',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <TelegramIcon fontSize="medium" />
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
