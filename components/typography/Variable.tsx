import styled from 'styled-components'

interface Props {
  weight?: number;
  size?: number;
  optical?:number;
  slant?:number;
  children?: string;
  }

const Variable = styled.p < Props > `
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  font-variation-settings: 'opsz' ${props => props.optical};
  font-variation-settings: 'slnt' ${props => props.slant};
`

export default Variable
