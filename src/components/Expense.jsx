import { useState } from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 175px;
`

const Amount = styled.div`
  background-color: hsl(25, 47%, 15%);
  padding: 0.3em;
  border-radius: 5px;
  width: auto;
  color: hsl(33, 100%, 98%);
  margin-bottom: 1em;
`

const ContainerBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const Bar = styled.div`
  margin: 0 auto;
  width: 3em;
  border-radius: 5px;
  @media (max-width: 768px) {
      width: 25px;
  }
`

const Span = styled.span`
    color: hsl(28, 10%, 53%);
`

function Expense({expense}) {
  
  const [hover, setHover] = useState(false)
  const { day, amount } = expense

  return (
    <>
      <Container>
        {hover && (
          <Amount>{`$${amount}`}</Amount>
        )}
        <ContainerBar>
          <Bar
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)} 
            className={day === "wed" ? "bar-blue" : "bar-red"}
            style={{height: `calc(${amount}px + 3em)`}}
          ></Bar>
        </ContainerBar>
        <Span>{day}</Span>
      </Container>
    </>
  )
}

export default Expense