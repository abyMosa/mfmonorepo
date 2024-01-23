import React from 'react';
import Users from './Users';
import { Container, Row, Logo, LogoType } from '@abymosa/develm-sg'

const App = () => {
  return (
    <Container className='px-5 pb-5'>
      <Row className='pt-6 df f-jc-center'>
        <Logo type={LogoType.TEXT} text='AWS mfe Demo' />
      </Row>
      <Users />
    </Container>
  );
};

export default App;
