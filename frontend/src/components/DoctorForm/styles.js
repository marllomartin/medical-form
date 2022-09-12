import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  border-radius: 6px;
  padding: 35px 50px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);

  header {
    position: relative;
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }

  header::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 3px;
    width: 27px;
    border-radius: 8px;
    background-color: #4070f4;
  }
`

export const Form = styled.form`
  position: relative;
  margin-top: 16px;
  background-color: #fff;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 15px;
    margin-bottom: 5px;
  }
  input {
    border: none;
    background-color: #ededed;
    height: 40px;
    width: 100%;
    padding-left: 10px;
  }
`