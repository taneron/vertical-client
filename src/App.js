import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Plants from './pages/plants/Plants'
import Plant from './pages/plant/Plant'
import Search from './pages/Search'
import Entry from './pages/entry/Entry'
import AddEntry from './pages/entry/AddEntry'
import styled from 'styled-components'
import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Navbar from './components/Navbar'
import Theme from './utils/theme'

const queryClient = new QueryClient()

function App() {
  return (
    <Suspense fallback="Lädt">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Theme>
            <AppWrapper>
              <Navbar>
                <Switch>
                  <Route exact path="/" component={Plants} />
                  <Route path="/search" component={Search} />
                  <Route exact path="/plant/:id" component={Plant} />
                  <Route exact path="/:plantId/add/:refrenceNo" component={AddEntry} />
                  <Route path="/entry/:entryId" component={Entry} />
                </Switch>
              </Navbar>
            </AppWrapper>
          </Theme>
        </Router>
      </QueryClientProvider>
    </Suspense>
  )
}

export default App

const AppWrapper = styled.div`
  max-width: 1200px;
  /* width: 90%; */
  padding: 0 5%;
  margin: 0 auto;
`
