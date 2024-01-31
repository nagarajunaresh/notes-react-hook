// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

export const NotesContainer = styled.div`
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

export const Title = styled.h1`
  font-size: 1.5em;
  margin-bottom: 20px;
  font-family: 'Bree Serif';
`

export const InputTitle = styled.input`
  font-size: 1em;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const Input = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  resize: vertical;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
`
