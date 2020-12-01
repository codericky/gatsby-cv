import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container,Card} from "react-bootstrap"


const work = () => (
  <Layout>
<br />
<br />
<br />
<br />
    <SEO title="Work" />
    <center><h2>Work History</h2></center>
    <br />
    <br />
    <Container>
    <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>Technician Service PC</Card.Header>
    <Card.Body>
      <Card.Title>Supermall Karawaci tangerang 2019</Card.Title>
      <Card.Text>
      I work as a service technician, 
      repairing damaged laptops and I install applications and serve buyers.
      </Card.Text>
    </Card.Body>
  </Card>
  </Container>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

  </Layout>
)

export default work