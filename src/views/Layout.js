import React from 'react';
import {
  Content,
} from './index';
import Container from 'react-bootstrap/Container';
const Layout = () => {
  return (
    <React.Fragment>
    <Container fluid className="brand-container px-0">
      <div fluid className="brand-wrap">
        <div fluid className="brand-body">
          <Content />
        </div>
      </div>
    </Container>
    </React.Fragment>
  )
}

export default Layout
