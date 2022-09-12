import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 6px;
  padding: 33px;
  margin-top: 33px;
  margin-bottom: 33px;
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

  input {
    margin-top: 30px;
    border: none;
    background-color: #ededed;
    height: 40px;
    width: 300px;
    padding-left: 10px;
  }
`
