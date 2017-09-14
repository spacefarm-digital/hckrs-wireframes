import React from 'react'
import { Tooltip } from 'rebass'
import styled from 'styled-components'

const Comment = styled(Tooltip)`
  position: relative;
  &:before {
    font-size: 1rem;
    width: 300px;
    position: absolute;
    transform: none;
    white-space: normal;
    word-break: break-all;
    right: 4rem;
    background-color: white;
    color: black;
    box-shadow: 0 0 10px 0 rgba(61, 62, 64, 0.07),
      0 4px 8px 0 rgba(61, 62, 64, 0.025);
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    padding: 1rem;
  }
  &:after {
    display: block;
    width: 1rem;
    height: 1rem;
    background-color: red;
    border-radius: 50%;
    border: 2px solid white;
  }
`

export default Comment
