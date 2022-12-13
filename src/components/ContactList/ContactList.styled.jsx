import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
`;
export const ButtonDelete = styled.button`
width: 100px;
height: 20px;
margin-left: ${props => props.theme.space[2]}px;
  background-color: ${props => props.theme.colors.accent};
  border: ${props => props.theme.borders.normal};
  border-radius: ${props => props.theme.radii.normal};
`;

export const TextContact = styled.p`
  font-size: ${props => props.theme.fontSizes[3]}px;
`;