import { Box, AppBar, Typography, Select, Grid, Button, Link } from '@mui/material';
import { routes as data } from '../../data/rroutes'
import { useState } from 'react';

var districtsList = []
data.map((item) => {
  districtsList = new Set([...districtsList, ...item.districts])
})
var trafficLightsList = []
data.map((item) => {
  trafficLightsList.push(item.trafficlight)
})
trafficLightsList = [...new Set([...trafficLightsList])]
var attractionsList = []
data.map((item) => {
  attractionsList = new Set([...attractionsList, ...item.attractions])
})

const Filters = ({ filters, setFilters }) => {
  const [district, setDistrict] = useState('');
  const [trafficLights, setTrafficLights] = useState('');
  const [attractions, setAttractions] = useState('');

  const handleSelectChange = (e) => {
    if (e.target.name === 'district') {
      setDistrict(e.target.value)
      setFilters({ ...filters, district: e.target.value })
    } else if (e.target.name === 'trafficLight') {
      setTrafficLights(e.target.value)
      setFilters({ ...filters, trafficLights: e.target.value })
    }
    else if (e.target.name === 'attraction') {
      setAttractions(e.target.value)
      setFilters({ ...filters, attraction: e.target.value })
    }
  };
  const clearFilters = () => {
    setFilters({ district: null, attractions: null, trafficLights: null })
    setDistrict('')
    setTrafficLights('')
    setAttractions('')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Link color='inherit' variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Центральный
        </Link>
        <Link color='inherit' variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Московский
        </Link>
        <Link color='inherit' variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ленинградский
        </Link>
      </AppBar>
    </Box>

  )
}

export default Filters