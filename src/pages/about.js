import React from "react"
import Img from "gatsby-image"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import covid from "../images/covid.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import styleStyles from "./style.css"
import { Container } from "react-bootstrap"

const about = ({data}) => (
  <Layout>
<br />
<br />
<br />
<br />
    <SEO title="About" />
    <Container><section className={styleStyles.about}>
   <div className="container ">
   <div className="row">
    <div className="col-sm-12">
      <h2 className="text-center">About Me</h2>
      <hr></hr>
   </div>

   <div className="col-sm-6">
<p>
<Img fluid={data.rickynoviansyahGatsbyImage.childImageSharp.fluid} rounded />
    </p>
   </div>
   <div className="col-sm-6">
<p><b>Name</b> : Ricky noviansyah </p>
<p><b>Date of birth</b> : 17 - November - 2000 </p>
<p><b>about</b> : I am an enthusiastic about learning technology and sharing with others</p>
   </div>
   </div>
   </div>
 </section>
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

export default about
export const query = graphql `
query {
  rickynoviansyahGatsbyImage: file(relativePath: {eq: "rickynoviansyah.png"}) {
    childImageSharp{
      fluid(maxWidth: 2000) {
    	...GatsbyImageSharpFluid
      }
    }
  }
}
 `