import * as React from 'react';
import { Box, Grid, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import TelegramIcon from '@mui/icons-material/Telegram';

const Header = () => {
  return (
    <Box sx={{ width: '100%', 
    border: '1px solid #e0e0e0', 
    borderRadius: '12px', padding: '10px'
     }} marginBottom={5} backgroundImage>
      <Grid container spacing={1}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h1" gutterBottom sx={{ fontWeight: 'medium' }}>
            MYKLD.RU
          </Typography>
        </Grid>
        <Grid size={{ xs: 3 }} >
          <Typography variant="h1" gutterBottom sx={{ fontWeight: 'medium' }}>

            <Link href='https://t.me/+urybSLBV1ws3YmRi'>{<TelegramIcon />}</Link>
          </Typography>
        </Grid>
        <Grid size={{ xs: 3 }} >
          <Typography>
            Где:
            </Typography>
        </Grid>
        <Grid size={{ xs: 3 }} >
          <Typography>
            <Link href="/">Главная</Link></Typography>
        </Grid>
        <Grid size={{ xs: 3 }} >
          <Typography>
            <Link href="/walk">Гулять</Link></Typography>
        </Grid>
        <Grid size={{ xs: 3 }} >
          <Typography>
            <Link href="/run">Бегать</Link></Typography>
        </Grid>
        <Grid size={{ xs: 3 }} >
          <Typography>
            <Link href="/drink">Пить пиво</Link></Typography>
        </Grid>
      </Grid>

    </Box >
  )
}

export default Header