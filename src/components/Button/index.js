import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  font: 400 1rem 'Jost';
  offset: none;
  border: none;
  display: block;
  width: 100%;
  padding: .75rem 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  font-weight: 700;
  transition: .3s;

  &:disabled{
    background-color: #8b8b8b;
    color: ${({ theme }) => theme.colors.mainBg};
    cursor: not-allowed;

    &:focus, &:hover{
      background-color: #8b8b8b;
    }
  }

  &:focus, &:hover{
    background-color: ${({ theme }) => theme.colors.secondaryOpacity};
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
