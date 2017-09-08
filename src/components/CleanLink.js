import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const CleanLink = styled(Link)`
  display: ${props => (props.block ? 'block' : 'inline')};
  text-decoration: none;
  color: inherit;
  transition: all 150ms ease;
  &:hover ${CleanLink} {
    opacity: 0.7;
  }
`

export default CleanLink
