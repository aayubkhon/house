import React from 'react'
import {Container} from './style'
import {Input,Button} from '../Generic'

export const Filter = () => {
  return (
    <Container>
      <Input  placeholder={'Enter an address, neighborhood, city, or ZIP code'}/>
      <Button>Advanced</Button>
      <Button>Search</Button>
    </Container>
  )
}
export default Filter