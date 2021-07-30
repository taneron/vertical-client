// import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import Search from '@material-ui/icons/Search'
import BackIcon from '@material-ui/icons/ChevronLeft'
import { Link, Redirect } from 'react-router-dom'

const Nav = styled.nav`
  height: 80px;
  margin: 0 -10px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`
function Navbar({ children }) {
  const history = useHistory()
  const location = useLocation()

  const goBack = (e) => {
    e.preventDefault()
    // window.history.go(-1) //JS only implementation
    history.goBack()
  }

  return (
    <>
      <Nav>
        <Link to="/search">
          <IconButton>
            <Search fontSize="large" />
          </IconButton>
        </Link>
        {location.pathname !== '/' && (
          <IconButton onClick={goBack}>
            <BackIcon fontSize="large" />
          </IconButton>
        )}
      </Nav>
      {children}
    </>
  )
}

export default Navbar
