import styled from "styled-components";

export const StyledForm = styled.form`
  width: 35%;
  height: 65%;
  background-color: #f7f8fa;
  border-radius: 15px;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 10px;
`

export const Input = styled.input.attrs(props => ({
    type: props.type,
    name: props.name
}))`
  padding: 10px 10px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 16px;
`

export const Label = styled.label`
  color: #a7adb9;
`

export const Link = styled.a`
  color: #c3cad9;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    color: #898d94;
  }
`