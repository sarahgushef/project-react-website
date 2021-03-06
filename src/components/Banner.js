import React from "react"

import SkincareBanner from "./../assets/images/banner-skincare-page.jpg"

import { Container } from "semantic-ui-react"

const Jumbotron = {
  display: "block",
  color: "black",
  backgroundImage: `url(${SkincareBanner})`,
  margin: "0px",
  padding: "60px 80px",
  height: "350px"
}

export default class Banner extends React.Component {
  render() {
    return (
      <Container fluid style={Jumbotron}>
        <Container>
          <h1>Korean Skin Care</h1>
          <p>
            We believe in the Korean skin-first philosophy—instead of covering
            up skin issues with makeup, it’s best to treat the root cause before
            they start. With the right knowledge and vetted selection of
            products, you'll have only good skin days ahead!
          </p>
        </Container>
      </Container>
    )
  }
}
