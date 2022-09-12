import React from 'react'
import Header from '../Header'
import DoctorForm from '../DoctorForm'
import DoctorsTable from '../DoctorsTable'

import { Container } from './styles'

export default function Layout() {
  return (
    <>
      <Container>
        <Header />
        <DoctorForm />
        <DoctorsTable />
      </Container>
    </>
  )
}
