import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ButtonLink = styled(Link)`
  display: ${props => (props.block ? 'block' : 'inline')};
  text-decoration: none;
  background-color: #0070e0;
  padding: 0.5rem 0.75rem;
  color: #fff;
  font-weight: 600;
  transition: all 150ms ease;
  border-radius: 4px;
  &:hover ${ButtonLink} {
    opacity: 0.7;
  }
`

export default ButtonLink
