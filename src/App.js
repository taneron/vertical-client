import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Plants from './pages/plants/Plants'
import Plant from './pages/plant/Plant'
import Search from './pages/Search'
import Entry from './pages/entry/Entry'
import AddEntry from './pages/entry/AddEntry'
import styled from 'styled-components'
import { Suspense } from 'react'

function App() {
  return (
    <Suspense fallback="Lädt">
      <AppWrapper>
        <Router>
          <Switch>
            <Route exact path="/" component={Plants} />
            <Route path="/plant/:id" component={Plant} />
            <Route path="/search" component={Search} />
            <Route path="/:plantId/:entryId" component={Entry} />
            <Route path="/entry/add" component={AddEntry} />
          </Switch>
        </Router>
      </AppWrapper>
    </Suspense>
  )
}

export default App

const AppWrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`
