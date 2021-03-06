// import React from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Grid from '@material-ui/core/Grid'

import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

function PlantCard({ image, title, link, name, id }) {
  const history = useHistory()
  return (
    <Cardd key={id} onClick={() => history.push(`/plant/${id}`)}>
      <CardActionArea>
        <Image image={image || '/default.png'} title="Contemplative Reptile" />
        <Content>
          <Typography gutterBottom variant="h5" component="h2">
            #{title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {name}
          </Typography>
        </Content>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Cardd>
  )
}

export default PlantCard

const Image = styled(CardMedia)`
  object-fit: cover;
  width: 100%;
  height: 160px;
`
const Content = styled(CardContent)`
  padding: 10px 50px;
`

const Cardd = styled.div`
  /* box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; */

  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 30px;
  max-width: 400px;
`
