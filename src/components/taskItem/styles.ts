import styled, { css } from "styled-components";

interface ITaskItemProps {
  $isFinished?: boolean
}

export const TaskItem = styled.div<ITaskItemProps>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem .8rem;
  border-radius: 0.25rem;
  border: 2px solid var(--color-dark);
  transition: all ease .3s;
  color: var(--color-dark);
  margin-bottom: 1rem;
  cursor: pointer;
  background: #FFFFFF;

  &:hover {
    box-shadow: 4px 4px 0 var(--color-dark);
  }

  ${({ $isFinished }) => $isFinished && css`
    background-color: var(--color-disabled);

    span {
      text-decoration: line-through;
    }

    &:hover {
      box-shadow: none;
    }
  `}

  @media (min-width: 768px) {
    padding: 0.8rem 1.2rem;
    flex-direction: row;
    align-items: center;
    gap: 0;
  }
`

export const TaskItemTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  span {
    width: fit-content;
    display: block;
    color: var(--color-dark);
    font-size: 1rem;
  }
`

export const Buttons = styled.div`
  width: 100%;
  display: flex;

  > button {
    width: 100%;
    margin-left: .5rem;
    border: none;
    background-color: #FFFFFF;
    border: 2px solid var(--color-dark);
    border-radius: .25rem;
    padding: 0.25rem 1.2rem;
    transition: all ease .3s;

    &:hover {
      box-shadow: 2px 2px 0 var(--color-dark);
    }
  }

  @media (min-width: 768px) {
    width: auto;
  }
`