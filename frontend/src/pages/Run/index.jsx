import React, { useState, useEffect, useMemo } from 'react';
import { Container, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Filters from '../../components/Filters';
import { routes as data } from '../../data/rroutes';
import RunPaths from '../../components/RunPaths';

const Run = () => {
  const [filters, setFilters] = useState({
    district: null,
    trafficLights: null,
    attraction: null,
  });

  // Используем useMemo вместо useEffect для фильтрации данных "на лету"
  // Это избавляет от лишнего рендера и отдельного стейта cardsData
  const filteredCards = useMemo(() => {
    return data.filter((item) => {
      const matchDistrict =
        !filters.district || item.districts.includes(filters.district);
      const matchLights =
        filters.trafficLights === null ||
        item.trafficlight === filters.trafficLights;
      const matchAttraction =
        !filters.attraction || item.attractions.includes(filters.attraction);

      return matchDistrict && matchLights && matchAttraction;
    });
  }, [filters]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Секция фильтров */}
      <Filters filters={filters} setFilters={setFilters} />

      {/* Информационная строка */}
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 1 }}>
        Найдено маршрутов: {filteredCards.length}
      </Typography>

      {/* Сетка карточек */}
      <Grid container spacing={3}>
        {filteredCards.length > 0 ? (
          filteredCards.map((route) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={route.id}>
              <RunPaths route={route} />
            </Grid>
          ))
        ) : (
          <Box sx={{ width: '100%', textAlign: 'center', py: 10 }}>
            <Typography variant="h6" color="text.secondary">
              Маршрутов с такими параметрами не найдено 🏃‍♂️
            </Typography>
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default Run;
