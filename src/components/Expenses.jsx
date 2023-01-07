import { useState, useEffect } from "react"
import Expense from "./Expense"
import styled from "@emotion/styled"
import { generarId } from "../helpers"

const Container = styled.div`
    background-color: hsl(33, 100%, 98%);
    max-width: 900px;
    width: 50%;
    margin: 0 auto;
    padding: 2em;
    border-radius: 10px;
    @media (max-width: 768px) {
        max-width: 300px;
        width: 100%;
        padding: 1em;
  }
`

const H2 = styled.h2`
    color: hsl(25, 47%, 15%);
    margin: 0;
`

const ExpensesDiv = styled.div`
    display: flex;
`

const Span = styled.span`
    color: hsl(28, 10%, 53%);
`

const Amount = styled.div`
    display: flex;
    align-items: center;
`

const H1 = styled.h1`
    color: hsl(25, 47%, 15%);
    margin: 0;
`

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
`

function Expenses() {

    const [expenses, setExpenses] = useState([]) 

    useEffect(() => {
      let isCancelled = false
      
      const obtJSON = async () => {
        const response = await fetch('./data.json')
        const result = await response.json()
        if(!isCancelled){
            const arrayExpenses = result.map(expense => {
                const obj = {
                    id: generarId(),
                    day: expense.day,
                    amount: expense.amount
                }
                return obj
            })
            setExpenses(arrayExpenses)
        }
      }
    
      obtJSON()
      return () => {
        isCancelled = true
      }
    }, [Expenses])
    

  return (
    <Container>
        <H2>Spending - Last 7 days</H2>
        <ExpensesDiv>
            {expenses.map(expense => (
                <Expense 
                    expense={expense}
                    key={expense.id}
                />
            ))}
        </ExpensesDiv>
        <hr />
        <Span>Total this month</Span>
        <Amount>
            <H1>$478.33</H1>
            <FlexColumn>
                <span>+2.4%</span>
                <Span>from last month</Span>
            </FlexColumn>
        </Amount>
    </Container>
  )
}

export default Expenses