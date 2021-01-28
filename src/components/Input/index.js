import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
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

export default function Input({
  onChange, placeholder, type, ...props
}) {
  return (
    <InputBase
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      {...props}
    />
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
