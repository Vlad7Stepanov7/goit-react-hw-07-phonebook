import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormContacts = styled(Form)`
display: flex;
flex-direction: column;
width: 400px;
border: ${p => p.theme.borders.normal};
 
`;

export const Input = styled(Field)`
  display: block;
  margin-top: ${p => p.theme.space[3]}px;
  height: 30px;
  width: 70%;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  border: 3px solid ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.radii.normal};
`;

export const NameInput = styled.label`
  color: ${p => p.theme.colors.text};
  font-size: ${props => props.theme.fontSizes[5]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  margin-left: ${props => props.theme.space[3]}px;
`;

export const ButtonAdd = styled.button`
  width: 280px;
  height: 30px;
  margin-top: ${props => props.theme.space[3]}px;
  margin-left: ${props => props.theme.space[3]}px;
  margin-bottom: ${props => props.theme.space[3]}px;
  padding: 4px 8px;
  font-size: ${props => props.theme.fontSizes[2]}px;
  background-color: ${props => props.theme.colors.highlight};
  border-radius: ${props => props.theme.radii.normal};
  border: ${props => props.theme.borders.normal};

  :focus {
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  }
`;