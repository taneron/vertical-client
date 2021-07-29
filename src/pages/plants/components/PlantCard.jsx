// import React from 'react'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Grid from '@material-ui/core/Grid'

function PlantCard({ image, title, link, name }) {
  return (
    <Grid item xs={12}>
      <Link to={`/plant/${title}`}>
        <Paper>
          <h3>{title}</h3>
          <p>{name}</p>
        </Paper>
      </Link>
    </Grid>
  )
}

export default PlantCard
