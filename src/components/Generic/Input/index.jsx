import React from 'react'
import { Container } from './style'

const Input = ({children,type,onClick}) => {
  return (
    <Container onClick={onClick} type={type}>
      {children || 'Generic button'}
    </Container>
  )
}

export default Input