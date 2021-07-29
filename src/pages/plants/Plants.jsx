import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import PlantCard from './components/PlantCard'
import { useQuery } from 'react-query'

const API = process.env.REACT_APP_API || 'http://localhost:5000/api/v1/'

function Plants() {
  const { data } = useQuery('allPlants', () => axios.get(`${API}plant`))
  const plants = data?.data?.data

  // const fetchPlants = async () => {
  //   try {
  //     const res = await axios.get(`${API}plant`)
  //     return res?.data?.data
  //   } catch (error) {
  //     console.log(error.message)
  //     return
  //   }
  // }

  useEffect(() => {}, [plants])

  return (
    <div>
      <Grid container spacing={3}>
        <h1>Alle Pflanzen</h1>
      </Grid>
      {plants?.length > 0 &&
        plants.map((plant) => (
          <PlantCard title={plant?.referenceNo} name={plant?.name}></PlantCard>
        ))}
    </div>
  )
}

export default Plants
