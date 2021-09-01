import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container, Repositorios } from './styles'

const UserNumbers = props => {
  const history = useHistory()
  const handleOnClick = route => history.push(route)

  return (
    <Container>
      <Repositorios onClick={() => handleOnClick('/repos')}>
        <h2>Repositories</h2>
      </Repositorios>
      <Repositorios onClick={() => handleOnClick('/starred')}>
        <h2>Starred</h2>
      </Repositorios>
    </Container>
  )
}

export default UserNumbers
