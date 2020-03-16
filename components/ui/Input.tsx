import styled from 'styled-components'


const Input = styled.input`
  border: none;
  border-bottom: 2px solid black;
  padding: 0.5em;
  font-family: var(--sans);
  font-size: 20px;
  &:focus {
    outline: none;
  }
`

export default Input
