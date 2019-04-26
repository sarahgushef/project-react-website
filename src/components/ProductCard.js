import React from "react"
import { Card, Image } from "semantic-ui-react"

import ProductImage from "../assets/thumbnails/neogen-vita-c-powder.jpg"

export default class ProductCard extends React.Component {
  render() {
    return (
      <Card>
        <Image src={ProductImage} />
        <Card.Content>
          <Card.Header>Neogen</Card.Header>
          <Card.Meta>
            <span className="date">Real Vita C Powder Lemon</span>
          </Card.Meta>
          <div>
            <span>$20.00</span>
          </div>
        </Card.Content>
      </Card>
    )
  }
}
