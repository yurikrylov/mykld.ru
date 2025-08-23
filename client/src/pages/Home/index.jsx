import Filters from '../../components/Filters'
import Header from '../../components/Header'
import RouteCard from '../../components/RouteCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { routes as data } from '../../data/rroutes';
import { React, useState, useEffect } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




const Home = () => {
  const [filters, setFilters] = useState({ district: null, trafficLights: null, attraction: null })
  const [cardsData, setCarsdDAta] = useState([])

  useEffect(() => {
    const arr = data.filter((item )=> { if (filters.district==null){return true} else {return item.districts.includes(filters.district) }})
      .filter((item)=>{ 
        if (filters.trafficLights==null)
          {return true} 
        else 
        {return item.trafficlight ==filters.trafficLights}
      })
      .filter((item)=>{
        if (filters.attraction==null)
          {return true} 
        else 
        {return item.attractions.includes(filters.attraction) }
      })
    setCarsdDAta(arr)

  }, [filters])

  return (
    <Container maxWidth="lg">
      <Header />
      <Filters filters={filters} setFilters={setFilters} />
      <Grid container spacing={2} sx={{mt:4}}>
        {cardsData.map((route) => {
          return <Grid size={4} key={route.id}><RouteCard route={route} /></Grid>
        }
        )}
      </Grid>
    </Container>
  )
}

export default Home