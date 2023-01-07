import styled from "@emotion/styled"
import Logo from "../assets/images/logo.svg"

const ContainerHeader = styled.div`
    max-width: 900px;
    width: 50%;
    margin: 0 auto;
    padding: 1em 2em;
    display: flex;
    justify-content: space-between;
    background-color: hsl(10, 79%, 65%);
    border-radius: 10px;
    margin-bottom: 1em;
    @media (max-width: 768px) {
        max-width: 275px;
        width: 100%;
  }
`

const H2 = styled.h2`
    margin: 0.25em 0;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
`

const Img = styled.img`
    display: block;
`

function Header() {
  return (
    <ContainerHeader>
        <Container>
            <span>My balance</span>
            <H2>$921.48</H2>
        </Container>
        <Img
            src={Logo}
            alt="logo"
        /> 
    </ContainerHeader>
  )
}

export default Header