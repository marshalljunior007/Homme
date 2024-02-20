import styled from 'styled-components';

export const ButtonField = styled.button`
  padding: 10px 20px;
  background: ${(props) => (props.variant === 'text' ? 'none' : '#ffc701')};
  color: #000;
  border: 0px;
  border-radius: 5px;
  font-weight: bold;
`;
