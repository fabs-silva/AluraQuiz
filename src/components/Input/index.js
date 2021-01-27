import styled from 'styled-components';

const Input = styled.input`
  font: 400 1rem 'Jost';
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: .75rem 1rem;
  color: ${({ theme }) => theme.colors.contrastText};
  
  &::placeholder{
    color: ${({ theme }) => theme.colors.contrastText};
    opacity: .6;
  }

  &:focus{
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
`;

export default Input;
