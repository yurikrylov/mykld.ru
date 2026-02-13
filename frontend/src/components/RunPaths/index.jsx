import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const RunPaths = ({ route }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      }}
    >
      <CardMedia
        sx={{ height: 160 }}
        image={route.photolink}
        title={route.name}
      />
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: 'bold', minHeight: '60px', lineHeight: 1.2 }}
        >
          {route.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            mb: 2,
            height: '60px', // Ограничиваем описание, чтобы не раздувало карточку
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 3, // Максимум 3 строки текста
            WebkitBoxOrient: 'vertical',
          }}
        >
          {route.desc}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            bgcolor: '#f5f5f5',
            p: 1,
            borderRadius: '8px',
          }}
        >
          <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
            🏃 {route.distance} км
          </Typography>
          <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
            🚦 {route.trafficlight}
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button
          size="small"
          variant="text"
          component={RouterLink}
          to={`/run/${route.id}`}
        >
          ОТКРЫТЬ
        </Button>

        <Button
          size="small"
          variant="text"
          href={route.maplink}
          target="_blank"
        >
          Карта
        </Button>
      </CardActions>
    </Card>
  );
};

export default RunPaths;
