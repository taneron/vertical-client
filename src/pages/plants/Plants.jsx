import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import PlantCard from './components/PlantCard'

const API = process.env.REACT_APP_API || 'http://localhost:5000/api/v1/'

function Plants() {
  const [plants, setPlants] = useState()

  const fetchPlants = async () => {
    try {
      const res = await axios.get(`${API}plant`)
      return res?.data?.data
    } catch (error) {
      console.log(error.message)
      return
    }
  }

  useEffect(() => {
    const plants = fetchPlants()
    if (plants) setPlants(plants)
  }, [])

  return (
    <div>
      <Grid container spacing={3}>
        <h1>Alle Pflanzen</h1>
      </Grid>
      {plants?.length > 0 && plants.map((plant) => <PlantCard title={1} name={2}></PlantCard>)}
    </div>
  )
}

export default Plants
