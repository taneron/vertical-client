//import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import styled from 'styled-components'

const data = [
  {
    name: 'Page A',
    biomass: 4000,
    ph: 2400,
    height: 10000,
  },
  {
    name: 'Page B',
    biomass: 3000,
    ph: 1398,
    height: 2210,
  },
  {
    name: 'Page C',
    biomass: 2000,
    ph: 9800,
    height: 2290,
  },
  {
    name: 'Page D',
    biomass: 2780,
    ph: 3908,
    height: 2000,
  },
  {
    name: 'Page E',
    biomass: 1890,
    ph: 4800,
    height: 2181,
  },
  {
    name: 'Page F',
    biomass: 2390,
    ph: 3800,
    height: 2500,
  },
  {
    name: 'Page G',
    biomass: 3490,
    ph: 4300,
    height: 2100,
  },
]

function Chart() {
  return (
    <>
      <LineChart
        width={window.innerWidth * 0.8}
        height={250}
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 0,
          bottom: 5,
        }}
      >
        <Tooltip />
        <Line strokeWidth={2} type="monotone" dataKey="ph" stroke="#14964a" activeDot={{ r: 8 }} />
        <Line strokeWidth={2} type="monotone" dataKey="biomass" stroke="#7ab330" />
      </LineChart>
      <LineChart
        width={window.innerWidth * 0.8}
        height={150}
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Line strokeWidth={2} type="monotone" dataKey="height" stroke="#216121" />
      </LineChart>
    </>
  )
}

export default Chart

const Container = styled(ResponsiveContainer)`
  /* height: 300px; */
  padding: 40px 10px;
`
