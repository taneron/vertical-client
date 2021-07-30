import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import axios from 'axios'
const API = process.env.REACT_APP_API || 'http://localhost:5000/api/v1/'
const IMG = process.env.REACT_APP_IMG || 'http://localhost:5000/'

function Entry() {
  const { entryId } = useParams()

  const { data } = useQuery('plant', () => axios.get(`${API}entry/${entryId}`))
  const entry = data?.data?.data

  return (
    <div>
      {entry && <H1>Eintrag für #{entry?.plant?.referenceNo}</H1>}
      {entry?.image && <Image src={`${IMG}${entry?.image}`} alt="" />}
      <ValueWrapper>
        <Label>Biomasse</Label>
        <Wert>{entry?.biomass}</Wert>
      </ValueWrapper>
      <ValueWrapper>
        <Label>pH-Wert</Label>
        <Wert>{entry?.ph}</Wert>
      </ValueWrapper>
      {entry?.notiz && (
        <ValueWrapper>
          <Label>Notiz</Label>
          <Wert>{entry?.notiz}</Wert>
        </ValueWrapper>
      )}
    </div>
  )
}

export default Entry

const H1 = styled.h1`
  font-family: 'Playfair Display', serif;
  margin-bottom: ${(props) => props.margin || '30px'};
`
const Wert = styled.p`
  font-weight: 600;
  font-size: 18px;
`

const Image = styled.img`
  height: 270px;
  width: 100%;
  object-fit: cover;
  margin: 20px 0;
`

const FullWidth = styled.div`
  width: 100vw;
  padding: 40px 5%;
  margin: 30px -6%;
  background: #1caa53;
  padding-bottom: 100px;
`
const Label = styled.p`
  margin-bottom: -10px;
`

const ValueWrapper = styled.div`
  margin-bottom: 20px;
  /* background: #eee; */
  padding: 10px 20px;
  border-radius: 30px;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
`
