import styled from 'styled-components';

export const InputFilter = styled.input`
  display: block;
  margin-top: ${p => p.theme.space[3]}px;
  height: 30px;
  width: 100%;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  border: 3px solid ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.radii.normal};
`;

export const NameInput = styled.label`
  color: ${p => p.theme.colors.text};
  font-size: ${props => props.theme.fontSizes[3]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  
`;