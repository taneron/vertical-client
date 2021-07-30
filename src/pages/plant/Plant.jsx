import { useParams, useHistory, Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Chart from './components/Chart'
import Grid from '@material-ui/core/Grid'
import { useQuery } from 'react-query'
import axios from 'axios'
import styled from 'styled-components'
import EntryCard from '../entry/components/EntryCard'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const API = process.env.REACT_APP_API || 'http://localhost:5000/api/v1/'
const IMG = process.env.REACT_APP_IMG || 'http://localhost:5000/'

function Plant() {
  const history = useHistory()
  const { id } = useParams()
  const { data } = useQuery('plant', () => axios.get(`${API}plant/${id}`))
  const plant = data?.data?.data

  return (
    <Wrapper>
      <H1 margin="-10px">Pflanze #{plant?.referenceNo}</H1>
      <p>{plant?.name}</p>

      <Cardd>
        <Chart />
      </Cardd>

      <Einträge>
        <H2>Einträge</H2>
        {plant?.entries?.length > 0
          ? plant?.entries?.map((entry) => (
              <EntryCard
                date={entry?.date}
                id={entry?._id}
                image={`${IMG}${entry?.image}`}
              ></EntryCard>
            ))
          : 'Keine Einträge vorhanden'}
      </Einträge>
      <Add>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => history.push(`/${id}/add/${plant?.referenceNo}`)}
        >
          <AddIcon />
        </Fab>
      </Add>
    </Wrapper>
  )
}

export default Plant

const Wrapper = styled.div`
  position: relative;
`
const Add = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  left: auto;
`

const H1 = styled.h1`
  font-family: 'Playfair Display', serif;
  margin-bottom: ${(props) => props.margin || '30px'};
`
const H2 = styled.h2`
  font-family: 'Playfair Display', serif;
  margin-bottom: 30px;
`

const Cardd = styled.div`
  /* box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; */
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px; */
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  padding: 40px 10px 10px 20px;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 30px;
`

const Einträge = styled.div`
  margin: 50px 0;
  min-height: 150px;
`
