import styled, { css } from 'styled-components';

export const InputWrapper = styled.form`
  display: flex;
  gap: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    position: initial;
  }
`

const stylesToInputs = css`
  padding: 0.8rem 1.2rem;
  border-radius: 0.25rem;
  border: 2px solid var(--color-dark);
  transition: all ease .3s;
  color: var(--color-dark);
  background: #FFFFFF;

  &:hover,
  &:focus {
    box-shadow: 4px 4px 0 var(--color-dark);
  }
`

export const InputTextField = styled.input`
  ${stylesToInputs}
  width: 100%;
  font-size: 1rem;
`

export const InputSubmit = styled.button`
  ${stylesToInputs}
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;

  .addIcon {
    display: block;
    
    @media (min-width: 768px) {
      display: none;
    }
  }

  .addTitle {
    display: none;
    
    @media (min-width: 768px) {
      display: block;
    }
  }
`

export const ToastList = styled.div`
  position: fixed;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);

  > div {
    margin-bottom: 20px;
  }
`