import React from "react"
import  {graphql}  from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Carousel, Card, CardDeck, Jumbotron, ProgressBar} from "react-bootstrap"
import styleStyles from "./style.css"
import Img from "gatsby-image"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" /> 
<br />
<br />
    <Carousel>
  <Carousel.Item>
   <Img fluid={data.covidGatsbyImage.childImageSharp.fluid}
   alt="This covid"
   />
    <Carousel.Caption>
      <h3 className={styleStyles.h3}>Stay Safe Stay Home</h3>
      <h5 className={styleStyles.h5}>Stay healthy and keep your distance.</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <Img fluid={data.discussGatsbyImage.childImageSharp.fluid}
   className="rounded" alt="This discuss"
   />
    <Carousel.Caption>
      <h3 className={styleStyles.h3}>Discussion</h3>
      <h5 className={styleStyles.h5}>I like to discuss with the team to add new insights.</h5>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
  <Img fluid={data.colaborationGatsbyImage.childImageSharp.fluid}
   alt="This colaboration"
   />
    <Carousel.Caption>
      <h3 className={styleStyles.h3}>Collaboration</h3>
      <h5 className={styleStyles.h5}>Collaborating with a team is very important so that work is completed quickly and clearly..</h5>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <Img fluid={data.meetingGatsbyImage.childImageSharp.fluid}
   alt="This meeting"
   />
    <Carousel.Caption>
      <h3 className={styleStyles.h3}>Meeting</h3>
      <h5 className={styleStyles.h5}>Meetings discuss with the team to solve problems with solutions.</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<br />
<center>
<h2>Development</h2>
</center>
<br />
<br />
  <Container>
  <Jumbotron>
  <CardDeck>
  <Card>
  <Img fluid={data.myappGatsbyImage.childImageSharp.fluid} />
    <Card.Body rounded>
      <Card.Title>Build Your App</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
  <Img fluid={data.mygameGatsbyImage.childImageSharp.fluid} 
 />
    <Card.Body>
      <Card.Title>Build Your Game</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
 <Img fluid={data.mywebGatsbyImage.childImageSharp.fluid} />
    <Card.Body>
      <Card.Title>Build Your Web</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</Jumbotron>
    </Container>  


<br />
<br />
  <center>
<h2>My Skill</h2>
</center>
<br />
<br />
    
<div>
  <Container>
  <span className={styleStyles.span}>Javascript</span>
  <ProgressBar variant="success" now={75} />
  <span className={styleStyles.span}>Ruby</span>
  <ProgressBar variant="danger" now={55} />
  <span className={styleStyles.span}>Java</span>
  <ProgressBar variant="info" now={80} />
  <span className={styleStyles.span}>Linux Server</span>
  <ProgressBar variant="warning" now={90} />
  <span className={styleStyles.span}>Kotlin</span>
  <ProgressBar variant="danger" now={60} />
  <span className={styleStyles.span}>Cisco</span>
  <ProgressBar variant="primary" now={75} />
  <span className={styleStyles.span}>Mikrotik</span>
  <ProgressBar variant="dark" now={80} />
  <span className={styleStyles.span}>Service Pc</span>
  <ProgressBar variant="warning" now={85} />
  </Container>
  
  <br />
  <br />
  <br />
  <br />
</div>

  </Layout>
)

export default IndexPage
export const query = graphql `
query {
  covidGatsbyImage: file(relativePath: {eq: "covid.jpg"}) {
    childImageSharp{
      fluid(maxWidth: 2000) {
    	...GatsbyImageSharpFluid
      }
    }
  },
  discussGatsbyImage: file(relativePath: {eq: "discuss.jpg"}) {
    childImageSharp{
      fluid(maxWidth: 2000) {
    	...GatsbyImageSharpFluid
      }
    }
  },
  colaborationGatsbyImage: file(relativePath: {eq: "colaboration.jpg"}) {
    childImageSharp{
      fluid(maxWidth: 2000) {
    	...GatsbyImageSharpFluid
      }
    }
  },
  meetingGatsbyImage: file(relativePath: {eq: "meeting.jpg"}) {
    childImageSharp{
      fluid(maxWidth: 2000) {
    	...GatsbyImageSharpFluid
      }
    }
  },
  myappGatsbyImage: file(relativePath: {eq: "myapp.jpg"}) {
    childImageSharp{
      fluid(maxWidth: 2000) {
    	...GatsbyImageSharpFluid
      }
    }
  },
  mygameGatsbyImage: file(relativePath: {eq: "mygame.jpg"}) {
    childImageSharp{
      fluid(maxWidth: 2000) {
    	...GatsbyImageSharpFluid
      }
    }
  },
  mywebGatsbyImage: file(relativePath: {eq: "myweb.jpg"}) {
    childImageSharp{
      fluid(maxWidth: 2000) {
    	...GatsbyImageSharpFluid
      }
    }
  }

},
`
