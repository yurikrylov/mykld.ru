import * as React from 'react';
import {Box, Grid, Link} from '@mui/material';
import Typography from '@mui/material/Typography';
import TelegramIcon from '@mui/icons-material/Telegram';

const Header = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 9 }}>
          <Typography variant="h1" gutterBottom sx={{ fontWeight: 'medium' }}>
            WE RUN KLD
          </Typography>
        </Grid>
        <Grid size={{ xs: 3 }} >
          <Typography variant="h1" gutterBottom sx={{ fontWeight: 'medium' }}>

            <Link href='https://t.me/+urybSLBV1ws3YmRi'>{<TelegramIcon />}</Link>
          </Typography>
        </Grid>
      </Grid>

    </Box >
  )
}

export default Header