import React from 'react'
import Header from '../Header'
import AddDoctor from '../AddDoctor'
import SearchDoctor from '../SearchDoctor'

import { ButtonContainer, Container } from './styles'

export default function Layout() {
  return (
    <>
      <Container>
        <Header />
        <ButtonContainer>
          <AddDoctor />
          <SearchDoctor />
        </ButtonContainer>
      </Container>
    </>
  )
}
