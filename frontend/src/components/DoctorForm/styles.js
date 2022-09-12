import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 6px;
  padding: 33px 33px 5px 50px;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 5px;
  background-color: #fff;
`

export const InputContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  label {
    margin-top: 15px;
    margin-bottom: 5px;
  }
  input, select {
    border: none;
    background-color: #ededed;
    height: 40px;
    width: 100%;
    min-width: 80px;
    padding-left: 10px;
  }
`

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 10px;

  button {
    align-self: center;
    border: none;
    border-radius: 25px;
    width: 170px;
    height: 40px;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 10px;
    color: white;
    text-transform: uppercase;
  }

  .button[data-edit="false"] {
    background-color: #75d1c9;
  }
  .button[data-edit="true"] {
    background-color: #e87e14;
  }
`