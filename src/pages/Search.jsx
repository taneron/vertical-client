import { useState, useEffect } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import axios from 'axios'
import PlantCard from './plants/components/PlantCard'
import { useQuery } from 'react-query'
const API = process.env.REACT_APP_API || 'http://localhost:5000/api/v1/'

function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState()
  const { data } = useQuery('allPlants', () => axios.get(`${API}plant`))

  const plants = data?.data?.data

  useEffect(() => {
    if (query) setResults(plants.filter((plant) => plant?.referenceNo === query))
    else setResults(plants)

    console.log(results)
  }, [plants, query])

  return (
    <Wrapper>
      {plants?.length > 0 && (
        <>
          <Autocomplete
            id="search-plant"
            style={{ width: 300 }}
            options={plants}
            autoHighlight
            getOptionLabel={(plant) => plant?.referenceNo?.toString()}
            renderOption={(plant) => (
              <div onClick={() => setQuery(plant.referenceNo)}>
                <Reference>#{plant?.referenceNo?.toString()}</Reference>
                {plant?.name}
              </div>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Nach Pflanze suchen"
                variant="outlined"
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
          />

          <H1>Ergebnisse</H1>

          {results?.map((plant) => (
            <PlantCard id={plant?._id} title={plant?.referenceNo} name={plant?.name}></PlantCard>
          ))}
        </>
      )}
    </Wrapper>
  )
}

export default Search

const Wrapper = styled.div`
  /* background: #2f7c2f; */
`
const Reference = styled.span`
  font-weight: 600;
  margin-right: 5px;
`

const H1 = styled.h1`
  font-family: 'Playfair Display', serif;
  margin-bottom: 30px;
`
