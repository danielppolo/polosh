import Button from 'components/ui/Button'
import styled from 'styled-components'
import NextLink from 'next/link'

const LinkStyled = styled(Button)`
  color: var(--secondary);
  position: relative;
  transition: 0.5s;
  span::after{
    content: attr(data-content);
    position: absolute;
    color: transparent;
    bottom: 0;
    left: -10px;
    width: calc(100% + 20px);
    height: 0.1em;
    background-color: var(--secondary);
    z-index: -1;
    animation: fadein 0.5s normal forwards ease-in-out;
    animation-iteration-count: 1;
    animation-iteration-count: 1;
    transition: 0.5s ease;
  }
  span:hover::after{
    bottom: 0;
    /* left: -20px; */
    /* width: 100%; */
    height: 1.2em;
  }
  &:hover {
    color: var(--black);
  }
`

const Link = ({ children, href }) => <NextLink href={href}><LinkStyled><span>{children}</span></LinkStyled></NextLink>

export default Link
