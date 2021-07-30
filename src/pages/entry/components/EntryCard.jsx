// import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useParams, useHistory, Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
const API = process.env.REACT_APP_API || 'http://localhost:5000/api/v1/'

function EntryCard({ id, date, image }) {
  const history = useHistory()
  //   const { data } = useQuery('plant', () => axios.get(`${API}entry/${id}`))
  //   const entry = data?.data
  return (
    <Cardd key={id} onClick={() => history.push(`/entry/${id}`)}>
      <CardActionArea>
        <Image image={image || '/default.png'} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {new Date(date).toLocaleString()}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
                {entry?.plant?.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {entry?.plant?.referenceNo}
              </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* )} */}
    </Cardd>
  )
}

export default EntryCard

const Image = styled(CardMedia)`
  object-fit: cover;
  width: 100%;
  height: 160px;
`
const Content = styled(CardContent)`
  padding: 10px 50px;
`

const Cardd = styled.div`
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 30px;
  max-width: 400px;
`
