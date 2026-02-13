import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from '@mui/material';
import Grid from '@mui/material/Grid'; // Убедись, что стоит MUI v6, или используй просто 'Grid'
import { useMemo } from 'react';
// Импортируем данные прямо здесь, как в твоем старом коде
import { routes as data } from '../../data/rroutes';

const Filters = ({ filters, setFilters }) => {
  // 1. Собираем уникальные значения (используем useMemo для производительности)
  const districtsList = useMemo(() => {
    const list = new Set();
    data.forEach((item) => item.districts?.forEach((d) => list.add(d)));
    return [...list].sort();
  }, []);

  const trafficLightsList = useMemo(() => {
    const list = new Set(data.map((item) => item.trafficlight));
    return [...list].sort((a, b) => a - b);
  }, []);

  const attractionsList = useMemo(() => {
    const list = new Set();
    data.forEach((item) => item.attractions?.forEach((a) => list.add(a)));
    return [...list].sort();
  }, []);

  // 2. Единый обработчик изменений
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value === '' ? null : value,
    }));
  };

  const clearFilters = () => {
    setFilters({ district: null, trafficLights: null, attraction: null });
  };

  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      {/* Район */}
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <FormControl fullWidth size="small">
          <InputLabel>Район</InputLabel>
          <Select
            name="district"
            value={filters.district || ''}
            label="Район"
            onChange={handleSelectChange}
          >
            <MenuItem value="">
              <em>Все</em>
            </MenuItem>
            {districtsList.map((region) => (
              <MenuItem key={region} value={region}>
                {region}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      {/* Светофоры (Важно: имя 'trafficLights' должно совпадать с ключом в Run.jsx) */}
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <FormControl fullWidth size="small">
          <InputLabel>Светофоры</InputLabel>
          <Select
            name="trafficLights"
            value={filters.trafficLights ?? ''}
            label="Светофоры"
            onChange={handleSelectChange}
          >
            <MenuItem value="">
              <em>Неважно</em>
            </MenuItem>
            {trafficLightsList.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      {/* Достопримечательности */}
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <FormControl fullWidth size="small">
          <InputLabel>Что увидеть</InputLabel>
          <Select
            name="attraction"
            value={filters.attraction || ''}
            label="Что увидеть"
            onChange={handleSelectChange}
          >
            <MenuItem value="">
              <em>Все</em>
            </MenuItem>
            {attractionsList.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      {/* Кнопка сброса */}
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Button
          fullWidth
          variant="outlined"
          color="error"
          onClick={clearFilters}
          sx={{ height: '40px' }}
        >
          Сбросить
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filters;
