import { InputLabel, MenuItem, FormControl, Select, Grid, Button } from '@mui/material';
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
    <Grid container spacing={2}>
      <Grid size={3}>
        <FormControl fullWidth>
          <InputLabel id="district-label">Район</InputLabel>
          <Select
            labelId="district-label"
            id="district-label"
            name='district'
            value={district}
            label="Район"
            onChange={handleSelectChange}
          >
            {[...districtsList].map((region, index) => {
              return <MenuItem key={index} id={"district"} value={region}>{region}</MenuItem>
            })}

          </Select>
        </FormControl>
      </Grid>
      <Grid size={3}>

        <FormControl fullWidth>
          <InputLabel id="trafficLight-label">Сколько светофоров</InputLabel>
          <Select
            labelId="trafficLight-label"
            id="trafficLight"
            name='trafficLight'
            value={trafficLights}
            label="Сколько светофоров"
            onChange={handleSelectChange}
          >
            {trafficLightsList.map((item, index) => {
              return <MenuItem key={index} value={item}>{item}</MenuItem>
            })}

          </Select>
        </FormControl>
      </Grid>
      <Grid size={3}>

        <FormControl fullWidth>
          <InputLabel id="attraction-label">Что увидеть</InputLabel>
          <Select
            labelId="attraction-label"
            id="attraction"
            value={attractions}
            label="Что посмотреть"
            name='attraction'
            onChange={handleSelectChange}
          >
            {[...attractionsList].sort().map((item, index) => {
              return <MenuItem key={index} value={item}>{item}</MenuItem>
            })} </Select>
        </FormControl>
      </Grid>
      <Grid size={3}>
        <Button variant="text" size='large' onClick={() => clearFilters()}>Сбросить</Button>
      </Grid>
    </Grid>
  )
}

export default Filters