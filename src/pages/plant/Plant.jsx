import React from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'

function Entries() {
  const { id } = useParams()
  const history = useHistory()
  return (
    <div>
      <button onClick={() => history.goBack()}>Zurück</button>
      all entries of plant {id}
    </div>
  )
}

export default Entries
