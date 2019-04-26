import React from "react"
import { Card, Image } from "semantic-ui-react"

export default class ProductCard extends React.Component {
  render() {
    return (
      <Card>
        <Image src="https://cdn.shopify.com/s/files/1/0249/1218/products/Neogen_Vita_C_Powder_PDP_1_900x.jpg?v=1551797578" />
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
