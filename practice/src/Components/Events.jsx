import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  border: 2px solid green;
  margin: auto;
  padding: 20px;
  text-align:center;
  background-color: red;
  color: white;
  font-size: 20px;
  border-radius: 10px;
`

const Button =styled.button`
  padding: 10px;
  margin-top: 10px;
  background: green;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 20px;
`

const Events = () => {
  function handleBtnClick(name) {
    console.log(`Hello, ${name}`)
  }

  function handleMouseOver() {
    console.log("Move Over me")
  }

  return (
    <>
      <Div className="red" onMouseOver={handleMouseOver}>I am red</Div>
      <Button onClick={() => handleBtnClick("Krishna")}>Click me</Button>
    </>
  )
}

export default Events