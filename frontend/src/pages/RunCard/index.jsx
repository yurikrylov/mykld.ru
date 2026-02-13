import { Box, Typography } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import { routes as data } from '../../data/rroutes';

const RunCard = () => {
  const { id } = useParams();
  const location = useLocation();

  const route =
    location.state?.routeData || data.find((item) => item.id === parseInt(id));

  if (!route) return <div>Маршрут не найден</div>;

  return (
    <Box>
      <Typography variant="h2">{route.name}</Typography>
      {/* Контент */}
    </Box>
  );
};

export default RunCard;
