import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const API = process.env.REACT_APP_API || 'http://localhost:5000/api/v1/'

function AddEntry() {
  const { plantId, refrenceNo } = useParams()
  const [biomass, setBiomass] = useState()
  const [image, setImage] = useState()
  const [ph, setPh] = useState()
  const [notiz, setNotiz] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    let data = new FormData()
    data.append('plant', plantId)
    data.append('biomass', biomass)
    data.append('image', image)
    data.append('ph', ph)
    data.append('notiz', notiz)
    axios({
      method: 'post',
      url: `${API}entry`,
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
  }

  return (
    <>
      <H1 margin="-5px">Eintrag erstellen</H1>
      <p>Für Pflanze #{refrenceNo}</p>
      <FullWidth>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              name="image"
              placeholder="Bild*"
              id=""
              accept="image/png, image/gif, image/jpeg"
              required
            />
            {image && (
              <Image
                src={image instanceof File ? URL.createObjectURL(image) : image}
                alt={refrenceNo}
              />
            )}
          </div>
          <TextField
            value={biomass}
            onChange={(e) => setBiomass(e.target.value)}
            id="biomasse"
            label="Biomasse (g)"
            variant="filled"
            type="number"
            color="secondary"
            required
          />

          <TextField
            type="number"
            value={ph}
            onChange={(e) => setPh(e.target.value)}
            id="ph"
            label="pH-Wert"
            variant="filled"
            color="secondary"
            required
          />
          <TextField
            value={notiz}
            onChange={(e) => setNotiz(e.target.value)}
            id="notiz"
            label="Notiz"
            multiline
            rows={4}
            variant="filled"
            color="secondary"
          />

          <Button
            variant="contained"
            color="secondary"
            size="big"
            //poor mans validation
            disabled={!ph || !biomass}
          >
            Eintrag erstellen
          </Button>
          {error && <Error>{error}</Error>}
        </Form>
      </FullWidth>
    </>
  )
}

export default AddEntry

const Form = styled.form`
  & > div {
    margin-bottom: 20px;
    width: 90%;
    min-width: 200px;
  }
`

const FullWidth = styled.div`
  width: 100vw;
  padding: 40px 5%;
  margin: 30px -6%;
  background: #1caa53;
  padding-bottom: 100px;
`

const H1 = styled.h1`
  font-family: 'Playfair Display', serif;
  margin-bottom: ${(props) => props.margin || '30px'};
`
const Error = styled.p`
  color: #ecdf92;
  font-weight: 500;
`

const Image = styled.img`
  height: 270px;
  width: 100%;
  object-fit: cover;
  margin: 20px 0;
`
