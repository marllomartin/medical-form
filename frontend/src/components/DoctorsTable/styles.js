import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 6px;
  padding: 33px;
  margin: 0px 33px 33px 33px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);

  header {
    width: 100%;
    position: relative;
    font-size: 20px;
    font-weight: 600;
    color: #3d495c;
  }

  header::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 3px;
    width: 27px;
    border-radius: 8px;
    background-color: #9CDBD9;
  }
`

export const Table = styled.table`
  margin-top: 30px;
  table-layout: fixed;

  th {
    color: #3d495c;
  }

  td, th {
    text-align: left;
    padding: 10px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;

  button {
    align-self: center;
    border: none;
    border-radius: 25px;
    width: 40px;
    height: 40px;
    font-weight: 700;
    cursor: pointer;
    margin: 5px;
    color: white;
    text-transform: uppercase;
  }

  svg {
    height: 20px;
    width: 20px;
    color: #fff;
  }

  .button-edit {
    background-color: #e87e14;
  }
  .button-delete {
    background-color: #dd373a;
  }
`