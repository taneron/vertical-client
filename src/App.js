import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Plants from './pages/plants/Plants'
import Plant from './pages/plant/Plant'
import Search from './pages/Search'
import Entry from './pages/entry/Entry'
import AddEntry from './pages/entry/AddEntry'
import styled from 'styled-components'
import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <Suspense fallback="Lädt">
      <QueryClientProvider client={queryClient}>
        <AppWrapper>
          <Router>
            <Switch>
              <Route exact path="/" component={Plants} />
              <Route exact path="/plant/:id" component={Plant} />
              <Route path="/search" component={Search} />
              <Route path="/:plantId/:entryId" component={Entry} />
              <Route path="/entry/add" component={AddEntry} />
            </Switch>
          </Router>
        </AppWrapper>
      </QueryClientProvider>
    </Suspense>
  )
}

export default App

const AppWrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`
