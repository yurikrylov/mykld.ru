import { Card, CardActions, CardContent, CardMedia, Typography,  Button } from '@mui/material';

export default function RouteCard({route}) {


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={route.photolink}
        title="фото маршрута"
      />
      <CardContent>
        <Typography sx={{ height: 80 }} gutterBottom variant="h5" component="div">
          {route.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', height: 80, overflow: 'auto' }}>
          {route.desc}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', height: 80, overflow: 'auto' }}>
          Расстояние: {route.distance} км
        </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', height: 80, overflow: 'auto' }}>
          Светофоров: {route.trafficlight} 
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button sx={{ height: 80 }} href={null} variant="text">ОТКРЫТЬ</Button>

        <Button sx={{ height: 80 }} href={route.maplink} variant="text">КАРТА</Button>
      </CardActions>
    </Card>
  );
}