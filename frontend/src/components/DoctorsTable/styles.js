import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;

  td, th {
    text-align: left;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`