import React from "react"

import styled from "@emotion/styled"

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: transparent;
  box-shadow: -1px 1px 6px 1px rgba(138, 133, 138, 1);
`

const NavigationCenter = styled.ul`
  li {
    display: inline;
    padding: 0 20px;
  }
`

const NavigationRight = styled.ul`
  li {
    display: inline;
    padding: 0 5px;
  }
`

export default class NavigationBar extends React.Component {
  render() {
    return (
      <Navigation>
        <div>SOKO GLAM</div>
        <div>
          <NavigationCenter>
            <li>SKINCARE</li>
            <li>HAIR AND BODY</li>
            <li>BEST SELLERS</li>
            <li>BRANDS</li>
            <li>OUR STORY</li>
            <li>REWARDS</li>
          </NavigationCenter>
        </div>
        <div>
          <NavigationRight>
            <li>SEARCH</li>
            <li>LOGIN</li>
            <li>WISHLIST</li>
            <li>CART</li>
          </NavigationRight>
        </div>
      </Navigation>
    )
  }
}
