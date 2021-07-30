import axios from 'axios'
import PlantCard from './components/PlantCard'
import { useQuery } from 'react-query'
import styled from 'styled-components'

const API = process.env.REACT_APP_API || 'http://localhost:5000/api/v1/'
const IMG = process.env.REACT_APP_IMG || 'http://localhost:5000/'

function Plants() {
  const { data } = useQuery('allPlants', () => axios.get(`${API}plant`))
  const plants = data?.data?.data

  return (
    <div>
      <H1>Meine Pflanzen</H1>
      {plants?.length > 0 &&
        plants.map((plant) => (
          <PlantCard
            image={`${IMG}${plant?.entries?.[plant?.entries?.length - 1]?.image}`}
            id={plant?._id}
            title={plant?.referenceNo}
            name={plant?.name}
          ></PlantCard>
        ))}
    </div>
  )
}

export default Plants

const H1 = styled.h1`
  font-family: 'Playfair Display', serif;
  margin-bottom: 30px;
`
