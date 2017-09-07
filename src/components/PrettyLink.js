import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PrettyLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  font-weight: 800;
  transition: all 150ms ease;
  &:hover ${PrettyLink} {
    opacity: 0.7;
  }
`

export default PrettyLink
